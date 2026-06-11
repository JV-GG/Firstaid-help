export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export async function getMiniMaxResponse(messages: ChatMessage[]): Promise<string> {
  const apiKey = process.env.MINIMAX_API_KEY || process.env.NEXT_PUBLIC_MINIMAX_API_KEY || "";

  try {
    const systemPrompt: ChatMessage = {
      role: "system",
      content: "You are a certified first aid assistant. Give clear, calm, step-by-step emergency guidance. Always remind users to call emergency services for serious situations. Keep responses concise but complete. Format your response clearly using markdown bullet points or steps."
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
        model: "MiniMax-M2.7", // specified by user
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
  } catch (error) {
    console.error("Error calling MiniMax API:", error);
    throw error;
  }
}
