"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, AlertCircle, Clock } from "lucide-react";
import { ChatMessage } from "@/lib/minimax";

function parseBold(text: string, baseKey: string): React.ReactNode[] {
  const parts = text.split("**");
  return parts.map((part, idx) => {
    if (idx % 2 === 1) {
      return (
        <strong key={`${baseKey}-bold-${idx}`} className="font-bold text-accent-teal">
          {part}
        </strong>
      );
    }
    return <span key={`${baseKey}-span-${idx}`}>{part}</span>;
  });
}

// Helper function to format Markdown links ([text](url)) and bold (**text**) in message text
function formatMessageContent(content: string, onLinkClick?: () => void) {
  const lines = content.split("\n");
  return lines.map((line, lineIdx) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    let lastIndex = 0;
    const elements: React.ReactNode[] = [];
    let keyCounter = 0;

    while ((match = linkRegex.exec(line)) !== null) {
      const plainTextBefore = line.substring(lastIndex, match.index);
      if (plainTextBefore) {
        elements.push(...parseBold(plainTextBefore, `plain-${lineIdx}-${keyCounter++}`));
      }

      const linkText = match[1];
      const linkUrl = match[2];

      elements.push(
        <Link
          key={`link-${lineIdx}-${keyCounter++}`}
          href={linkUrl}
          onClick={onLinkClick}
          className="text-accent-teal hover:underline font-bold"
        >
          {linkText}
        </Link>
      );

      lastIndex = linkRegex.lastIndex;
    }

    const remainingText = line.substring(lastIndex);
    if (remainingText) {
      elements.push(...parseBold(remainingText, `remain-${lineIdx}-${keyCounter++}`));
    }

    return (
      <div key={lineIdx} className={lineIdx > 0 ? "mt-1.5 min-h-[0.5rem]" : "min-h-[0.5rem]"}>
        {elements.length > 0 ? elements : <span>&nbsp;</span>}
      </div>
    );
  });
}

