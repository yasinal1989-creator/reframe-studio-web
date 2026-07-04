"use client";

import { flowSteps } from "@/data/reframe";
import { MotionCard } from "./MotionCard";
import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

export function FlowSection() {
  return (
    <section
      id="flow"
      className="relative z-10 scroll-mt-24 overflow-hidden px-4 py-28 sm:px-6 lg:px-8 xl:py-32"
    >
      <div className="absolute left-1/2 top-28 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-[rgba(201,133,77,0.13)] opacity-70" />
      <div className="absolute left-1/2 top-44 h-px w-[120vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-[rgba(201,133,77,0.15)] to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Reframe Flow"
            title="Reframe Flow"
            text="Her üretim rastgele başlamaz. Önce akış kurulur."
            align="center"
          />
        </SectionReveal>
        <div className="relative mt-16 grid gap-4 lg:grid-cols-5">
          {flowSteps.map((step, index) => (
            <SectionReveal key={step.number} delay={index * 0.06}>
              <MotionCard className="cinematic-panel relative h-full rounded-lg border p-6 backdrop-blur-xl transition duration-500 hover:border-[rgba(201,133,77,0.22)] hover:shadow-[0_26px_82px_rgba(0,0,0,0.34),0_0_36px_rgba(201,133,77,0.07)]">
                <div className="mb-8 flex items-center justify-between">
                  <span className="tabular-nums text-4xl font-black tracking-normal text-amber/78">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-3 w-3 rounded-full border border-amber/55 bg-background shadow-[0_0_24px_rgba(201,133,77,0.2)]" />
                </div>
                <h3 className="text-xl font-black text-cream">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cream-muted/85">
                  {step.text}
                </p>
              </MotionCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
