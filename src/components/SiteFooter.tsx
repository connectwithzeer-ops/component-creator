import { Twitter, Linkedin, Facebook, Youtube, Github } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Pricing", "Artificial Intelligence", "Benefits", "Features", "Product Demo", "Visual Builder", "Dynamic Responses", "Analytics"],
  },
  {
    title: "Solutions",
    links: ["Sales", "Customer support", "eCommerce", "Retail", "Marketing", "Education", "Enterprise", "Healthcare"],
  },
  {
    title: "Integrations",
    links: ["Chat Widget", "LiveChat", "HelpDesk", "Facebook Messenger", "Shopify", "Slack", "Zapier", "WordPress"],
  },
  {
    title: "ChatBot Templates",
    links: ["Marketing Templates", "Sales Templates", "Support Templates"],
  },
  {
    title: "Resources",
    links: ["Help Center", "API & Developers", "ChatBot Academy", "Blog", "Chatbot Best Practices", "System Status"],
  },
  {
    title: "Company",
    links: ["About text", "Partner Program", "Find a Partner", "Press", "Careers", "LiveChat Incubator", "Legal"],
  },
];

const socials = [
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Github, label: "GitHub" },
];

export function SiteFooter() {
  return (
    <footer className="w-full bg-secondary px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-base font-bold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <span className="text-base font-bold text-foreground">Start your free trial</span>
            <button
              type="button"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign up free
            </button>
          </div>

          <div className="flex items-center gap-5">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 space-y-6">
          <p className="text-sm text-foreground">
            Copyright © 2026 Text, Inc. All rights reserved
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            We use cookies and similar technologies to enhance your interactions with our website and Services, including when you reach out to us on chat. This comprises traffic analysis, delivering personalized content, and supporting our marketing efforts. By accessing our website, interacting with our Services, you agree to let us and our partners employ cookies and similar technologies on your computer or devices. You can control the use of them through your device. To understand how we process your data, including through cookies, and different forms of interactions with us, please read our Privacy Policy.
          </p>
        </div>
      </div>
    </footer>
  );
}
