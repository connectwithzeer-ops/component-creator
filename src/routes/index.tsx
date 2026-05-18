import { createFileRoute, Link } from "@tanstack/react-router";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-foreground">ChatBot</h1>
        <p className="mt-2 text-muted-foreground">Welcome.</p>
        <Link
          to="/admin"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Admin Login
        </Link>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ChatBot" },
      { name: "description", content: "ChatBot homepage." },
    ],
  }),
});
