import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, MessageCircle, Search, Sparkles } from "lucide-react";
import { AcademicDecorators } from "@/components/academic-decorators";
import { JsonLd } from "@/components/json-ld";
import { HeroBackdrop, HeroPhotoCredit, PageChrome } from "@/components/page-primitives";
import { blogPosts } from "@/lib/blog";
import { heroImages } from "@/lib/hero-images";
import { whatsappLink } from "@/lib/site";
import { getBlogIndexJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Campus Digital Tips Blog",
  description:
    "Practical guides from Samsilo Digital Hub on project formatting Nigeria, student CV writing, school portal support, data analysis for students, AI training for students, and student business branding.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Campus Digital Tips Blog | Samsilo Digital Hub",
    description:
      "Helpful campus digital service guides for students, freshers, final-year students, class reps, graduates, and student entrepreneurs in Nigeria.",
    url: "/blog",
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
    title: "Campus Digital Tips Blog | Samsilo Digital Hub",
    description: "Guides on projects, portals, AI tools, CV writing, data analysis, and student business branding.",
    images: {
      url: siteConfig.image,
      alt: "Samsilo Digital Hub - Campus Digital Service Nigeria Business Card"
    }
  }
};

const featuredPost = blogPosts[0];
const categories = ["Project Support", "AI Training", "Business Branding", "Portal Support", "Career Services"];
const popularSearches = [
  "project formatting Nigeria",
  "student CV writing",
  "school portal support",
  "data analysis for students",
  "AI training for students"
];

export default function BlogIndexPage() {
  return (
    <PageChrome>
      <JsonLd data={getBlogIndexJsonLd()} />

      <section className="brand-dark-section relative isolate overflow-hidden py-20 text-white">
        <HeroBackdrop image={heroImages.blog} />
        <div className="absolute inset-0 subtle-grid opacity-30" aria-hidden="true" />
        <AcademicDecorators variant="blog" />
        <div className="section-shell relative z-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">Campus Digital Tips Blog</p>
              <h1 className="mt-4 max-w-5xl text-balance text-4xl font-black leading-tight md:text-6xl">
                Practical Digital Guides for Students
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                Read useful answers on student printing service, school portal support, project formatting Nigeria, data
                analysis for students, PowerPoint defence slides, student CV writing, AI training, and student business
                branding.
              </p>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/8 p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-sm font-bold text-white">
                <Search className="size-5 text-cyan-200" aria-hidden="true" />
                Popular student searches
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {popularSearches.map((item) => (
                  <span key={item} className="rounded-lg border border-white/15 bg-white/8 px-3 py-2 text-xs font-bold text-slate-100 transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-white/25">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <HeroPhotoCredit image={heroImages.blog} />
      </section>

      <section className="smoke-section bg-white py-20">
        <div className="section-shell grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-blue-300 hover:shadow-xl md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex rounded-lg bg-blue-50 px-3 py-1 text-xs font-black text-blue-900">
                Featured Guide
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-500">
                <Clock className="size-4" aria-hidden="true" />
                {featuredPost.readingTime}
              </span>
            </div>
            <h2 className="mt-6 max-w-3xl text-balance text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              <Link href={`/blog/${featuredPost.slug}`} className="hover:text-blue-800">
                {featuredPost.title}
              </Link>
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{featuredPost.description}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="brand-dark-button inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white"
              >
                Read featured guide
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink(`Hello Samsilo Digital Hub, I need help with: ${featuredPost.title}`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-green-600 px-5 py-3 text-sm font-bold text-green-700 transition hover:bg-green-50"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Ask for help
              </a>
            </div>
          </article>

          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <Sparkles className="size-6 text-blue-800" aria-hidden="true" />
              <h2 className="text-xl font-black text-slate-950">Guide Categories</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {categories.map((category) => (
                <div key={category} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-md">
                  {category}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="subtle-grid bg-slate-50 py-20">
        <div className="section-shell">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-blue-800">Latest practical guides</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
                Read, act, and request support when you need help
              </h2>
            </div>
            <a
              href={whatsappLink("Hello Samsilo Digital Hub, I want updates from your blog and services.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-800"
            >
              Get WhatsApp updates
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-300 hover:shadow-xl">
                <span className="inline-flex rounded-lg w-fit bg-blue-50 px-3 py-1 text-xs font-black text-blue-900">
                  {post.category}
                </span>
                <h3 className="mt-5 text-2xl font-black leading-tight text-slate-950">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-800">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <BookOpen className="size-4" aria-hidden="true" />
                  {post.readingTime}
                </p>
                <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{post.summary}</p>
                <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-800">
                  Read guide
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="brand-premium-section py-16 text-white">
        <div className="section-shell flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-black">Need the service behind a guide?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100">
              Chat with Samsilo Digital Hub for document cleanup, portal guidance, project support, data analysis,
              student CV writing, AI training, or business branding.
            </p>
          </div>
          <a
            href={whatsappLink("Hello Samsilo Digital Hub, I read your blog and need a service.")}
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
