import { firstAidCategories } from "./firstaid-data";

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface LocalMatch {
  type: "category" | "protocol";
  data: any;
}

/**
 * Main entry point for the co-pilot chat router.
 */
export async function getCoPilotResponse(
  messages: ChatMessage[],
  mode: "hybrid" | "ai" | "local"
): Promise<{ message: string; source: "local" | "ai" }> {
  const userMessage = messages.filter(m => m.role === "user").pop()?.content || "";

  // 1. Force Local Mode
  if (mode === "local") {
    const match = findLocalMatch(userMessage);
    if (match) {
      return { message: injectProtocolHyperlinks(formatLocalResponse(match)), source: "local" };
    }
    return { message: injectProtocolHyperlinks(getGeneralLocalResponse()), source: "local" };
  }

  // 2. Hybrid Mode (Try matching local guide first)
  if (mode === "hybrid") {
    const match = findLocalMatch(userMessage);
    if (match) {
      return { message: injectProtocolHyperlinks(formatLocalResponse(match)), source: "local" };
    }
  }

  // 3. AI Mode or Hybrid with no local match -> Call MiniMax API
  try {
    const reply = await getMiniMaxResponse(messages);
    return { message: injectProtocolHyperlinks(reply), source: "ai" };
  } catch (err) {
    console.warn("API call failed, falling back to local database:", err);
    // Fail-safe local fallback
    const match = findLocalMatch(userMessage);
    if (match) {
      return { 
        message: `*(Offline / Local Fallback)*\n\n${injectProtocolHyperlinks(formatLocalResponse(match))}`, 
        source: "local" 
      };
    }
    return { 
      message: `*(Offline / Local Fallback)*\n\n${injectProtocolHyperlinks(getGeneralLocalResponse())}`, 
      source: "local" 
    };
  }
}

/**
 * Scans response text for keywords matching our clinical database
 * and cleanly appends quick links to direct users to protocol pages.
 */
export function injectProtocolHyperlinks(text: string): string {
  const lowercaseText = text.toLowerCase();
  const matchedProtocols: { name: string; url: string }[] = [];

  for (const cat of firstAidCategories) {
    for (const type of cat.types) {
      // Create keywords to search for
      const keywords = [
        type.name.toLowerCase(),
        type.id.toLowerCase().replace("-", " ")
      ];

      // Add common synonyms
      if (type.id === "cardiac-arrest") {
        keywords.push("cpr");
      } else if (type.id === "stroke") {
        keywords.push("fast protocol");
      }

      // Check for word boundaries of keywords to ensure high matching accuracy
      const matchesKeyword = keywords.some(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, "i");
        return regex.test(lowercaseText);
      });

      if (matchesKeyword) {
        matchedProtocols.push({
          name: type.name,
          url: `/category/${cat.slug}/${type.id}`
        });
      }
    }
  }

  // Deduplicate matched protocols by URL and limit to top 3 links to keep it clean
  const uniqueMatches = Array.from(
    new Map(matchedProtocols.map(item => [item.url, item])).values()
  ).slice(0, 3);

  if (uniqueMatches.length > 0) {
    let linksSection = "\n\n---\n**🔗 Quick Protocol Links:**\n";
    uniqueMatches.forEach(match => {
      linksSection += `- [View ${match.name} Protocol](${match.url})\n`;
    });
    return text + linksSection;
  }

  return text;
}

/**
 * Searches the local clinical database for a query match.
 */
