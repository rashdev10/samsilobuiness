import type { Metadata } from "next";
import { BadgeCheck, CheckCircle2, Gift, MessageCircle, Repeat, Users } from "lucide-react";
import { PageChrome, PageHero, SectionIntro } from "@/components/page-primitives";
import { heroImages } from "@/lib/hero-images";
import { retainershipPlans } from "@/lib/offerings";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student and Department Retainership Plans",
  description:
    "Join Samsilo Digital Hub retainership plans for priority service, discounted printing, school updates, academic support, final-year support, department bulk printing, and referral rewards.",
  alternates: {
    canonical: "/retainership"
  }
};

const benefits = [
  {
    title: "Priority service",
    text: "Move faster when there is a queue, a deadline, a class task, or urgent project work.",
    icon: Repeat
  },
  {
    title: "Discount access",
    text: "Get better value on recurring student printing service, formatting, scans, CV support, and bulk work.",
    icon: BadgeCheck
  },
  {
    title: "Group support",
    text: "Class reps and departments can manage printing, event designs, QR attendance, forms, certificates, and bulk communication.",
    icon: Users
  },
  {
    title: "Referral rewards",
    text: "Students and class reps can earn print credit, airtime, discounts, cash rewards, or special commissions.",
    icon: Gift
  }
];

export default function RetainershipPage() {
  return (
    <PageChrome>
      <PageHero
        eyebrow="Retainership Plans"
        title="Retainership Plans for Campus Support"
        description="Retainership is for people who need Samsilo Digital Hub more than once. Subscribe for priority service, discounts, digital updates, continuous support, and partnership benefits."
        decoratorVariant="retainership"
        image={heroImages.retainership}
      >
        <div className="grid gap-4 text-sm text-slate-100">
          <p className="font-black text-white">Best for</p>
          <p className="leading-6">Students, class reps, departments, lecturers, student entrepreneurs, and campus businesses with recurring digital needs.</p>
        </div>
      </PageHero>

      <section className="smoke-section bg-white py-20">
        <div className="section-shell">
          <SectionIntro
            title="Choose a Retainership Plan"
            description="Start small as an individual student, or request a custom plan for class and department needs."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {retainershipPlans.map((plan) => (
              <article
                key={plan.title}
                className={`rounded-lg border p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl ${
                  plan.featured ? "border-green-500 bg-green-50 hover:border-green-600" : "border-slate-200 bg-white hover:border-blue-300"
                }`}
              >
                <h2 className="text-xl font-black text-slate-950">{plan.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{plan.summary}</p>
                <p className="mt-4 text-2xl font-black text-blue-900">{plan.price}</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                  {plan.items.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-600" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Hello Samsilo Digital Hub, I want to join the ${plan.title} retainership plan.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="brand-dark-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold text-white"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Join Plan
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="subtle-grid bg-slate-50 py-20">
        <div className="section-shell">
          <SectionIntro
            title="Why Retainership Works"
            description="The plan is built for recurring work: class documents, final-year preparation, repeated printing, regular designs, and continuous student support."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article key={benefit.title} className="rounded-lg border border-slate-200 bg-white p-6 transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-lg">
                  <Icon className="size-7 text-blue-800" aria-hidden="true" />
                  <h2 className="mt-4 text-lg font-black text-slate-950">{benefit.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="brand-premium-section py-16 text-white">
        <div className="section-shell flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black">Class reps and departments can request custom terms.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100">
              Bulk printing, event designs, certificates, registration forms, QR attendance, and referral commissions
              can be structured around your class or department workflow.
            </p>
          </div>
          <a
            href={whatsappLink("Hello Samsilo Digital Hub, I want a custom class or department retainership plan.")}
            target="_blank"
            rel="noreferrer"
            className="brand-primary-button inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white"
          >
            Request Custom Plan
          </a>
        </div>
      </section>
    </PageChrome>
  );
}
