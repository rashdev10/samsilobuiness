import type { ReactNode } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AcademicDecorators, type AcademicDecoratorVariant } from "@/components/academic-decorators";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { whatsappLink } from "@/lib/site";

export function PageChrome({ children }: { children: ReactNode }) {
  return (
    <main className="theme-root min-h-screen overflow-hidden bg-slate-50 transition-colors duration-300">
      <SiteHeader />
      {children}
      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}

export type HeroImage = {
  src: string;
  alt: string;
  credit?: string;
  sourceUrl?: string;
};

export function HeroBackdrop({ image }: { image: HeroImage }) {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <Image
        src={image.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="page-hero-photo object-cover"
      />
      <div className="page-hero-photo-overlay absolute inset-0" />
    </div>
  );
}

export function HeroPhotoCredit({ image }: { image: HeroImage }) {
  if (!image.credit) {
    return null;
  }

  const className =
    "absolute bottom-3 right-4 z-20 rounded bg-black/25 px-2 py-1 text-[10px] font-semibold text-white/70 backdrop-blur transition hover:text-white";

  if (!image.sourceUrl) {
    return <span className={className}>Photo: {image.credit}</span>;
  }

  return (
    <a href={image.sourceUrl} target="_blank" rel="noreferrer" className={className}>
      Photo: {image.credit}
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  decoratorVariant = "home",
  image,
  children
}: {
  eyebrow: string;
  title: string;
  description: string;
  decoratorVariant?: AcademicDecoratorVariant;
  image?: HeroImage;
  children?: ReactNode;
}) {
  return (
    <section className="brand-dark-section relative isolate overflow-hidden py-20 text-white">
      {image ? <HeroBackdrop image={image} /> : null}
      <div className="absolute inset-0 subtle-grid opacity-30" aria-hidden="true" />
      <AcademicDecorators variant={decoratorVariant} />
      <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p>
          <h1 className="mt-4 max-w-5xl text-balance text-4xl font-black leading-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
          <div className="mt-8">
            <a
              href={whatsappLink(`Hello Samsilo Digital Hub, I am interested in ${title}.`)}
              target="_blank"
              rel="noreferrer"
              className="brand-primary-button inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        {children ? <div className="rounded-lg border border-white/15 bg-white/[0.08] p-6 backdrop-blur">{children}</div> : null}
      </div>
      {image ? <HeroPhotoCredit image={image} /> : null}
    </section>
  );
}

export function SectionIntro({ title, description }: { title: string; description: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <h2 className="text-balance text-3xl font-bold leading-tight text-slate-950 md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>
    </div>
  );
}
