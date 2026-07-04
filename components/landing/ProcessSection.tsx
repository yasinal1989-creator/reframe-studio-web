"use client";

import { processSteps } from "@/data/reframe";
import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

export function ProcessSection() {
  return (
    <section className="relative z-10 px-4 py-28 sm:px-6 lg:px-8 xl:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr]">
        <SectionReveal>
          <SectionHeading eyebrow="Süreç" title="Nasıl çalışıyoruz?" />
        </SectionReveal>
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <SectionReveal key={step} delay={index * 0.04}>
              <div className="cinematic-panel grid gap-5 rounded-lg border p-6 sm:grid-cols-[4rem_1fr] sm:items-center">
                <span className="text-3xl font-black tracking-normal text-amber/85">
                  {index + 1}
                </span>
                <p className="text-xl font-black leading-snug tracking-normal text-cream">
                  {step}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
