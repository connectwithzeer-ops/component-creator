import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";

export function CtaSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signup:", email);
  };

  return (
    <section className="w-full bg-background py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
          Start selling with ChatBot by Text.
          <br />
          Free trial. Setup in minutes.
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-2xl mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your business email"
            className="flex-1 rounded-md border-2 border-foreground bg-background px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Sign up free
          </button>
        </form>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-foreground">
          <span className="inline-flex items-center gap-2">
            <Check className="h-4 w-4" strokeWidth={3} />
            Free 14-day trial
          </span>
          <span className="inline-flex items-center gap-2">
            <Check className="h-4 w-4" strokeWidth={3} />
            No credit card required
          </span>
        </div>
      </div>
    </section>
  );
}
