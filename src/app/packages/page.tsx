import type { Metadata } from "next";
import { CheckCircle2, MessageCircle, Sparkles, Star, WalletCards } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { PageChrome, PageHero, SectionIntro } from "@/components/page-primitives";
import { heroImages } from "@/lib/hero-images";
import { packages } from "@/lib/offerings";
import { getBreadcrumbJsonLd, siteConfig } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Packages and Pricing",
  description:
    "View Samsilo Digital Hub starting-from packages for freshers, assignments, final-year defence, job-ready graduates, student entrepreneurs, and department events.",
  alternates: {
    canonical: "/packages"
  },
  openGraph: {
    title: "Service Packages and Pricing | Samsilo Digital Hub",
    description:
      "View Samsilo Digital Hub starting-from packages for freshers, assignments, final-year defence, job-ready graduates, student entrepreneurs, and department events.",
    url: "/packages",
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
    title: "Service Packages and Pricing | Samsilo Digital Hub",
    description:
      "Starting-from packages for freshers, assignments, final-year defence, job-ready graduates, student entrepreneurs, and department events.",
    images: {
      url: siteConfig.image,
      alt: "Samsilo Digital Hub - Campus Digital Service Nigeria Business Card"
    }
  }
};

const comparisons = [
  ["Freshers", "Portal setup, document scanning, passport photo support, course guidance"],
  ["Final-year students", "Project formatting, data charts, defence slides, binding guidance"],
  ["Graduates", "CV, LinkedIn, cover letter, job application, interview preparation"],
  ["Departments", "Bulk design, tickets, certificates, registration forms, QR attendance"]
];

export default function PackagesPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbJsonLd([
        { name: "Home", url: "/" },
        { name: "Packages", url: "/packages" }
      ])} />
      <PageChrome>
      <PageHero
        eyebrow="Packages & Starting Prices"
        title="Service Packages for Students and Departments"
        description="Choose a ready-made package when you need more than one service. Each package gives students, class reps, departments, and small businesses a simpler way to plan cost, scope, and delivery."
        decoratorVariant="packages"
        image={heroImages.packages}
      >
        <div className="grid gap-4">
          <div className="flex items-center gap-3 text-sm font-bold text-white">
            <WalletCards className="size-5 text-cyan-200" aria-hidden="true" />
            Starting-from pricing
          </div>
          <div className="flex items-center gap-3 text-sm font-bold text-white">
            <Sparkles className="size-5 text-cyan-200" aria-hidden="true" />
            Custom scope available
          </div>
          <div className="flex items-center gap-3 text-sm font-bold text-white">
            <MessageCircle className="size-5 text-cyan-200" aria-hidden="true" />
            WhatsApp booking
          </div>
        </div>
      </PageHero>

      <section className="smoke-section bg-white py-20">
        <div className="section-shell">
          <SectionIntro
            title="Choose a Package"
            description="Prices start from the listed amount. Final quote depends on urgency, document volume, design scope, analysis depth, and delivery requirements."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.title}
                className={`flex h-full flex-col rounded-lg border p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl ${
                  item.featured ? "border-green-500 bg-green-50 hover:border-green-600" : "border-slate-200 bg-white hover:border-blue-300"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-black leading-snug text-slate-950">{item.title}</h2>
                  {item.featured ? <Star className="size-5 shrink-0 fill-yellow-300 text-yellow-500" aria-hidden="true" /> : null}
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
                <p className="mt-4 text-2xl font-black text-blue-900">{item.price}</p>
                <ul className="mt-5 flex-1 space-y-3 text-sm leading-6 text-slate-600">
                  {item.items.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-600" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(`Hello Samsilo Digital Hub, I am interested in the ${item.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="brand-dark-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold text-white"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Request Package
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="subtle-grid bg-slate-50 py-20">
        <div className="section-shell">
          <SectionIntro
            title="Package Fit Guide"
            description="Use this quick guide when you are not sure which service bundle matches your current need."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {comparisons.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-lg">
                <h2 className="text-xl font-black text-slate-950">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageChrome>
    </>
  );
}
