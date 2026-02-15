"use client";

import { useTranslations } from "next-intl";
import { Sparkles, Wind, Dumbbell, StretchHorizontal } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ICONS = [Sparkles, Wind, Dumbbell, StretchHorizontal];

export default function WhyChooseMe() {
  const t = useTranslations("whyMe");

  const benefits = [0, 1, 2, 3].map((i) => ({
    title: t(`benefits.${i}.title`),
    description: t(`benefits.${i}.description`),
    Icon: ICONS[i],
  }));

  return (
    <section
      id="why-me"
      className="bg-background py-20 sm:py-28"
      aria-labelledby="why-me-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            id="why-me-heading"
            className="text-center text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl"
          >
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-border bg-warm-white p-6 text-center transition-all hover:border-primary-light hover:shadow-lg hover:shadow-primary/5 sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-lighter/60 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <benefit.Icon size={26} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-warm-dark">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
