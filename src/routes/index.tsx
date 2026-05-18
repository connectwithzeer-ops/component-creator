import { createFileRoute } from "@tanstack/react-router";
import { SignupPage } from "@/components/SignupPage";

export const Route = createFileRoute("/")({
  component: SignupPage,
  head: () => ({
    meta: [
      { title: "Sign up | ChatBot" },
      { name: "description", content: "Create your free ChatBot account. No credit card needed." },
    ],
  }),
});
