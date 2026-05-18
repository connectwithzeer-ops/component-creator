import { useState, useRef, useEffect, type FormEvent } from "react";
import { MessageCircle, X, ArrowUp } from "lucide-react";

interface ChatMessage {
  role: "user" | "bot";
  text: string;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: "Thanks for your message! Our team will get back to you shortly.",
        },
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Compact bubble (closed state) */}
      {!open && (
        <div className="flex items-center gap-2 rounded-full bg-card shadow-lg pl-2 pr-1 py-1 max-w-[260px]">
          <button
            type="button"
            aria-label="Dismiss"
            onClick={() => setMessages([{ role: "bot", text: "Hi there! How can I help you today?" }])}
            className="flex h-6 w-6 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex-1 text-left text-sm text-muted-foreground px-2 py-2"
          >
            Write a message...
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Send"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-secondary/80"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Expanded chat panel */}
      {open && (
        <div className="flex w-[340px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl bg-card shadow-2xl border border-border">
          <div className="flex items-center justify-between bg-[oklch(0.55_0.18_255)] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold text-sm">Chat with us</span>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 max-h-80 overflow-y-auto p-4 space-y-3 bg-secondary/40"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-2xl px-3 py-2 text-sm max-w-[80%] ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card text-foreground border border-border rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-border bg-card p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a message..."
              className="flex-1 rounded-full bg-secondary px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)] text-white hover:opacity-90"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating action button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Minimize chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)] text-white shadow-xl transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" fill="currentColor" />}
      </button>
    </div>
  );
}
