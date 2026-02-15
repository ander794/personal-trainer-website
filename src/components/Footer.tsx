"use client";

import { useTranslations } from "next-intl";
import SocialMedia from "./SocialMedia";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-warm-gray" role="contentinfo">
      {/* Social section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SocialMedia />
          </ScrollReveal>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border bg-background py-6">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted">
            &copy; {year}{" "}
            <span className="font-medium text-warm-dark">Dóri Trainer</span>.{" "}
            {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
