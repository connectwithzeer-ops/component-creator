import { MessageSquare, CheckSquare, BookOpen, Zap } from "lucide-react";
import textProduct from "@/assets/text-product.png";

interface SideProduct {
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

const sideProducts: SideProduct[] = [
  {
    icon: MessageSquare,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    title: "LiveChat",
    description: "Real-time conversations that convert",
  },
  {
    icon: CheckSquare,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "HelpDesk",
    description: "Effortless ticketing and team collaboration",
  },
  {
    icon: BookOpen,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "KnowledgeBase",
    description: "Self-service that reduces ticket volume",
  },
];

export function ProductsSection() {
  return (
    <section className="w-full bg-secondary py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Discover our products
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Featured product */}
          <div className="rounded-2xl bg-card shadow-sm overflow-hidden flex flex-col">
            <div className="p-4">
              <img
                src={textProduct}
                alt="Text — AI-powered support product preview"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="flex flex-wrap items-center gap-4 px-6 py-5 border-t border-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-6 w-6 text-primary-foreground" fill="currentColor" />
              </div>
              <div className="flex-1 min-w-[200px]">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-foreground">Text</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded border border-border text-foreground">
                    NEW
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  AI-powered support built to drive revenue
                </p>
              </div>
              <button
                type="button"
                className="rounded-lg border border-foreground px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                See more
              </button>
            </div>
          </div>

          {/* Side products */}
          <div className="flex flex-col gap-6">
            {sideProducts.map((p) => (
              <div
                key={p.title}
                className="flex items-center gap-5 rounded-2xl bg-card shadow-sm p-6"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-lg ${p.iconBg}`}>
                  <p.icon className={`h-7 w-7 ${p.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
