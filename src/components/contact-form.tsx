"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Send } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name must contain only letters and spaces"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[0-9+\s()-]+$/, "Phone number must contain only digits and valid characters"),
  campus: z
    .string()
    .min(2, "School/Campus name must be at least 2 characters")
    .max(100, "School/Campus name must be less than 100 characters"),
  departmentLevel: z
    .string()
    .min(2, "Department/Level must be at least 2 characters")
    .max(100, "Department/Level must be less than 100 characters"),
  serviceNeeded: z
    .string()
    .min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur"
  });

  const formValues = watch();

  const formWhatsappLink = useMemo(() => {
    const name = formValues.fullName || "a visitor";
    const service = formValues.serviceNeeded || "a digital service";
    return whatsappLink(
      `Hello Samsilo Digital Hub, my name is ${name}. I need help with ${service}. Phone: ${formValues.phone || "not provided"}.`
    );
  }, [formValues.fullName, formValues.phone, formValues.serviceNeeded]);

  async function onSubmit(data: ContactFormData) {
    setFormStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setFormStatus({
          type: "error",
          message: result.error || "Your request could not be saved. Please use WhatsApp for now."
        });
        return;
      }

      reset();
      setFormStatus({
        type: "success",
        message: "Your request has been received. We will follow up as soon as possible."
      });
    } catch {
      setFormStatus({
        type: "error",
        message: "Network error. Please chat with us on WhatsApp for immediate support."
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Full Name
          <input
            {...register("fullName")}
            className={`min-h-12 rounded-lg border px-4 text-base font-normal outline-none transition focus:ring-4 ${
              errors.fullName
                ? "border-red-500 focus:border-red-700 focus:ring-red-100"
                : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
            }`}
            placeholder="Your full name"
          />
          {errors.fullName && (
            <span className="text-xs font-semibold text-red-600">{errors.fullName.message}</span>
          )}
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Phone Number
          <input
            {...register("phone")}
            className={`min-h-12 rounded-lg border px-4 text-base font-normal outline-none transition focus:ring-4 ${
              errors.phone
                ? "border-red-500 focus:border-red-700 focus:ring-red-100"
                : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
            }`}
            placeholder="080..."
          />
          {errors.phone && (
            <span className="text-xs font-semibold text-red-600">{errors.phone.message}</span>
          )}
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          School/Campus
          <input
            {...register("campus")}
            className={`min-h-12 rounded-lg border px-4 text-base font-normal outline-none transition focus:ring-4 ${
              errors.campus
                ? "border-red-500 focus:border-red-700 focus:ring-red-100"
                : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
            }`}
            placeholder="LASUSTECH, UNILAG, YABATECH..."
          />
          {errors.campus && (
            <span className="text-xs font-semibold text-red-600">{errors.campus.message}</span>
          )}
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Department/Level
          <input
            {...register("departmentLevel")}
            className={`min-h-12 rounded-lg border px-4 text-base font-normal outline-none transition focus:ring-4 ${
              errors.departmentLevel
                ? "border-red-500 focus:border-red-700 focus:ring-red-100"
                : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
            }`}
            placeholder="Department and level"
          />
          {errors.departmentLevel && (
            <span className="text-xs font-semibold text-red-600">{errors.departmentLevel.message}</span>
          )}
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800 md:col-span-2">
          Service Needed
          <select
            {...register("serviceNeeded")}
            className={`min-h-12 rounded-lg border bg-white px-4 text-base font-normal outline-none transition focus:ring-4 ${
              errors.serviceNeeded
                ? "border-red-500 focus:border-red-700 focus:ring-red-100"
                : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
            }`}
          >
            <option value="">Select a service</option>
            <option>Printing, typing, scanning, binding</option>
            <option>School portal or online registration</option>
            <option>Project formatting or defence support</option>
            <option>Data analysis for students</option>
            <option>Student CV writing or LinkedIn support</option>
            <option>AI training for students</option>
            <option>Business or department branding</option>
            <option>Retainership or referral program</option>
          </select>
          {errors.serviceNeeded && (
            <span className="text-xs font-semibold text-red-600">{errors.serviceNeeded.message}</span>
          )}
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800 md:col-span-2">
          Message
          <textarea
            {...register("message")}
            className={`min-h-36 rounded-lg border px-4 py-3 text-base font-normal outline-none transition focus:ring-4 ${
              errors.message
                ? "border-red-500 focus:border-red-700 focus:ring-red-100"
                : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
            }`}
            placeholder="Describe the service you need, deadline, file details, or package."
          />
          {errors.message && (
            <span className="text-xs font-semibold text-red-600">{errors.message.message}</span>
          )}
        </label>
      </div>

      {formStatus ? (
        <p
          className={`mt-5 rounded-lg px-4 py-3 text-sm font-semibold ${
            formStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-yellow-50 text-yellow-900"
          }`}
        >
          {formStatus.message}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="brand-dark-button inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send className="size-4" aria-hidden="true" />
          {isSubmitting ? "Sending..." : "Send Request"}
        </button>
        <a
          href={formWhatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-green-600 px-5 py-3 text-sm font-bold text-green-700 transition hover:bg-green-50"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp Instead
        </a>
      </div>
    </form>
  );
}
