"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");

  const handleCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-warm-gray"
      aria-label="Hero"
    >
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-lighter/40 via-warm-gray to-secondary-light/30" />

      {/* Decorative shapes */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary-lighter/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-secondary-light/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-32">
        {/* Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold leading-tight tracking-tight text-warm-dark sm:text-5xl lg:text-6xl"
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-6 text-lg leading-relaxed text-muted sm:text-xl"
          >
            {t("tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#contact"
              onClick={handleCta}
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-accent hover:shadow-accent/25 focus-visible:outline-2 focus-visible:outline-primary sm:h-14 sm:px-10 sm:text-lg"
            >
              {t("cta")}
            </a>
          </motion.div>
        </div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-3xl shadow-2xl sm:max-w-md lg:max-w-lg">
            <Image
              src="/dori.png"
              alt="Dóri - Personal Trainer"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 512px"
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
