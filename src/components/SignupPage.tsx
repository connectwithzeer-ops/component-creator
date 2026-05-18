import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.4 29.1 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5 43.5 34.8 43.5 24c0-1.2-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.4 29.1 4.5 24 4.5 16.3 4.5 9.7 8.9 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 43.5c5 0 9.5-1.9 12.9-5l-6-4.9c-1.9 1.3-4.3 2.1-6.9 2.1-5.3 0-9.7-3.1-11.3-7.5l-6.5 5C9.5 39 16.2 43.5 24 43.5z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.4 5.6l6 4.9c-.4.4 6.6-4.8 6.6-14.5 0-1.2-.1-2.3-.4-3.5z" />
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#F25022" d="M1 1h10v10H1z" />
      <path fill="#7FBA00" d="M13 1h10v10H13z" />
      <path fill="#00A4EF" d="M1 13h10v10H1z" />
      <path fill="#FFB900" d="M13 13h10v10H13z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.42 2.21-1.18 3.04-.83.9-2.18 1.59-3.29 1.5-.14-1.09.42-2.24 1.16-3.06.83-.92 2.27-1.59 3.31-1.48zM20.5 17.27c-.56 1.3-.83 1.88-1.56 3.03-1.01 1.6-2.44 3.6-4.21 3.62-1.58.02-1.98-1.03-4.12-1.02-2.14.01-2.58 1.04-4.16 1.02-1.77-.02-3.13-1.82-4.14-3.42-2.84-4.49-3.14-9.76-1.39-12.56 1.24-1.99 3.2-3.16 5.04-3.16 1.87 0 3.05 1.03 4.6 1.03 1.5 0 2.42-1.03 4.58-1.03 1.64 0 3.38.9 4.62 2.45-4.06 2.22-3.4 8.02.74 9.04z" />
    </svg>
  );
}

export function SignupPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="flex items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[oklch(0.55_0.22_255)] text-white">
            <MessageCircle className="h-5 w-5" fill="currentColor" />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-bold text-foreground">ChatBot</div>
            <div className="text-[10px] text-muted-foreground">powered by <span className="font-bold">text|</span></div>
          </div>
        </div>
        <button
          type="button"
          className="rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
        >
          Log in
        </button>
      </header>

      <main className="flex-1 flex justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Get started for free</h1>
            <p className="mt-2 text-base text-muted-foreground">No credit card needed</p>
          </div>

          <div className="mt-8 space-y-3">
            <button type="button" className="flex w-full items-center justify-center gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
              <GoogleIcon />
              Sign up with Google
            </button>
            <button type="button" className="flex w-full items-center justify-center gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
              <MicrosoftIcon />
              Sign up with Microsoft
            </button>
            <button type="button" className="flex w-full items-center justify-center gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
              <AppleIcon />
              Sign up with Apple
            </button>
          </div>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm text-muted-foreground">or</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
                Business email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@work-email.com"
                className="w-full rounded-md border border-border bg-card px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.22_255)] focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[oklch(0.55_0.22_25)] py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Sign up with email
            </button>
          </form>

          <p className="mt-5 text-center text-sm text-foreground">
            Already have an account?{" "}
            <a href="#" className="font-medium text-[oklch(0.55_0.22_255)] hover:underline">
              Log in
            </a>
          </p>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            You agree to our{" "}
            <a href="#" className="font-medium text-[oklch(0.55_0.22_255)] hover:underline">Terms of Use</a>
            {" "}and{" "}
            <a href="#" className="font-medium text-[oklch(0.55_0.22_255)] hover:underline">Privacy Policy</a>
          </p>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        powered by <span className="font-bold text-foreground">text|</span>
      </footer>
    </div>
  );
}
