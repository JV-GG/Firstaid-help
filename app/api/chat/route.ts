import { NextResponse } from "next/server";
import { getCoPilotResponse, ChatMessage } from "@/lib/minimax";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages, mode } = body as { 
      messages: ChatMessage[]; 
      mode?: "hybrid" | "ai" | "local" 
    };

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request. 'messages' array is required." },
        { status: 400 }
      );
    }

    const result = await getCoPilotResponse(messages, mode || "hybrid");
    return NextResponse.json({ message: result.message, source: result.source });
  } catch (error: any) {
    console.warn("API Route /api/chat error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate first aid response." },
      { status: 500 }
    );
  }
}
