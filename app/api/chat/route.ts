import { NextResponse } from "next/server";
import { getMiniMaxResponse, ChatMessage } from "@/lib/minimax";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { messages } = body as { messages: ChatMessage[] };

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request. 'messages' array is required." },
        { status: 400 }
      );
    }

    const reply = await getMiniMaxResponse(messages);
    return NextResponse.json({ message: reply });
  } catch (error: any) {
    console.error("API Route /api/chat error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate first aid response." },
      { status: 500 }
    );
  }
}
