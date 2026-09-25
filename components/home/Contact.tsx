"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CONTACT } from "@/lib/constants";
import { enquirySchema, SERVICE_OPTIONS, type EnquiryFormData } from "@/lib/validations/enquiry";
import { ArrowIcon, EASE, MaskLines } from "./motion";
import { ChapterLabel } from "./Chapter";
import { Palm, TileHouse } from "./illustrations";

const BUDGETS = ["Under ₹50k", "₹50k to ₹1L", "₹1L to ₹5L", "₹5L+", "Not sure yet"];

const field =
  "w-full bg-transparent border-0 border-b border-white/20 py-3.5 text-[1.05rem] text-white placeholder:text-white/35 outline-none focus:border-white transition-colors";

export function EnquiryForm({ defaultService }: { defaultService?: string } = {}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    trigger,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      budget: "",
      ...(SERVICE_OPTIONS.includes(defaultService as (typeof SERVICE_OPTIONS)[number])
        ? { serviceType: defaultService as EnquiryFormData["serviceType"] }
        : {}),
    },
  });

  const service = watch("serviceType");
  const budget = watch("budget");

  async function next() {
    if (await trigger(["name", "phone"])) setStep(2);
  }

  async function onSubmit(data: EnquiryFormData) {
    setState("loading");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setState("success");
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead", { content_name: data.serviceType });
      }
      reset();
      setStep(1);
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 4000);
    }
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-10"
      >
        <p className="display text-[2.4rem] mb-4">Thanks. We&apos;re on it.</p>
        <p className="text-white/60 leading-[1.6] max-w-[40ch]">
          Someone from our team will message you on WhatsApp within 2 working hours.
        </p>
        <button type="button" onClick={() => setState("idle")} className="mt-8 text-[0.9rem] underline underline-offset-4 text-white/70 hover:text-white cursor-pointer">
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex items-center gap-3 mb-8 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-white/50">
        <span className={step === 1 ? "text-white" : ""}>01 About you</span>
        <span className="w-8 h-px bg-white/20" />
        <span className={step === 2 ? "text-white" : ""}>02 The project</span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {step === 1 ? (
          <motion.div
            key="s1"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="enq-name" className="sr-only">Your name</label>
              <input id="enq-name" {...register("name")} placeholder="Your name" autoComplete="name" className={field} />
              {errors.name && <p className="text-[#FCA5A5] text-[0.8rem] mt-2">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="enq-phone" className="sr-only">WhatsApp number</label>
              <input id="enq-phone" {...register("phone")} type="tel" placeholder="WhatsApp number" autoComplete="tel" className={field} />
              {errors.phone && <p className="text-[#FCA5A5] text-[0.8rem] mt-2">{errors.phone.message}</p>}
            </div>
            <button
              type="button"
              onClick={next}
              className="group mt-4 w-full inline-flex items-center justify-between bg-white text-ink font-medium pl-6 pr-5 py-4 rounded-full hover:bg-paper-2 transition-colors cursor-pointer"
            >
              Continue
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="s2"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <fieldset>
              <legend className="text-[0.9rem] text-white/60 mb-3">What do you need?</legend>
              <div className="flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    aria-pressed={service === opt}
                    onClick={() => setValue("serviceType", opt, { shouldValidate: true })}
                    className={`text-[0.85rem] px-3.5 py-2 rounded-full border transition-colors cursor-pointer ${
                      service === opt ? "bg-white text-ink border-white" : "border-white/20 text-white/80 hover:border-white/60"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {errors.serviceType && <p className="text-[#FCA5A5] text-[0.8rem] mt-2">{errors.serviceType.message}</p>}
            </fieldset>

            <fieldset className="mt-7">
              <legend className="text-[0.9rem] text-white/60 mb-3">Budget (optional)</legend>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    type="button"
                    aria-pressed={budget === b}
                    onClick={() => setValue("budget", budget === b ? "" : b)}
                    className={`text-[0.85rem] px-3.5 py-2 rounded-full border transition-colors cursor-pointer ${
                      budget === b ? "bg-white text-ink border-white" : "border-white/20 text-white/80 hover:border-white/60"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-9 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="shrink-0 w-14 h-14 rounded-full border border-white/20 grid place-items-center hover:border-white/60 transition-colors cursor-pointer"
                aria-label="Back"
              >
                <ArrowIcon className="w-4 h-4 rotate-180" />
              </button>
              <button
                type="submit"
                disabled={state === "loading"}
                className="group flex-1 inline-flex items-center justify-between bg-white text-ink font-medium pl-6 pr-5 py-4 rounded-full hover:bg-paper-2 transition-colors disabled:opacity-60 cursor-pointer"
              >
                {state === "loading" ? "Sending…" : state === "error" ? "Something went wrong. Try again" : "Get my fixed quote"}
                <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-2 lg:px-4 pb-2 lg:pb-4">
      <div className="bg-brand text-white rounded-[28px] lg:rounded-[40px] overflow-hidden relative">
        <div className="absolute inset-0 tile-lines-light opacity-[0.07] pointer-events-none [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 lg:px-10 py-20 lg:py-32 grid lg:grid-cols-12 gap-14 lg:gap-10">
          <div className="lg:col-span-6">
            <ChapterLabel id="contact" tone="text-turmeric" className="mb-6" />
            <h2 className="display text-[clamp(2.6rem,6vw,5.6rem)]">
              <MaskLines lines={[<span key="l1" className="text-turmeric">Encha ullar?</span>, "Tell us what", "you need built."]} />
            </h2>
            <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-white/45">That&apos;s Tulu for &ldquo;how are you?&rdquo;</p>
            <p className="mt-6 text-[1.05rem] leading-[1.6] text-white/65 max-w-[42ch]">
              Two quick steps. We reply on WhatsApp within 2 working hours with questions, a rough
              estimate, or a time to talk.
            </p>

            <dl className="mt-12 grid sm:grid-cols-2 gap-8 text-[0.95rem]">
              <div>
                <dt className="eyebrow text-white/45! mb-2">Call or WhatsApp</dt>
                <dd><a href={`tel:${CONTACT.phoneE164}`} className="hover:underline underline-offset-4">{CONTACT.phone}</a></dd>
              </div>
              <div>
                <dt className="eyebrow text-white/45! mb-2">Email</dt>
                <dd><a href={`mailto:${CONTACT.email}`} className="hover:underline underline-offset-4">{CONTACT.email}</a></dd>
              </div>
              <div>
                <dt className="eyebrow text-white/45! mb-2">Hours</dt>
                <dd className="text-white/80">{CONTACT.hours}</dd>
              </div>
              <div>
                <dt className="eyebrow text-white/45! mb-2">Our door is open</dt>
                <dd className="text-white/80">{CONTACT.address.locality}, Mangalore, Karnataka</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:pt-4 relative">
            <div className="rounded-[20px] bg-white/[0.06] border border-white/12 p-6 sm:p-8 backdrop-blur-sm">
              <EnquiryForm />
            </div>
            <div className="mt-10 flex items-end justify-end gap-1" aria-hidden="true">
              <Palm className="w-[70px] h-[120px] -mr-5" lean={-6} color="#0F2238" />
              <TileHouse id="contact-house" doorOpen className="w-[220px] h-auto" />
              <Palm className="w-[60px] h-[100px] -ml-4" lean={6} color="#0F2238" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
