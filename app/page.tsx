"use client";
import { useEffect, useRef, useState } from "react";
import { Music } from "lucide-react";

export default function HomePage() {
  const [dailyQuote, setDailyQuote] = useState<{
    quote: string;
    author: string;
  } | null>(null);
  const [coolingDown, setCoolingDown] = useState(false);
  const [progress, setProgress] = useState(0);
  const cooldownMs = 20000;
  const cooldownTimer = useRef<number | null>(null);

  const refreshQuote = () => {
    fetch("/api/daily-quote?fresh=1", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => setDailyQuote(d))
      .catch(() => {});
  };

  const beginCooldown = () => {
    if (cooldownTimer.current) {
      window.clearInterval(cooldownTimer.current);
      cooldownTimer.current = null;
    }
    setCoolingDown(true);
    setProgress(0);
    const start = Date.now();
    cooldownTimer.current = window.setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.floor((elapsed / cooldownMs) * 100));
      setProgress(pct);
      if (elapsed >= cooldownMs) {
        if (cooldownTimer.current) {
          window.clearInterval(cooldownTimer.current);
          cooldownTimer.current = null;
        }
        setCoolingDown(false);
        setProgress(0);
      }
    }, 100);
  };

  useEffect(() => {
    let cancelled = false;
    fetch("/api/daily-quote")
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled) setDailyQuote(d);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mb-10">
      <div className="pt-16 px-8 md:px-16 flex flex-col gap-24">
        <section className="max-w-4xl text-left text-foreground">
          <div className="space-y-8">
            <div className="text-3xl md:text-5xl leading-relaxed">
              <span className="tracking-wide">
                SOMEWHERE TO SAVE SOMETHING FOR SOMEDAY
              </span>
              <span className="text-secondary">.</span>
            </div>
            <div className="text-3xl md:text-5xl leading-relaxed">
              <span className="tracking-wide">
                SOMETHING KEPT SOMEWHERE FOR SOMEONE
              </span>
              <span className="text-secondary">.</span>
            </div>
            <div className="text-3xl md:text-5xl leading-relaxed">
              <span className="tracking-wide">
                SOMEPLACE FOR SOMETHING SAVED FOR SOMEDAY
              </span>
              <span className="text-secondary">.</span>
            </div>
            <div className="text-3xl md:text-5xl leading-relaxed">
              <span className="tracking-wide">
                SOMEWHERE SOMETHING RESTS FOR SOMEONE
              </span>
              <span className="text-secondary">.</span>
            </div>
          </div>
        </section>

        <section className="max-w-2xl text-foreground">
          <div className="text-3xl md:text-4xl mb-6">a Quote</div>
          <p className="text-sm md:text-base leading-relaxed max-w-xl opacity-80">
            {dailyQuote?.quote || ""}
          </p>
          <div className="mt-4 text-secondary">
            – {dailyQuote?.author || ""}
          </div>
          <button
            onClick={() => {
              if (coolingDown) return;
              refreshQuote();
              beginCooldown();
            }}
            disabled={coolingDown}
            aria-disabled={coolingDown}
            className="relative mt-6 px-4 py-2 text-sm text-foreground! border-secondary! border-t border-l border-r-6 border-b-6 overflow-hidden"
          >
            <span className="relative z-10">REFRESH QUOTE</span>
            <div
              className="absolute left-0 top-0 h-full bg-border transition-[width] duration-200"
              style={{ width: `${progress}%` }}
            />
          </button>
        </section>
      </div>

      <div className="absolute bottom-6 right-6">
        <div className="w-8 h-8 rounded-md border border-accent text-accent flex items-center justify-center">
          <Music className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
