"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const cinematicEase = [0.22, 1, 0.36, 1] as const;

const heroSequence = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12
    }
  }
};

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease: cinematicEase }
  }
};

const heroTitle = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.96, ease: cinematicEase }
  }
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const visualY = useTransform(scrollY, [0, 900], [0, 72]);
  const lineX = useTransform(scrollY, [0, 900], [0, 42]);

  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[82svh] scroll-mt-24 items-center overflow-hidden px-4 pb-12 pt-24 sm:px-6 lg:px-8"
    >
      <div className="ambient-grid pointer-events-none absolute inset-0 opacity-62" />
      <motion.div
        style={{ x: lineX }}
        className="pointer-events-none absolute left-[-8rem] top-40 h-px w-[42rem] rotate-[-18deg] bg-gradient-to-r from-transparent via-amber to-transparent opacity-50"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background via-background/55 to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.18fr_0.82fr]">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          animate="show"
          variants={heroSequence}
        >
          <motion.p
            variants={heroItem}
            className="premium-label mb-7 inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase text-amber/90"
          >
            <span className="h-px w-10 bg-amber/80" />
            Reframe Studio
          </motion.p>
          <motion.h1
            variants={heroTitle}
            className="text-balance max-w-[46rem] text-5xl font-black leading-[0.88] tracking-normal text-cream sm:text-7xl lg:text-[4.85rem] xl:text-[5.1rem] 2xl:text-[6.45rem]"
          >
            Sahadan dijitale üretim sistemi.
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="mt-8 max-w-2xl text-pretty text-lg leading-9 text-cream-muted/90 sm:text-xl sm:leading-10"
          >
            Reframe Studio; video, drone, kurgu, sosyal medya, AI ve web
            üretimini markalar için tek bir kreatif akışta birleştirir.
          </motion.p>
          <motion.div
            variants={heroItem}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#iletisim"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-cream px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-background shadow-[0_18px_48px_rgba(244,239,230,0.08)] transition duration-500 hover:-translate-y-0.5 hover:bg-gold hover:text-background hover:shadow-[0_24px_70px_rgba(201,133,77,0.18)]"
            >
              Projenizi Anlatın
              <span
                aria-hidden="true"
                className="transition duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="#flow"
              className="inline-flex items-center justify-center rounded-full border border-[rgba(201,133,77,0.2)] bg-white/[0.025] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-cream transition duration-500 hover:-translate-y-0.5 hover:border-[rgba(201,133,77,0.38)] hover:bg-amber/[0.08]"
            >
              Reframe Flow’u İnceleyin
            </a>
          </motion.div>
          <motion.div
            variants={heroItem}
            className="mt-10 flex flex-wrap gap-3 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-cream-muted/70"
          >
            <span>Video</span>
            <span className="text-amber">/</span>
            <span>Drone</span>
            <span className="text-amber">/</span>
            <span>Kurgu</span>
            <span className="text-amber">/</span>
            <span>AI</span>
            <span className="text-amber">/</span>
            <span>Web</span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: visualY }}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15, ease: cinematicEase, delay: 0.18 }}
          className="relative mx-auto hidden aspect-square w-full max-w-[34rem] lg:block"
          aria-hidden="true"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: [0, 2.5, 0] }}
            transition={{ duration: 42, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border border-[rgba(201,133,77,0.15)]"
          />
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: [0, -2, 0] }}
            transition={{ duration: 48, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[11%] rounded-full border border-white/[0.055]"
          />
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: [0, 3, 0] }}
            transition={{ duration: 56, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[22%] rounded-full border border-[rgba(201,133,77,0.16)]"
          />
          <motion.div
            animate={shouldReduceMotion ? undefined : { rotate: [0, 5, 0] }}
            transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute left-1/2 top-1/2 h-[72%] w-px origin-top -translate-x-1/2 -translate-y-1/2 rotate-[32deg] bg-gradient-to-b from-transparent via-amber to-transparent opacity-55" />
          </motion.div>
          <motion.div
            animate={
              shouldReduceMotion ? undefined : { opacity: [0.72, 1, 0.72], scale: [1, 1.16, 1] }
            }
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[16%] top-[30%] h-2 w-2 rounded-full bg-gold/90 shadow-amber"
          />
          <motion.div
            animate={
              shouldReduceMotion ? undefined : { opacity: [0.68, 0.95, 0.68], scale: [1, 1.12, 1] }
            }
            transition={{
              duration: 5.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute bottom-[24%] right-[17%] h-2 w-2 rounded-full bg-amber/90 shadow-amber"
          />
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [-4, 4, -4] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
            className="cinematic-panel absolute inset-[27%] grid place-items-center rounded-lg border bg-panel/72 backdrop-blur-xl"
          >
            <div className="noise-layer absolute inset-0 rounded-lg" />
            <div className="relative text-center">
              <p className="text-8xl font-black leading-none tracking-normal text-cream xl:text-[8.75rem]">
                RF
              </p>
              <p className="premium-label mt-5 text-[0.68rem] font-bold uppercase text-amber/90">
                Field to Frame
              </p>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.09em] text-cream-muted/62">
                Production System
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
