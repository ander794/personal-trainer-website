"use client";

import { useTranslations } from "next-intl";
import { Flame, Trophy, Move, Baby, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const AREA_ICONS = [Flame, Trophy, Move, Baby];

export default function Expertise() {
  const t = useTranslations("expertise");

  const areas = [0, 1, 2, 3].map((i) => ({
    title: t(`areas.${i}.title`),
    description: t(`areas.${i}.description`),
    badge: i === 3 ? t(`areas.${i}.badge`) : null,
    Icon: AREA_ICONS[i],
  }));

  return (
    <section
      id="expertise"
      className="bg-warm-gray py-20 sm:py-28"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2
            id="expertise-heading"
            className="text-center text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl"
          >
            {t("title")}
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Bio + image column */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-6">
              <p className="text-base leading-relaxed text-muted sm:text-lg">
                {t("bio")}
              </p>

              {/* Action shot placeholder */}
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-primary-lighter/40">
                <div className="flex h-full items-center justify-center p-8 text-center text-muted">
                  <div>
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        className="h-8 w-8 text-primary"
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
                    <p className="text-sm font-medium">Action Shot</p>
                    <p className="mt-1 text-xs text-muted/70">
                      Replace with training photo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Expertise cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {areas.map((area, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.08}>
                <div
                  className={`group relative flex h-full flex-col rounded-2xl border p-6 transition-all hover:shadow-lg ${
                    area.badge
                      ? "border-secondary bg-secondary-light/20 hover:border-secondary hover:shadow-secondary/10"
                      : "border-border bg-warm-white hover:border-primary-light hover:shadow-primary/5"
                  }`}
                >
                  {area.badge && (
                    <div className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold text-secondary">
                      <Award size={14} aria-hidden="true" />
                      {area.badge}
                    </div>
                  )}

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      area.badge
                        ? "bg-secondary/15 text-secondary"
                        : "bg-primary-lighter/60 text-primary"
                    }`}
                  >
                    <area.Icon size={22} aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-warm-dark">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