export function findLocalMatch(query: string): LocalMatch | null {
  const q = query.toLowerCase().trim();

  // 1. Try exact or clear matches in firstAidCategories
  for (const cat of firstAidCategories) {
    if (q === cat.name.toLowerCase() || q === cat.slug.toLowerCase()) {
      return { type: "category", data: cat };
    }
    for (const t of cat.types) {
      if (q === t.name.toLowerCase() || q === t.id.toLowerCase()) {
        return { type: "protocol", data: t };
      }
    }
  }

  // 2. Try partial keyword matches
  for (const cat of firstAidCategories) {
    if (q.includes(cat.name.toLowerCase()) || q.includes(cat.slug.toLowerCase())) {
      return { type: "category", data: cat };
    }
    for (const t of cat.types) {
      if (q.includes(t.name.toLowerCase()) || (t.bodyPart && q.includes(t.bodyPart.toLowerCase()))) {
        return { type: "protocol", data: t };
      }
    }
  }

  // 3. Common synonyms or acronyms
  if (q.includes("cpr") || q.includes("cardiac") || q.includes("heart")) {
    const heartCat = firstAidCategories.find(c => c.id === "heart-cardiac");
    const cprProto = heartCat?.types.find(t => t.id === "cardiac-arrest");
    if (cprProto) return { type: "protocol", data: cprProto };
  } else if (q.includes("rice")) {
    const sprainCat = firstAidCategories.find(c => c.id === "sprains-strains");
    const ankleProto = sprainCat?.types.find(t => t.id === "ankle-sprain");
    if (ankleProto) return { type: "protocol", data: ankleProto };
  } else if (q.includes("choking") || q.includes("heimlich")) {
    const chokeCat = firstAidCategories.find(c => c.id === "choking");
    if (chokeCat) return { type: "protocol", data: chokeCat.types[0] };
  } else if (q.includes("stroke") || q.includes("fast")) {
    const headCat = firstAidCategories.find(c => c.id === "head-brain");
    const strokeProto = headCat?.types.find(t => t.id === "stroke");
    if (strokeProto) return { type: "protocol", data: strokeProto };
  } else if (q.includes("seizure") || q.includes("fit")) {
    const headCat = firstAidCategories.find(c => c.id === "head-brain");
    const seizureProto = headCat?.types.find(t => t.id === "seizure");
    if (seizureProto) return { type: "protocol", data: seizureProto };
  } else if (q.includes("burn")) {
    const burnCat = firstAidCategories.find(c => c.id === "burns");
    if (burnCat) return { type: "protocol", data: burnCat.types[0] };
  } else if (q.includes("bleed") || q.includes("wound") || q.includes("cut")) {
    const bleedCat = firstAidCategories.find(c => c.id === "bleeding-wounds");
    if (bleedCat) return { type: "protocol", data: bleedCat.types[0] };
  }

  return null;
}

/**
 * Formats a matched local taxonomy data object into a markdown message.
 */
export function formatLocalResponse(match: LocalMatch): string {
  if (match.type === "protocol") {
    const matchedType = match.data;
    let response = `Here is the verified medical protocol for **${matchedType.name}**:\n\n`;
    response += `**Overview**: ${matchedType.overview}\n\n`;
    
    if (matchedType.formula) {
      response += `**Directives (${matchedType.formula.acronym})**:\n`;
      matchedType.formula.steps.forEach((s: string) => {
        response += `- ${s}\n`;
      });
      response += `\n`;
    }

    response += `### 📋 Step-by-Step Action Plan:\n`;
    matchedType.steps.forEach((step: any) => {
      response += `${step.stepNumber}. **${step.title}** - ${step.description}\n`;
      if (step.warning) {
        response += `   *⚠️ Warning: ${step.warning}*\n`;
      }
    });
    response += `\n`;

    if (matchedType.doNots && matchedType.doNots.length > 0) {
      response += `### ❌ DO NOTS (Contraindications):\n`;
      matchedType.doNots.forEach((dn: string) => {
        response += `- ${dn}\n`;
      });
      response += `\n`;
    }

    if (matchedType.whenToSeekHelp && matchedType.whenToSeekHelp.length > 0) {
      response += `### 🚨 When to Seek Emergency Help:\n`;
      matchedType.whenToSeekHelp.forEach((w: string) => {
        response += `- ${w}\n`;
      });
      response += `\n`;
    }

    if (matchedType.estimatedRecovery) {
      response += `*Estimated Recovery Time: ${matchedType.estimatedRecovery}*\n\n`;
    }

    response += `*Disclaimer: In case of life-threatening emergencies, always call 999 immediately.*`;
    return response;
  } else {
    const matchedCategory = match.data;
    let response = `I found the category **${matchedCategory.name}** in the local database.\n\n`;
    response += `${matchedCategory.description}\n\n`;
    response += `**Immediate Directives (${matchedCategory.formula})**:\n`;
    matchedCategory.formulaExpanded.forEach((fe: string) => {
      response += `- ${fe}\n`;
    });
    response += `\nHere are some specific protocols in this category you can ask about:\n`;
    matchedCategory.types.forEach((t: any) => {
      response += `- **${t.name}** (Severity: ${t.severity.toUpperCase()})\n`;
    });
    response += `\n*Disclaimer: In case of life-threatening emergencies, always call 999 immediately.*`;
    return response;
  }
}

