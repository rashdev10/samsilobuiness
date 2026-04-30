import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { AcademicDecorators } from "@/components/academic-decorators";
import { JsonLd } from "@/components/json-ld";
import { HeroBackdrop, HeroPhotoCredit, PageChrome } from "@/components/page-primitives";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { heroImages } from "@/lib/hero-images";
import { business, whatsappLink } from "@/lib/site";
import { getBlogPostJsonLd, siteConfig } from "@/lib/seo";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: `${post.title} | Samsilo Digital Hub`,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [business.name],
      tags: post.keywords,
      images: [
        {
          url: siteConfig.image,
          width: 1200,
          height: 630,
          alt: "Samsilo Digital Hub - Campus Digital Service Nigeria Business Card"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Samsilo Digital Hub`,
      description: post.description,
      images: [siteConfig.image]
    }
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <PageChrome>
      <JsonLd data={getBlogPostJsonLd(post)} />
      <article>
        <section className="brand-dark-section relative isolate overflow-hidden pb-16 pt-10 text-white">
          <HeroBackdrop image={heroImages.article} />
          <div className="absolute inset-0 subtle-grid opacity-30" aria-hidden="true" />
          <AcademicDecorators variant="article" />
          <div className="section-shell relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-200 hover:text-white">
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to blog
            </Link>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">{post.category}</p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black leading-tight md:text-6xl">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{post.description}</p>
            <p className="mt-5 text-sm font-semibold text-slate-300">
              Published {post.publishedAt} · Updated {post.updatedAt} · {post.readingTime}
            </p>
          </div>
          <HeroPhotoCredit image={heroImages.article} />
        </section>

        <section className="py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-10">
              {post.sections.map((section, index) => (
                <section key={section.heading} className={index === 0 ? undefined : "mt-10"}>
                  <h2 className="text-2xl font-black leading-tight text-slate-950">{section.heading}</h2>
                  <div className="mt-4 grid gap-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-slate-600">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="mt-10 rounded-lg bg-blue-50 p-6">
                <h2 className="text-2xl font-black leading-tight text-slate-950">Quick checklist</h2>
                <ul className="mt-5 grid gap-3">
                  {post.checklist.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-800" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-black leading-tight text-slate-950">Article FAQ</h2>
                <div className="mt-5 grid gap-4">
                  {post.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-base font-black text-slate-950">{faq.question}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">Need help with this?</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Chat with Samsilo Digital Hub for student printing service, project formatting, data analysis, CV
                support, AI training, portal help, or business branding.
              </p>
              <a
                href={whatsappLink(`Hello Samsilo Digital Hub, I need help with: ${post.title}`)}
                target="_blank"
                rel="noreferrer"
                className="brand-primary-button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold text-white"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <div className="mt-6 border-t border-slate-200 pt-6">
                <h3 className="text-sm font-black uppercase text-slate-500">Related guides</h3>
                <div className="mt-4 grid gap-3">
                  {blogPosts
                    .filter((relatedPost) => relatedPost.slug !== post.slug)
                    .map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="text-sm font-bold leading-6 text-blue-800 hover:text-blue-900"
                      >
                        {relatedPost.title}
                      </Link>
                    ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </PageChrome>
  );
}
