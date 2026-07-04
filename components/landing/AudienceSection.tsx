"use client";

import { audiences } from "@/data/reframe";
import { MotionCard } from "./MotionCard";
import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

export function AudienceSection() {
  return (
    <section
      id="kimler-icin"
      className="relative z-10 scroll-mt-24 px-4 py-28 sm:px-6 lg:px-8 xl:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Kimler İçin"
            title="Kimler için çalışıyoruz?"
          />
        </SectionReveal>
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {audiences.map((audience, index) => (
            <SectionReveal key={audience.title} delay={index * 0.05}>
              <MotionCard className="cinematic-panel relative overflow-hidden rounded-lg border p-8 transition duration-500 hover:border-[rgba(201,133,77,0.2)] hover:shadow-[0_26px_82px_rgba(0,0,0,0.34),0_0_36px_rgba(201,133,77,0.07)]">
                <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-amber/65 via-[rgba(201,133,77,0.12)] to-transparent" />
                <p className="mb-8 tabular-nums text-[0.68rem] font-bold tracking-normal text-amber/85">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-3xl font-black tracking-normal text-cream">
                  {audience.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-cream-muted/85">
                  {audience.text}
                </p>
              </MotionCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
