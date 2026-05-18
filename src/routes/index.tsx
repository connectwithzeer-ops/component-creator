import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/components/LoginPage";

export const Route = createFileRoute("/")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Log in | ChatBot" },
      { name: "description", content: "Log in to your ChatBot account to manage your bots and conversations." },
    ],
  }),
});
