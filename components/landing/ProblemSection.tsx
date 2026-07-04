"use client";

import { problems } from "@/data/reframe";
import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

export function ProblemSection() {
  return (
    <section className="relative z-10 scroll-mt-24 px-4 pb-28 pt-0 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,133,77,0.16)] to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionReveal>
          <SectionHeading
            eyebrow="Problem"
            title="İyi içerik yetmez. Sistem gerekir."
            text="Bir markanın görüntüsü, videosu, sosyal medya dili, web sitesi ve içerik akışı birbirinden kopuk ilerlediğinde dijital vitrin dağılır. Reframe Studio bu parçaları tek bir üretim sisteminde toplar."
          />
        </SectionReveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <SectionReveal key={problem} delay={0.1 + index * 0.045}>
              <div
                className="cinematic-panel rounded-lg border p-5 backdrop-blur"
              >
                <div className="mb-5 h-px w-14 bg-gradient-to-r from-amber/75 to-transparent" />
                <p className="text-base font-bold text-cream">{problem}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
