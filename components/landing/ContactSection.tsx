"use client";

import { contactLinks } from "@/data/reframe";
import { SectionReveal } from "./SectionReveal";

export function ContactSection() {
  return (
    <section
      id="iletisim"
      className="relative z-10 scroll-mt-24 overflow-hidden px-4 py-28 sm:px-6 lg:px-8 xl:py-32"
    >
      <div className="ambient-grid pointer-events-none absolute inset-0 opacity-36" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,133,77,0.16)] to-transparent" />
      <SectionReveal className="relative mx-auto max-w-7xl">
        <div className="cinematic-panel grid gap-10 rounded-lg border p-7 backdrop-blur-xl sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
          <div>
            <p className="premium-label mb-5 text-[0.68rem] font-bold uppercase text-amber/90">
              İletişim
            </p>
            <h2 className="text-balance text-4xl font-black leading-[0.95] tracking-normal text-cream sm:text-6xl">
              Markanızın dijital vitrini burada başlar.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-cream-muted/90">
              Projenizi anlatın. İlk üretim akışını birlikte çıkaralım.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="group flex items-center justify-between gap-5 rounded-full border border-white/[0.065] bg-background/54 px-5 py-5 text-left text-xs font-bold uppercase tracking-[0.07em] text-cream transition duration-500 hover:-translate-y-0.5 hover:border-[rgba(201,133,77,0.34)] hover:bg-amber/[0.08] hover:shadow-[0_18px_60px_rgba(0,0,0,0.26),0_0_34px_rgba(201,133,77,0.08)] sm:text-sm"
              >
                <span>{link.label}</span>
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber/[0.06] text-amber transition duration-500 group-hover:translate-x-1.5 group-hover:bg-amber/[0.12]"
                >
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