export default function ChatDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"hybrid" | "ai" | "local">("hybrid");
  const [messages, setMessages] = useState<({ id: string; timestamp: string; source?: "local" | "ai" } & ChatMessage)[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I am your First Aid Assistant. How can I assist you with emergency protocols today? You can ask me about CPR, choking, stroke signs, or burns.",
      source: "local",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorToast, setErrorToast] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Suggested questions
  const suggestions = [
    "What is RICE?",
    "CPR steps",
    "Signs of stroke",
    "Choking baby"
  ];

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading, isOpen]);

  // Keyboard accessibility: Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Trap focus inside drawer when open (accessible design)
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const focusableElements = drawerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex="0"]'
      );
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [isOpen]);

  const triggerToast = (msg: string) => {
    setErrorToast(msg);
    setTimeout(() => {
      setErrorToast(null);
    }, 4000);
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ({ id: string; timestamp: string; source?: "local" | "ai" } & ChatMessage) = {
      id: Math.random().toString(36).substring(7),
      role: "user",
      content: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({
            role: m.role,
            content: m.content
          })),
          mode: mode
        })
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed network request");
      }

      const data = await res.json();
      
      setMessages(prev => [...prev, {
        id: Math.random().toString(36).substring(7),
        role: "assistant",
        content: data.message,
        source: data.source,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (err: any) {
      console.warn("Chat drawer warning:", err);
      triggerToast("Failed to connect to the medical assistant. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-label="Open AI First Aid Chatbot"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-accent-teal text-base-dark font-bold shadow-[0_0_20px_rgba(0,229,196,0.4)] border border-accent-teal/30 hover:scale-105 active:scale-95 transition-all duration-300 animate-heart-pulse cursor-pointer group"
        >
          <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
        </button>
      </div>

      {/* Slide-up / Slide-in Drawer Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-end p-0 md:p-6 pointer-events-none">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-base-dark/60 backdrop-blur-sm pointer-events-auto"
            />

            {/* Chat Drawer Container */}
            <motion.div
              ref={drawerRef}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              role="dialog"
              aria-modal="true"
              aria-label="First Aid Medical AI Assistant"
              className="relative w-full md:w-[420px] h-full md:h-[600px] max-h-full md:max-h-[85vh] bg-surface border-t md:border border-white/10 md:rounded-2xl shadow-2xl flex flex-col pointer-events-auto overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex flex-col p-4 border-b border-white/5 bg-white/[0.01] gap-3">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-teal animate-pulse" />
                    <div>
                      <h2 className="font-display font-bold text-sm text-text-primary tracking-wide uppercase">
                        FIRST AID CO-PILOT
                      </h2>
                      <p className="text-[10px] text-accent-teal font-mono tracking-wider uppercase">
                        Certified Protocols AI
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-white/5 text-text-muted hover:text-text-primary transition-all cursor-pointer"
                    aria-label="Close Chat"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mode Segmented Toggle Switch */}
                <div className="grid grid-cols-3 bg-white/[0.03] border border-white/[0.06] rounded-lg p-0.5 text-[9px] font-mono select-none">
                  <button
                    type="button"
                    onClick={() => setMode("hybrid")}
                    className={`py-1.5 rounded text-center transition-all cursor-pointer ${
                      mode === "hybrid"
                        ? "bg-accent-teal text-[#070b16] font-bold shadow-[0_0_10px_rgba(0,229,196,0.2)]"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    🤖 SMART AUTO
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("ai")}
                    className={`py-1.5 rounded text-center transition-all cursor-pointer ${
                      mode === "ai"
                        ? "bg-accent-teal text-[#070b16] font-bold shadow-[0_0_10px_rgba(0,229,196,0.2)]"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    ⚡ LIVE AI
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("local")}
                    className={`py-1.5 rounded text-center transition-all cursor-pointer ${
                      mode === "local"
                        ? "bg-accent-teal text-[#070b16] font-bold shadow-[0_0_10px_rgba(0,229,196,0.2)]"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    📋 OFFLINE MANUAL
                  </button>
                </div>

                {/* Subtitle helper description */}
                <p className="text-[9px] font-mono text-text-muted/80 leading-relaxed text-center px-1">
                  {mode === "hybrid" && "🤖 Auto-routes standard cases to clinical manual, and custom scenarios to AI."}
                  {mode === "ai" && "⚡ Runs all questions directly through the live AI Co-Pilot."}
                  {mode === "local" && "📋 Strictly accesses pre-verified offline protocols database."}
                </p>
              </div>

              {/* Toast Error Alert */}
              <AnimatePresence>
                {errorToast && (
                  <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    className="absolute top-16 left-4 right-4 bg-severe-red/90 text-white p-3 rounded-xl flex items-center gap-2 text-xs font-medium z-20 shadow-lg backdrop-blur-md"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorToast}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message History */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => {
                  const isAssistant = msg.role === "assistant";
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isAssistant ? "items-start" : "items-end"} space-y-1`}
                    >
                      <div className="flex items-center gap-1.5 text-[9px] font-mono text-text-muted px-1.5">
                        <span>{isAssistant ? "AI ASSISTANT" : "PATIENT"}</span>
                        {isAssistant && msg.source && (
                          <span className={`px-1 py-0.5 rounded-[4px] border uppercase text-[8px] font-bold ${
                            msg.source === "ai" 
                              ? "bg-accent-teal/10 border-accent-teal/35 text-accent-teal" 
                              : "bg-moderate-yellow/10 border-moderate-yellow/30 text-moderate-yellow"
                          }`}>
                            {msg.source === "ai" ? "⚡ AI Co-Pilot" : "💾 Local Guide"}
                          </span>
                        )}
                        <Clock className="w-3 h-3 text-white/10" />
                        <span>{msg.timestamp}</span>
                      </div>
                      
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          isAssistant
                            ? "bg-white/[0.03] border border-white/[0.05] text-text-primary rounded-tl-sm"
                            : "bg-accent-teal/10 border border-accent-teal/20 text-accent-teal rounded-tr-sm"
                        }`}
                      >
                        {/* Render formatted markdown bold and newlines */}
                        <div className="font-sans">
                          {formatMessageContent(msg.content, () => setIsOpen(false))}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Loading / Typing Indicator */}
                {isLoading && (
                  <div className="flex flex-col items-start space-y-1">
                    <div className="text-[9px] font-mono text-text-muted px-1.5">
                      AI DIAGNOSING...
                    </div>
                    <div className="flex gap-1 items-center py-3 px-4 bg-white/[0.02] border border-white/[0.04] rounded-2xl rounded-tl-sm w-16">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestions */}
              {messages.length === 1 && !isLoading && (
                <div className="px-4 py-2 border-t border-white/5 bg-white/[0.005]">
                  <div className="text-[9px] font-mono text-text-muted uppercase mb-1.5 tracking-wider">
                    Quick Consultation Questions:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {suggestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => handleSendMessage(q)}
                        className="text-xs font-mono py-1.5 px-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-text-muted hover:text-accent-teal hover:border-accent-teal/30 hover:bg-accent-teal/5 transition-all cursor-pointer"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(input);
                }}
                className="p-3 border-t border-white/5 bg-surface"
              >
                <div className="flex items-center gap-2 bg-white/[0.02] border border-white/[0.06] rounded-xl px-3 py-1.5 focus-within:border-accent-teal/30 focus-within:bg-white/[0.03] transition-all">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question (e.g. CPR steps)..."
                    disabled={isLoading}
                    className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none border-none disabled:opacity-50 py-1"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="p-1.5 rounded-lg bg-accent-teal-dim text-accent-teal hover:bg-accent-teal hover:text-base-dark transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    aria-label="Send Message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
