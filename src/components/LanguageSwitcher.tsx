"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const nextLocale = locale === "hu" ? "en" : "hu";
    const segments = pathname.split("/");
    if (routing.locales.includes(segments[1] as "hu" | "en")) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }
    router.replace(segments.join("/") || "/");
  };

  return (
    <button
      onClick={switchLocale}
      className="relative flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-warm-gray focus-visible:outline-2 focus-visible:outline-primary"
      aria-label={
        locale === "hu" ? "Switch to English" : "Váltás magyarra"
      }
      type="button"
    >
      <span
        className={`transition-opacity ${locale === "hu" ? "opacity-100 font-semibold" : "opacity-50"}`}
      >
        HU
      </span>
      <span className="text-muted">/</span>
      <span
        className={`transition-opacity ${locale === "en" ? "opacity-100 font-semibold" : "opacity-50"}`}
      >
        EN
      </span>
    </button>
  );
}
