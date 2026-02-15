"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_ITEMS = [
  { key: "whyMe", href: "#why-me" },
  { key: "expertise", href: "#expertise" },
  { key: "workshops", href: "#workshops" },
  { key: "contact", href: "#contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false);
          }}
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-warm-dark"
          aria-label="Dóri Trainer - Home"
        >
          {/* Icon mark — abstract figure with raised arms */}
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
            aria-hidden="true"
          >
            {/* Head */}
            <circle cx="17" cy="7.5" r="3.5" className="text-primary" fill="currentColor" />
            {/* Body — tapered torso */}
            <path
              d="M14.5 14 L17 26 L19.5 14 Z"
              className="text-primary"
              fill="currentColor"
            />
            {/* Left arm raised */}
            <path
              d="M14.5 14 C12.5 12, 9 8, 7 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-primary"
            />
            {/* Right arm raised */}
            <path
              d="M19.5 14 C21.5 12, 25 8, 27 6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-primary"
            />
            {/* Left spark */}
            <circle cx="5.5" cy="4.5" r="1.5" className="text-accent" fill="currentColor" />
            {/* Right spark */}
            <circle cx="28.5" cy="4.5" r="1.5" className="text-accent" fill="currentColor" />
            {/* Left leg */}
            <path
              d="M15.5 24 L11 32"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-primary"
            />
            {/* Right leg */}
            <path
              d="M18.5 24 L23 32"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="text-primary"
            />
          </svg>
          <span>
            <span className="text-primary">D</span>óri
            <span className="ml-1 font-light text-muted">Trainer</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={handleNavClick}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {t(item.key)}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-warm-gray"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            type="button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-background/98 backdrop-blur-sm md:hidden">
          <nav
            className="flex flex-col items-center gap-2 px-6 pt-8"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={handleNavClick}
                className="w-full rounded-xl py-4 text-center text-lg font-medium text-foreground transition-colors hover:bg-warm-gray hover:text-primary"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
