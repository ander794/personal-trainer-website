"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, CheckCircle, AlertCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

function createSchema(t: (key: string) => string) {
  return z.object({
    name: z.string().min(1, t("nameRequired")),
    message: z.string().min(1, t("messageRequired")),
  });
}

type FormData = z.infer<ReturnType<typeof createSchema>>;

export default function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const schema = createSchema((key) => t(`form.${key}`));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: data.name,
          message: data.message,
          from_name: "Dóri Trainer Website",
          subject: `New contact from ${data.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return (
    <section
      id="contact"
      className="bg-warm-gray py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight text-warm-dark sm:text-4xl"
            >
              {t("title")}
            </h2>
            <p className="mt-3 text-muted">{t("subtitle")}</p>
          </div>
        </ScrollReveal>

        {/* Form card */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 rounded-3xl border border-border bg-warm-white p-6 shadow-sm sm:mt-14 sm:p-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-warm-dark"
                >
                  {t("form.name")} *
                </label>
                <input
                  {...register("name")}
                  id="name"
                  type="text"
                  placeholder={t("form.namePlaceholder")}
                  autoComplete="name"
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted/40 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-accent" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-warm-dark"
                >
                  {t("form.message")} *
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  placeholder={t("form.messagePlaceholder")}
                  className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted/40 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1.5 text-sm text-accent"
                    role="alert"
                  >
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-accent hover:shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto sm:px-12"
              >
                {status === "sending" ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    {t("form.sending")}
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" />
                    {t("form.submit")}
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div
                  className="flex items-center gap-2 rounded-xl bg-secondary-light/40 p-4 text-sm text-secondary"
                  role="status"
                >
                  <CheckCircle size={18} className="shrink-0" aria-hidden="true" />
                  {t("form.success")}
                </div>
              )}
              {status === "error" && (
                <div
                  className="flex items-center gap-2 rounded-xl bg-accent/10 p-4 text-sm text-accent"
                  role="alert"
                >
                  <AlertCircle size={18} className="shrink-0" aria-hidden="true" />
                  {t("form.error")}
                </div>
              )}
            </form>

            {/* Email icon */}
            <div className="mt-8 text-center">
              <a
                href={`mailto:${contactEmail}`}
                aria-label={contactEmail}
                className="inline-flex items-center justify-center rounded-xl border border-border p-3 text-primary transition-all hover:border-primary hover:bg-primary/5 hover:text-accent"
              >
                <Mail size={22} aria-hidden="true" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
