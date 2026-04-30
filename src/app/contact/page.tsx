import type { Metadata } from "next";
import { Clock, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageChrome, PageHero } from "@/components/page-primitives";
import { heroImages } from "@/lib/hero-images";
import { business, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Samsilo Digital Hub",
  description:
    "Contact Samsilo Digital Hub on WhatsApp for student printing service, project formatting Nigeria, school portal support, data analysis, CV writing, AI training, and campus business branding.",
  alternates: {
    canonical: "/contact"
  }
};

const contactCards = [
  {
    label: "WhatsApp",
    value: business.phoneDisplay,
    href: whatsappLink("Hello Samsilo Digital Hub, I want to request a service."),
    icon: MessageCircle
  },
  {
    label: "Call",
    value: business.phoneDisplay,
    href: `tel:${business.phoneE164}`,
    icon: Phone
  },
  {
    label: "Location",
    value: business.location,
    icon: MapPin
  },
  {
    label: "Coverage",
    value: business.coverage,
    icon: ShieldCheck
  }
];

export default function ContactPage() {
  return (
    <PageChrome>
      <PageHero
        eyebrow="Contact Samsilo Digital Hub"
        title="Request Campus Digital Support"
        description="Tell us what you need, your deadline, your school or department, and the files involved. We support students, lecturers, class reps, departments, entrepreneurs, and small businesses."
        decoratorVariant="contact"
        image={heroImages.contact}
      >
        <div className="flex items-start gap-3 text-sm leading-6 text-slate-100">
          <Clock className="mt-0.5 size-5 shrink-0 text-cyan-200" aria-hidden="true" />
          Urgent printing, typing, portal, CV, data analysis, and project support may be available depending on current workload.
        </div>
      </PageHero>

      <section className="smoke-section bg-white py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-balance text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              Chat first when your request is urgent
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              WhatsApp is the fastest way to request a student printing service, campus computer service, project
              formatting, defence slides, data analysis for students, student CV writing, school portal support, AI
              training, or student business branding.
            </p>

            <div className="mt-8 grid gap-4">
              {contactCards.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-lg">
                    <div className="flex gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-sm font-black uppercase text-slate-500">{item.label}</h3>
                        <p className="mt-1 text-base font-semibold leading-6 text-slate-950">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageChrome>
  );
}
