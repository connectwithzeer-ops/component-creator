import { createFileRoute } from "@tanstack/react-router";
import { AdminLoginPage } from "@/components/AdminLoginPage";

export const Route = createFileRoute("/admin")({
  component: AdminLoginPage,
  head: () => ({
    meta: [
      { title: "Admin Login | ChatBot" },
      { name: "description", content: "Sign in to the ChatBot admin dashboard." },
    ],
  }),
});