/**
 * Returns a standard offline guideline message.
 */
export function getGeneralLocalResponse(): string {
  return `Here are the critical first aid protocols for any situation:

1. **Ensure Safety**: Assess the scene first. Never place yourself or the patient in further danger.
2. **Check Responsiveness**: Tap the shoulders and ask loudly: *"Are you okay?"*
3. **Call 999**: If the patient is unresponsive, struggling to breathe, or has severe bleeding/pain, call emergency services immediately.
4. **Maintain Airway**: Ensure their airway is clear. If they are breathing but unconscious, place them in the **Recovery Position** (on their side).
5. **Stop Bleeding**: Apply firm, direct pressure with a clean cloth/bandage to any active wounds.
6. **Do No Harm**: Avoid moving a patient who may have head, neck, or back trauma unless absolutely necessary.

*Please ask about a specific injury (e.g. CPR steps, ankle sprain, burns, stroke, choking) to get detailed protocols.*`;
}

/**
 * Calls the MiniMax completion API directly. Throws on error.
 */
export async function getMiniMaxResponse(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.MINIMAX_API_KEY || process.env.NEXT_PUBLIC_MINIMAX_API_KEY || "";
  const baseUrl = process.env.MINIMAX_BASE_URL || "";
  const model = process.env.MINIMAX_MODEL || "MiniMax-M2.7";

  if (!apiKey) {
    throw new Error("MiniMax API key is not configured.");
  }

  const systemPromptContent = "You are a certified first aid assistant. Give clear, calm, step-by-step emergency guidance. Keep responses concise but complete. Format your response clearly using markdown bullet points or steps. IMPORTANT: Always instruct the user to call 999 for emergency services if a serious situation is detected. Do NOT suggest 911, 112, or any other number, as the emergency services hotline is strictly 999.";

  if (baseUrl) {
    // 1. Anthropic-compatible Proxy Route
    const apiMessages: { role: "user" | "assistant"; content: string }[] = [];
    for (const m of messages) {
      if (m.role !== "user" && m.role !== "assistant") continue;
      const last = apiMessages[apiMessages.length - 1];
      if (last && last.role === m.role) {
        last.content += "\n" + m.content;
      } else {
        apiMessages.push({
          role: m.role as "user" | "assistant",
          content: m.content
        });
      }
    }

    while (apiMessages.length > 0 && apiMessages[0].role !== "user") {
      apiMessages.shift();
    }

    if (apiMessages.length === 0) {
      throw new Error("No user messages found.");
    }

    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/v1/messages`, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        model: model,
        max_tokens: 1024,
        system: systemPromptContent,
        messages: apiMessages,
        temperature: 0.2
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`MiniMax Proxy error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    console.log("MiniMax Proxy raw response:", JSON.stringify(data));

    let content = "";
    if (data.content && Array.isArray(data.content)) {
      for (const block of data.content) {
        if (block.type === "text") {
          content = block.text;
          break;
        } else if (block.type === "thinking") {
          content = block.thinking || block.text || "";
        }
      }
    }

    if (!content && data.content?.[0]?.text) {
      content = data.content[0].text;
    }

    if (!content) {
      throw new Error("Empty response received from MiniMax Proxy.");
    }

    return content;
  } else {
    // 2. Standard Official MiniMax Route
    const systemPrompt: ChatMessage = {
      role: "system",
      content: systemPromptContent
    };

    const apiMessages = [systemPrompt, ...messages.filter(m => m.role !== "system")];

    const response = await fetch("https://api.minimax.chat/v1/text/chatcompletion_v2", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: model,
        messages: apiMessages.map(m => ({
          role: m.role,
          content: m.content
        })),
        temperature: 0.2,
        max_tokens: 1024
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`MiniMax API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    console.log("MiniMax API raw response data:", JSON.stringify(data));

    if (data.base_resp && data.base_resp.status_code !== 0) {
      throw new Error(`MiniMax API error: ${data.base_resp.status_msg} (Code ${data.base_resp.status_code})`);
    }

    const content = data.choices?.[0]?.message?.content || "";
    
    if (!content) {
      throw new Error("Empty response received from MiniMax API choices payload.");
    }

    return content;
  }
}
