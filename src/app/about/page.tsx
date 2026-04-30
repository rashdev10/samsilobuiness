import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, GraduationCap, Handshake, MapPin, Rocket, Users } from "lucide-react";
import { PageChrome, PageHero, SectionIntro } from "@/components/page-primitives";
import { heroImages } from "@/lib/hero-images";
import { business, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Samsilo Digital Hub",
  description:
    "Learn about Samsilo Digital Hub, a campus digital service Nigeria brand supporting students, lecturers, departments, freshers, final-year students, class reps, graduates, and campus businesses.",
  alternates: {
    canonical: "/about"
  }
};

const audiences = [
  "Freshers and newly admitted students",
  "Final-year students preparing projects and defence",
  "Class representatives and departments",
  "Lecturers and academic staff",
  "Student entrepreneurs and campus businesses",
  "Graduates, interns, and job seekers"
];

const strengths = [
  {
    title: "Campus-first thinking",
    text: "We understand deadlines, department requirements, urgent printing, portal pressure, and student budget realities.",
    icon: GraduationCap
  },
  {
    title: "Beyond typing and printing",
    text: "The service mix covers documents, portals, projects, career materials, AI productivity, training, and business branding.",
    icon: Rocket
  },
  {
    title: "Ethical support",
    text: "Academic services focus on formatting, editing, research guidance, citations, data analysis, and preparation, not cheating.",
    icon: BadgeCheck
  },
  {
    title: "Built for relationships",
    text: "Retainership and referral plans help students, class reps, departments, and small businesses get consistent support.",
    icon: Handshake
  }
];

export default function AboutPage() {
  return (
    <PageChrome>
      <PageHero
        eyebrow="About Samsilo Digital Hub"
        title="Campus Digital Support for Students"
        description="Samsilo Digital Hub started around Lagos State University of Science and Technology, but the mission is wider: help students and campus communities handle important digital work faster, cleaner, and more professionally."
        decoratorVariant="about"
        image={heroImages.about}
      >
        <div className="grid gap-5 text-sm text-slate-100">
          <div>
            <p className="font-black text-white">Location</p>
            <p className="mt-2 leading-6">{business.location}</p>
          </div>
          <div>
            <p className="font-black text-white">Coverage</p>
            <p className="mt-2 leading-6">{business.coverage}</p>
          </div>
          <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-cyan-200">
            Start a WhatsApp request
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </PageHero>

      <section className="smoke-section bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 className="text-balance text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              From admission stage to graduation and career readiness
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Samsilo Digital Hub supports the full student journey: admission documents, school portal support,
              registration guidance, academic formatting, final-year project preparation, data analysis, CV writing,
              LinkedIn optimization, AI tools training, and student business branding.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The business is positioned as a campus digital service Nigeria brand, not just a computer center. That
              means every service is designed around speed, clarity, affordability, quality, and practical student
              outcomes.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-lg">
                  <Icon className="size-7 text-blue-800" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="subtle-grid bg-slate-50 py-20">
        <div className="section-shell">
          <SectionIntro
            title="Who We Serve"
            description="The hub is designed for the people who keep campus work moving: students, reps, lecturers, departments, founders, and job seekers."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience} className="rounded-lg border border-slate-200 bg-white p-5 transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-lg">
                <Users className="size-6 text-blue-800" aria-hidden="true" />
                <h3 className="mt-4 text-base font-black leading-snug text-slate-950">{audience}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smoke-section bg-white py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-3">
          {[
            ["1", "Request", "Send your service details through WhatsApp, the contact form, or direct campus booking."],
            ["2", "Confirm", "We clarify the deadline, files, preferred format, price range, and delivery channel."],
            ["3", "Deliver", "Your document, design, portal support, training, or package is handled with professional follow-up."]
          ].map(([step, title, text]) => (
            <article key={step} className="rounded-lg border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-lg">
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-blue-50 text-sm font-black text-blue-900">
                {step}
              </span>
              <h2 className="mt-5 text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-premium-section py-16 text-white">
        <div className="section-shell flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <MapPin className="size-8 text-cyan-200" aria-hidden="true" />
            <h2 className="mt-4 text-3xl font-black">Need a reliable campus digital partner?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100">
              Start with a simple WhatsApp message. We will guide you to the right service, package, or retainership plan.
            </p>
          </div>
          <a
            href={whatsappLink("Hello Samsilo Digital Hub, I want to know the best service for my need.")}
            target="_blank"
            rel="noreferrer"
            className="brand-primary-button inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </PageChrome>
  );
}
