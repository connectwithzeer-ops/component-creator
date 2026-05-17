import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "What is ChatBot by Text?",
    a: "ChatBot by Text is an AI-powered platform that helps you automate conversations and sell products directly through chat across multiple channels.",
  },
  {
    q: "Can a chatbot actually help sell?",
    a: "Yes — chatbots qualify leads, recommend products, and recover abandoned carts 24/7, often increasing conversion rates by 20-40%.",
  },
  {
    q: "Do I need technical skills to set this up?",
    a: "Not at all. Our visual drag-and-drop builder lets you launch your first bot in minutes — no coding required.",
  },
  {
    q: "How much does it cost?",
    a: "Plans start free for small teams. Paid plans scale based on the number of conversations and integrations you need.",
  },
  {
    q: "What are AI-powered customer service bots?",
    a: "They're bots that use natural language processing to understand customer intent and resolve queries automatically, escalating to humans when needed.",
  },
  {
    q: "How can chatbots help in engaging potential customers?",
    a: "By greeting visitors instantly, answering questions in real time, and guiding them toward the right product or action.",
  },
  {
    q: "How does ChatBot by Text work?",
    a: "Connect your channels, design conversation flows, and let the bot handle messages automatically — with handover to your team anytime.",
  },
  {
    q: "What channels does it support?",
    a: "Website widget, WhatsApp, Facebook Messenger, Instagram, SMS, and Slack — all from one unified inbox.",
  },
  {
    q: "Can I try it for free?",
    a: "Yes, you get a full 14-day free trial with no credit card required. Cancel anytime.",
  },
  {
    q: "How do AI chatbots handle customer interactions?",
    a: "They analyze intent, fetch relevant data from your knowledge base, and respond in a natural, on-brand voice.",
  },
  {
    q: "How do chatbots contribute to marketing efforts?",
    a: "They capture leads, segment audiences, trigger personalized campaigns, and nurture prospects throughout the funnel.",
  },
  {
    q: "How can I configure ChatBot to fulfil legal obligation?",
    a: "Built-in GDPR tools, consent prompts, and data retention controls help you stay compliant with regional regulations.",
  },
];

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg bg-card shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-medium text-foreground">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={2.5}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
          {item.a}
        </div>
      )}
    </div>
  );
}

export function FaqSection() {
  const mid = Math.ceil(faqs.length / 2);
  const left = faqs.slice(0, mid);
  const right = faqs.slice(mid);

  return (
    <section className="w-full bg-secondary py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            {left.map((item) => (
              <FaqRow key={item.q} item={item} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {right.map((item) => (
              <FaqRow key={item.q} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
