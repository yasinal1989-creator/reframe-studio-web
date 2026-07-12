"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/data/reframe";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const closeMenu = () => setIsMenuOpen(false);
    const desktopMediaQuery = window.matchMedia("(min-width: 768px)");
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        closeMenu();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    desktopMediaQuery.addEventListener("change", handleDesktopChange);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktopMediaQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

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
          onClick={closeMenu}
          className="shrink-0 text-sm font-black tracking-[0.04em] text-cream"
        >
          Reframe Studio
        </a>
        <div className="hidden min-w-0 items-center gap-1 overflow-x-auto rounded-full border border-white/[0.055] bg-white/[0.025] p-1 shadow-[0_16px_42px_rgba(0,0,0,0.18)] md:flex">
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

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-cream transition duration-300 hover:border-amber/35 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/70 md:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          </span>
          <span aria-hidden="true" className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-1 block h-px w-5 bg-current transition duration-300 ${
                isMenuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 block h-px w-5 bg-current transition duration-300 ${
                isMenuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-16 md:hidden"
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Menüyü kapat"
              onClick={closeMenu}
              className="absolute inset-0 h-full w-full cursor-default bg-background/82 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber/70"
            />
            <motion.nav
              aria-label="Mobil menü"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="cinematic-panel relative mx-4 mt-3 overflow-hidden rounded-3xl border p-2 shadow-[0_28px_90px_rgba(0,0,0,0.48)]"
            >
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={closeMenu}
                  className="group flex min-h-14 items-center justify-between rounded-2xl px-5 py-3 text-base font-semibold tracking-[0.02em] text-cream-muted transition duration-300 hover:bg-white/[0.05] hover:text-cream focus-visible:bg-white/[0.05] focus-visible:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber/70"
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden="true"
                    className="text-xs text-amber/75 transition duration-300 group-hover:translate-x-1"
                  >
                    0{index + 1}
                  </span>
                </a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
