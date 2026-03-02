"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enquirySchema, type EnquiryFormData, SERVICE_OPTIONS } from "@/lib/validations/enquiry";
import { useState } from "react";

interface EnquiryFormProps {
  defaultService?: string;
}

export function EnquiryForm({ defaultService }: EnquiryFormProps = {}) {
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: defaultService ? { serviceType: defaultService as EnquiryFormData["serviceType"] } : undefined,
  });

  async function onSubmit(data: EnquiryFormData) {
    setSubmitState("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitState("success");
      if (typeof window !== "undefined" && typeof window.fbq === "function") {
        window.fbq("track", "Lead", { content_name: data.serviceType });
      }
      reset();
      setTimeout(() => setSubmitState("idle"), 5000);
    } catch {
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 3000);
    }
  }

  const inputClass =
    "w-full py-3.5 px-4 rounded-[var(--radius-sm)] border border-border-medium bg-bg-secondary text-text-primary font-[family-name:var(--font-body)] text-[0.9rem] outline-none transition-all duration-200 focus:border-db-lighter focus:shadow-[0_0_0_3px_rgba(30,58,95,0.2)] placeholder:text-text-dim";

  return (
    <div className="bg-linear-to-b from-card-alt to-card border border-border-blue rounded-[var(--radius-lg)] p-8 relative" id="contact">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-linear-to-r from-db-light via-accent to-accent-light rounded-t-[var(--radius-lg)]" />

      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.25)] py-1 px-3.5 rounded-[var(--radius-full)] text-[0.72rem] font-bold text-accent uppercase tracking-[0.06em] mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-[blink_1.5s_infinite]" />
          Go online. Grow faster.
        </div>
        <h3 className="font-heading font-[800] text-[1.3rem] mb-1">
          Get Your Free Strategy & Quote
        </h3>
        <p className="text-text-subtle text-[0.85rem]">
          Takes 30 seconds. We&apos;ll reply within 2 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Your Name *"
            className={inputClass}
          />
          {errors.name && (
            <p className="text-error text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register("phone")}
            type="tel"
            placeholder="WhatsApp Number *"
            className={inputClass}
          />
          {errors.phone && (
            <p className="text-error text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <select
            {...register("serviceType")}
            className={`${inputClass} appearance-none cursor-pointer`}
            defaultValue={defaultService || ""}
          >
            <option value="" disabled>
              What do you need? *
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="text-error text-xs mt-1">{errors.serviceType.message}</p>
          )}
        </div>

        <input
          {...register("budget")}
          type="text"
          placeholder="Your Budget Range (Optional)"
          className={inputClass}
        />

        <button
          type="submit"
          disabled={submitState === "loading" || submitState === "success"}
          className="w-full py-4 rounded-[var(--radius-md)] font-bold text-base cursor-pointer border-none font-[family-name:var(--font-body)] transition-all duration-250 mt-1 text-white disabled:cursor-not-allowed"
          style={{
            background:
              submitState === "success"
                ? "#22C55E"
                : submitState === "error"
                  ? "#EF4444"
                  : "linear-gradient(135deg, #F97316, #FB923C)",
          }}
        >
          {submitState === "loading"
            ? "Sending..."
            : submitState === "success"
              ? "✓ Sent! We'll Contact You in 2 Hours"
              : submitState === "error"
                ? "Failed — Try Again"
                : "Get My Free Quote →"}
        </button>
      </form>

      <p className="text-center text-[0.72rem] text-text-dim mt-2">
        🔒 No spam. No obligation. 100% free.
      </p>

      <div className="flex justify-center gap-6 mt-4 pt-3 border-t border-border-subtle">
        <div className="text-center">
          <strong className="font-heading text-[1.2rem] font-[800] text-accent block">150+</strong>
          <span className="text-[0.65rem] text-text-dim">Projects</span>
        </div>
        <div className="text-center">
          <strong className="font-heading text-[1.2rem] font-[800] text-accent block">3X</strong>
          <span className="text-[0.65rem] text-text-dim">More Leads</span>
        </div>
        <div className="text-center">
          <strong className="font-heading text-[1.2rem] font-[800] text-accent block">98%</strong>
          <span className="text-[0.65rem] text-text-dim">Satisfaction</span>
        </div>
      </div>
    </div>
  );
}
