import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { LandingPage } from "@/components/landing-page";
import { getHomeJsonLd, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Campus Digital Service Nigeria for Students, Projects, Portals & CVs",
  description:
    "Chat with Samsilo Digital Hub for student printing service, school portal support, project formatting Nigeria, data analysis for students, PowerPoint defence slides, student CV writing, AI training, retainership, and referral rewards.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Campus Digital Service Nigeria for Students | Samsilo Digital Hub",
    description:
      "A modern digital support hub for students across Nigerian campuses, with strong LASUSTECH digital services presence.",
    url: "/",
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
    title: "Campus Digital Service Nigeria for Students | Samsilo Digital Hub",
    description:
      "Printing, projects, portals, CVs, data analysis, AI training, defence slides, and student business branding.",
    images: {
      url: siteConfig.image,
      alt: "Samsilo Digital Hub - Campus Digital Service Nigeria Business Card"
    }
  }
};

export default function Home() {
  return (
    <>
      <JsonLd data={getHomeJsonLd()} />
      <LandingPage />
    </>
  );
}
