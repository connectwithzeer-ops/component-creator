import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "@/components/CtaSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen flex items-center">
      <CtaSection />
    </main>
  );
}
