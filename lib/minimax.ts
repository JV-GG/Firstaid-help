import { firstAidCategories } from "./firstaid-data";

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export async function getMiniMaxResponse(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.MINIMAX_API_KEY || process.env.NEXT_PUBLIC_MINIMAX_API_KEY || "";
  const baseUrl = process.env.MINIMAX_BASE_URL || "";
  const model = process.env.MINIMAX_MODEL || "MiniMax-M2.7";

  try {
    if (!apiKey) {
      throw new Error("MiniMax API key is not configured.");
    }

    const systemPromptContent = "You are a certified first aid assistant. Give clear, calm, step-by-step emergency guidance. Keep responses concise but complete. Format your response clearly using markdown bullet points or steps. IMPORTANT: Always instruct the user to call 999 for emergency services if a serious situation is detected. Do NOT suggest 911, 112, or any other number, as the emergency services hotline is strictly 999.";

    if (baseUrl) {
      // 1. Anthropic-compatible Proxy Route (like SignalTrade uses)
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

      // Ensure system prompt is first in the list
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
          temperature: 0.2, // lower temperature for more deterministic/factual first aid advice
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
  } catch (error) {
    console.warn("Error calling MiniMax API (falling back to local offline responder):", error);
    return getLocalFallbackResponse(messages);
  }
}

function getLocalFallbackResponse(messages: ChatMessage[]): string {
  const userMessage = messages.filter(m => m.role === "user").pop()?.content || "";
  const query = userMessage.toLowerCase().trim();

  // Try to match category or specific injury type
  let matchedType: any = null;
  let matchedCategory: any = null;

  for (const cat of firstAidCategories) {
    // Check if category name matches
    if (query.includes(cat.name.toLowerCase()) || query.includes(cat.slug.toLowerCase())) {
      matchedCategory = cat;
    }
    for (const t of cat.types) {
      if (query.includes(t.name.toLowerCase()) || (t.bodyPart && query.includes(t.bodyPart.toLowerCase()))) {
        matchedType = t;
        matchedCategory = cat;
        break;
      }
    }
    if (matchedType) break;
  }

  // Common synonyms or acronyms
  if (!matchedType) {
    if (query.includes("cpr") || query.includes("cardiac") || query.includes("heart")) {
      // Find CPR
      const heartCat = firstAidCategories.find(c => c.id === "heart-cardiac");
      matchedType = heartCat?.types.find(t => t.id === "cardiac-arrest");
      matchedCategory = heartCat;
    } else if (query.includes("rice")) {
      // Find ankle sprain as default sprain example
      const sprainCat = firstAidCategories.find(c => c.id === "sprains-strains");
      matchedType = sprainCat?.types.find(t => t.id === "ankle-sprain");
      matchedCategory = sprainCat;
    } else if (query.includes("choking") || query.includes("heimlich")) {
      const chokeCat = firstAidCategories.find(c => c.id === "choking");
      matchedType = chokeCat?.types[0]; // adult choking
      matchedCategory = chokeCat;
    } else if (query.includes("stroke") || query.includes("fast")) {
      const headCat = firstAidCategories.find(c => c.id === "head-brain");
      matchedType = headCat?.types.find(t => t.id === "stroke");
      matchedCategory = headCat;
    } else if (query.includes("seizure") || query.includes("fit")) {
      const headCat = firstAidCategories.find(c => c.id === "head-brain");
      matchedType = headCat?.types.find(t => t.id === "seizure");
      matchedCategory = headCat;
    } else if (query.includes("burn")) {
      const burnCat = firstAidCategories.find(c => c.id === "burns");
      matchedType = burnCat?.types[0];
      matchedCategory = burnCat;
    } else if (query.includes("bleed") || query.includes("wound") || query.includes("cut")) {
      const bleedCat = firstAidCategories.find(c => c.id === "bleeding-wounds");
      matchedType = bleedCat?.types[0];
      matchedCategory = bleedCat;
    }
  }

  const prefix = "*(Offline / Local Co-Pilot Mode)*\n\n";

  if (matchedType) {
    let response = `${prefix}Here is the verified medical protocol for **${matchedType.name}**:\n\n`;
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
  }

  if (matchedCategory) {
    let response = `${prefix}I found the category **${matchedCategory.name}** in the local database.\n\n`;
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

  // Default general response
  return `${prefix}I am currently operating in **Local Offline Mode** due to an API connectivity issue.\n\nHere are the critical first aid protocols for any situation:\n\n1. **Ensure Safety**: Assess the scene first. Never place yourself or the patient in further danger.\n2. **Check Responsiveness**: Tap the shoulders and ask loudly: *"Are you okay?"*\n3. **Call 999**: If the patient is unresponsive, struggling to breathe, or has severe bleeding/pain, call emergency services immediately.\n4. **Maintain Airway**: Ensure their airway is clear. If they are breathing but unconscious, place them in the **Recovery Position** (on their side).\n5. **Stop Bleeding**: Apply firm, direct pressure with a clean cloth/bandage to any active wounds.\n6. **Do No Harm**: Avoid moving a patient who may have head, neck, or back trauma unless absolutely necessary.\n\n*Please ask about a specific injury (e.g. CPR steps, ankle sprain, burns, stroke, choking) to get detailed protocols.*`;
}
