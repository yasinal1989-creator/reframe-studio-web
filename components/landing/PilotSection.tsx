"use client";

import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

const pilotItems = [
  "Profil düzeni",
  "İçerik dili",
  "Portföy video akışı",
  "Sosyal medya paylaşım yapısı",
  "Web yönlendirmesi"
] as const;

export function PilotSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-background-soft/66 px-4 py-28 sm:px-6 lg:px-8 xl:py-32">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[rgba(201,133,77,0.16)] to-transparent" />
      <div className="pointer-events-none absolute right-[-10rem] top-24 h-[32rem] w-[32rem] rounded-full border border-[rgba(201,133,77,0.1)]" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <SectionReveal>
          <SectionHeading
            eyebrow="Pilot Çalışma"
            title="Gayrimenkul danışmanları için dijital vitrin sistemi"
            text="Reframe Studio’nun ilk uygulama alanlarından biri, gayrimenkul danışmanları için kişisel dijital vitrin sistemidir. Profil düzeni, içerik dili, portföy video akışı, sosyal medya paylaşım yapısı ve web yönlendirmesi tek bir sistem içinde ele alınır."
          />
        </SectionReveal>
        <SectionReveal delay={0.12}>
          <div className="cinematic-panel relative overflow-hidden rounded-lg border p-6 backdrop-blur-xl sm:p-8">
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-[rgba(201,133,77,0.14)]" />
            <div className="relative mb-9 flex items-center justify-between border-b border-white/[0.055] pb-6">
              <p className="premium-label text-xs font-bold text-amber/90">
                Yaklaşım örneği
              </p>
              <span className="h-2 w-2 rounded-full bg-gold/90 shadow-[0_0_26px_rgba(214,154,69,0.26)]" />
            </div>
            <div className="relative">
              {pilotItems.map((item, index) => (
                <div
                  key={item}
                  className="group grid grid-cols-[3.25rem_1fr] items-center border-b border-white/[0.055] py-5 last:border-b-0"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-[rgba(201,133,77,0.16)] bg-background/50 text-xs font-black tabular-nums tracking-normal text-amber/85 transition duration-500 group-hover:border-[rgba(201,133,77,0.32)] group-hover:text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-bold text-cream/90 transition duration-500 group-hover:text-cream">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
