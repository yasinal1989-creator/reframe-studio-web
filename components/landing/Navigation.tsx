"use client";

import { motion } from "framer-motion";
import { navItems } from "@/data/reframe";

export function Navigation() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/72 backdrop-blur-xl"
    >
      <nav
        aria-label="Ana menü"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#hero"
          className="shrink-0 text-sm font-black tracking-[0.04em] text-cream"
        >
          Reframe Studio
        </a>
        <div className="flex min-w-0 items-center gap-1 overflow-x-auto rounded-full border border-white/[0.055] bg-white/[0.025] p-1 shadow-[0_16px_42px_rgba(0,0,0,0.18)]">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              className="whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold tracking-[0.02em] text-cream-muted/85 transition duration-500 hover:bg-white/[0.05] hover:text-cream"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
