"use client";

import { useTranslations } from "next-intl";
import { Calendar, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Workshops() {
  const t = useTranslations("workshops");

  const workshops = [0, 1].map((i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    date: t(`items.${i}.date`),
  }));

  return (
    <section
      id="workshops"
      className="bg-background py-20 sm:py-28"
      aria-labelledby="workshops-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2
              id="workshops-heading"
              className="text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl"
            >
              {t("title")}
            </h2>
            <p className="mt-3 text-muted">{t("subtitle")}</p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:gap-8">
          {workshops.map((workshop, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-warm-white transition-all hover:border-primary-light hover:shadow-lg hover:shadow-primary/5">
                {/* Workshop image placeholder */}
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-primary-lighter/50 to-secondary-light/30">
                  <div className="flex h-full items-center justify-center text-muted">
                    <div className="text-center">
                      <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <svg
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                          />
                        </svg>
                      </div>
                      <p className="text-xs font-medium">Workshop Photo</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 inline-flex items-center gap-1.5 self-start text-xs font-medium text-muted">
                    <Calendar size={14} aria-hidden="true" />
                    {workshop.date}
                  </div>
                  <h3 className="text-lg font-semibold text-warm-dark">
                    {workshop.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {workshop.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="mt-10 text-center text-sm text-muted">
            {t("noUpcoming")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
