import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { ProductsSection } from "@/components/ProductsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { ChatWidget } from "@/components/ChatWidget";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <CtaSection />
      <FaqSection />
      <ProductsSection />
      <SiteFooter />
      <ChatWidget />
    </main>
  );
}
