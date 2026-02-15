"use client";

import { useTranslations } from "next-intl";
import { Instagram, Facebook, type LucideIcon } from "lucide-react";

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.781 3.632 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.17.408-2.243 1.33-3.023.81-.685 1.92-1.108 3.21-1.223 1.07-.095 2.065-.035 2.974.136-.02-.8-.243-1.407-.666-1.816-.5-.483-1.3-.733-2.373-.745h-.03c-.802 0-1.857.217-2.508.89l-1.42-1.42C9.065 5.868 10.578 5.333 12.18 5.333h.044c1.564.017 2.79.466 3.643 1.332.792.804 1.218 1.924 1.267 3.328.59.134 1.132.32 1.62.564 1.075.536 1.91 1.327 2.42 2.296.68 1.287.784 3.566-.674 5.432-1.76 2.254-4.23 3.27-7.79 3.2-.026 0-.051.515-.051.515h-.044c-.048 0-.096 0-.143-.001l-.089-.001zm-.047-7.99c-.04 0-.08 0-.121.002-.932.065-2.09.37-2.474 1.068-.211.383-.2.837-.033 1.247.255.625.97 1.065 1.862 1.065.051 0 .103-.001.155-.005 1.407-.076 2.128-.858 2.428-1.467.23-.47.365-1.033.404-1.698-.7-.135-1.434-.208-2.17-.212h-.05z" />
    </svg>
  );
}

type SocialLink = {
  key: "instagram" | "facebook" | "threads";
  envKey: string;
  Icon: LucideIcon | (({ className }: { className?: string }) => React.JSX.Element);
};

const SOCIAL_LINKS: SocialLink[] = [
  {
    key: "instagram",
    envKey: "NEXT_PUBLIC_INSTAGRAM_URL",
    Icon: Instagram,
  },
  {
    key: "facebook",
    envKey: "NEXT_PUBLIC_FACEBOOK_URL",
    Icon: Facebook,
  },
  {
    key: "threads",
    envKey: "NEXT_PUBLIC_THREADS_URL",
    Icon: ThreadsIcon,
  },
];

export default function SocialMedia() {
  const t = useTranslations("social");

  return (
    <div className="flex flex-col items-center text-center">
      <p className="mb-5 text-sm font-medium uppercase tracking-wider text-muted">
        {t("title")}
      </p>

      <div className="flex gap-4">
        {SOCIAL_LINKS.map((link) => {
          const IconEl = link.Icon;
          const href = process.env[link.envKey] || "#";

          return (
            <a
              key={link.key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-warm-white text-muted transition-all hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/15"
              aria-label={t(link.key)}
            >
              <IconEl className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
