import type { Metadata } from "next";
import {
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  GraduationCap,
  MessageCircle,
  Presentation,
  Printer,
  School,
  ShieldCheck
} from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { PageChrome, PageHero, SectionIntro } from "@/components/page-primitives";
import { heroImages } from "@/lib/hero-images";
import { serviceCategories } from "@/lib/offerings";
import { getBreadcrumbJsonLd, siteConfig } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Campus Digital Services",
  description:
    "Explore Samsilo Digital Hub services: student printing service, school portal support, project formatting Nigeria, data analysis for students, CV writing, AI training, and student business branding.",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Campus Digital Services | Samsilo Digital Hub",
    description:
      "Explore Samsilo Digital Hub services: student printing service, school portal support, project formatting Nigeria, data analysis for students, CV writing, AI training, and student business branding.",
    url: "/services",
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: "Samsilo Digital Hub - Campus Digital Service Nigeria Business Card",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Campus Digital Services | Samsilo Digital Hub",
    description:
      "Student printing service, school portal support, project formatting Nigeria, data analysis, CV writing, AI training, and business branding.",
    images: {
      url: siteConfig.image,
      alt: "Samsilo Digital Hub - Campus Digital Service Nigeria Business Card"
    }
  }
};

const iconMap = {
  "Everyday Computer Services": Printer,
  "School Portal & Online Services": School,
  "Academic & Project Support": GraduationCap,
  "Career & Job Services": BriefcaseBusiness,
  "AI & Digital Productivity Services": Bot,
  "Training Services": Presentation,
  "Business & Department Services": Building2
};

const workflows = [
  "Send files, deadline, school format, or service details",
  "Get confirmation on scope, price, timeline, and delivery format",
  "Receive clean digital output, print-ready files, or guided support",
  "Request follow-up edits, retainership, or referral rewards when needed"
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" }
      ])} />
      <PageChrome>
      <PageHero
        eyebrow="Campus Digital Services"
        title="Digital Services for Campus Needs"
        description="Samsilo Digital Hub combines everyday computer service with modern student digital solutions, so one reliable hub can handle routine tasks and bigger academic, career, and business needs."
        decoratorVariant="services"
        image={heroImages.services}
      >
        <div className="grid gap-4">
          {["Student printing service", "School portal support", "Project formatting Nigeria", "AI training for students"].map(
            (item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold text-white">
                <ShieldCheck className="size-5 text-cyan-200" aria-hidden="true" />
                {item}
              </div>
            )
          )}
        </div>
      </PageHero>

      <section className="smoke-section bg-white py-20">
        <div className="section-shell">
          <SectionIntro
            title="Service Categories"
            description="Each category is built around common campus workflows, from urgent typing to final-year defence preparation and student business branding."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((category) => {
              const Icon = iconMap[category.title as keyof typeof iconMap] || Printer;

              return (
                <article
                  key={category.title}
                  className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-xl font-black leading-snug text-slate-950">{category.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-600 font-medium">{category.summary}</p>
                    </div>
                  </div>
                  <ul className="mt-6 grid flex-1 gap-3 text-sm leading-6 text-slate-600">
                    {category.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-600" aria-hidden="true" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hello Samsilo Digital Hub, I need help with ${category.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="brand-dark-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold text-white"
                  >
                    <MessageCircle className="size-4" aria-hidden="true" />
                    Request This Service
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="subtle-grid bg-slate-50 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 className="text-balance text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              Ethical academic support, not shortcut culture
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our academic and project services are built around editing, formatting, research guidance, referencing,
              questionnaire support, data presentation, charts, tables, and defence preparation. We do not promote
              cheating or dishonest academic submission.
            </p>
          </div>
          <div className="grid gap-4">
            {workflows.map((item, index) => (
              <article key={item} className="rounded-lg border border-slate-200 bg-white p-5 transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-lg">
                <div className="flex gap-4">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-black text-blue-900">
                    {index + 1}
                  </span>
                  <p className="text-base font-bold leading-6 text-slate-950">{item}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageChrome>
    </>
  );
}
