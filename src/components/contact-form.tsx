"use client";

import { FormEvent, useMemo, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const contactInitial = {
  fullName: "",
  phone: "",
  campus: "",
  departmentLevel: "",
  serviceNeeded: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(contactInitial);
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const formWhatsappLink = useMemo(() => {
    const name = form.fullName || "a visitor";
    const service = form.serviceNeeded || "a digital service";
    return whatsappLink(
      `Hello Samsilo Digital Hub, my name is ${name}. I need help with ${service}. Phone: ${form.phone || "not provided"}.`
    );
  }, [form.fullName, form.phone, form.serviceNeeded]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setFormStatus({
          type: "error",
          message: result.error || "Your request could not be saved. Please use WhatsApp for now."
        });
        return;
      }

      setForm(contactInitial);
      setFormStatus({
        type: "success",
        message: "Your request has been received. We will follow up as soon as possible."
      });
    } catch {
      setFormStatus({
        type: "error",
        message: "Network error. Please chat with us on WhatsApp for immediate support."
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Full Name
          <input
            required
            value={form.fullName}
            onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
            className="min-h-12 rounded-lg border border-slate-300 px-4 text-base font-normal outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
            placeholder="Your full name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Phone Number
          <input
            required
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            className="min-h-12 rounded-lg border border-slate-300 px-4 text-base font-normal outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
            placeholder="080..."
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          School/Campus
          <input
            required
            value={form.campus}
            onChange={(event) => setForm((current) => ({ ...current, campus: event.target.value }))}
            className="min-h-12 rounded-lg border border-slate-300 px-4 text-base font-normal outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
            placeholder="LASUSTECH, UNILAG, YABATECH..."
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800">
          Department/Level
          <input
            required
            value={form.departmentLevel}
            onChange={(event) => setForm((current) => ({ ...current, departmentLevel: event.target.value }))}
            className="min-h-12 rounded-lg border border-slate-300 px-4 text-base font-normal outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
            placeholder="Department and level"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800 md:col-span-2">
          Service Needed
          <select
            required
            value={form.serviceNeeded}
            onChange={(event) => setForm((current) => ({ ...current, serviceNeeded: event.target.value }))}
            className="min-h-12 rounded-lg border border-slate-300 bg-white px-4 text-base font-normal outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
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
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-800 md:col-span-2">
          Message
          <textarea
            required
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            className="min-h-36 rounded-lg border border-slate-300 px-4 py-3 text-base font-normal outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
            placeholder="Describe the service you need, deadline, file details, or package."
          />
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
          disabled={submitting}
          className="brand-dark-button inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send className="size-4" aria-hidden="true" />
          {submitting ? "Sending..." : "Send Request"}
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
