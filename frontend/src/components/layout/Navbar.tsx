
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import BrandLogo from "@/components/common/BrandLogo";
import ThemeToggle from "@/components/common/ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Floating Navbar */}
      <div className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-5">
        <motion.header
          initial={{ y: -25, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: scrolled ? 0.985 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`mx-auto w-full max-w-[1180px] rounded-full border backdrop-blur-2xl transition-all duration-300 ${
            scrolled
              ? "border-border/90 bg-background/95 shadow-xl shadow-black/8 dark:shadow-black/25"
              : "border-border/70 bg-background/85 shadow-lg shadow-black/4 dark:shadow-black/15"
          }`}
        >
          <nav
            className={`flex min-w-0 items-center justify-between gap-2 px-3 transition-all duration-300 sm:gap-4 sm:px-5 lg:px-6 ${
              scrolled
                ? "h-16 sm:h-[68px]"
                : "h-[70px] sm:h-[76px]"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="SridharNova Technologies Home"
              className="flex min-w-0 flex-1 items-center overflow-hidden xl:flex-none"
            >
              <BrandLogo
                width={300}
                height={85}
                className="h-auto w-full max-w-[145px] object-contain sm:max-w-[190px] lg:max-w-[215px] xl:max-w-none xl:w-auto xl:max-h-[54px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-4 xl:flex 2xl:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative whitespace-nowrap py-3 text-[13px] font-medium tracking-wide text-foreground/75 transition-colors hover:text-brand-gold-dark dark:hover:text-brand-gold"
                >
                  {link.name}

                  <span className="absolute bottom-1 left-0 h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden shrink-0 items-center gap-3 xl:flex 2xl:gap-4">
              <ThemeToggle />

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-gold px-5 py-3 text-[12px] font-semibold tracking-wide text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Let&apos;s Talk

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Mobile & Tablet Actions */}
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 xl:hidden">
              <ThemeToggle />

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-brand-gold hover:text-brand-gold sm:h-10 sm:w-10"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </motion.header>
      </div>

      {/* Mobile & Tablet Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="fixed left-3 right-3 top-[88px] z-50 max-h-[calc(100dvh-110px)] overflow-y-auto rounded-3xl border border-border bg-background p-5 shadow-2xl sm:left-5 sm:right-5 sm:top-[100px] xl:hidden"
            >
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between py-4 text-base font-medium text-foreground transition-colors hover:text-brand-gold ${
                      index !== navLinks.length - 1
                        ? "border-b border-border/70"
                        : ""
                    }`}
                  >
                    {link.name}

                    <ArrowUpRight
                      size={17}
                      className="text-muted"
                    />
                  </Link>
                ))}
              </div>

              {/* Let's Talk */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-6 flex w-full items-center justify-between rounded-full bg-brand-gold px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Let&apos;s Talk
                <ArrowUpRight size={18} />
              </Link>

              <p className="mt-5 text-center text-[11px] tracking-wide text-muted">
                Thoughtful technology. Meaningful business growth.
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
