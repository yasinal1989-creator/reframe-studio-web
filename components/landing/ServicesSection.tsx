"use client";

import { services } from "@/data/reframe";
import { MotionCard } from "./MotionCard";
import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

export function ServicesSection() {
  return (
    <section
      id="hizmetler"
      className="relative z-10 scroll-mt-24 bg-background-soft/58 px-4 py-28 sm:px-6 lg:px-8 xl:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,133,77,0.16)] to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Ne Yapıyoruz"
            title="Markanız için dijital vitrin kuruyoruz."
          />
        </SectionReveal>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 0.04}>
              <MotionCard className="cinematic-panel group h-full rounded-lg border p-7 transition duration-500 hover:border-[rgba(201,133,77,0.22)] hover:shadow-[0_30px_90px_rgba(0,0,0,0.38),0_0_46px_rgba(201,133,77,0.08)]">
                <div className="mb-10 flex items-center justify-between">
                  <span className="premium-label text-[0.68rem] font-bold uppercase text-amber/85">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-14 bg-[rgba(201,133,77,0.2)] transition duration-500 group-hover:w-20 group-hover:bg-amber/75" />
                </div>
                <h3 className="text-2xl font-black tracking-normal text-cream">
                  {service.title}
                </h3>
                <p className="mt-5 text-pretty text-base leading-8 text-cream-muted/85">
                  {service.text}
                </p>
              </MotionCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
