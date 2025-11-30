"use client";
import { Music } from "lucide-react";

export default function HomePage() {
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
            We save fragments of our days because we know everything vanishes.
            The act of saving is not about the thing itself, but the belief that
            tomorrow deserves a piece of today
          </p>
          <div className="mt-4 text-secondary">– Aurelius Finch</div>
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
