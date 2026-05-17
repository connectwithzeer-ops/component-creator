import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <FaqSection />
      <CtaSection />
    </main>
  );
}
