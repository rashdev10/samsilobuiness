import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { PwaRegister } from "@/components/pwa-register";
import { seoKeywords, siteConfig } from "@/lib/seo";
import "./globals.css";

const themeScript = `
(() => {
  try {
    const storedTheme = window.localStorage.getItem("samsilo-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : prefersDark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Campus Digital Service Nigeria`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Campus digital services",
  classification: "Student printing service, project formatting, school portal support, CV writing, data analysis, AI training, and campus business branding",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: `${siteConfig.name} | Campus Digital Service Nigeria`,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: "Samsilo Digital Hub - Campus Digital Service Nigeria Business Card",
        type: "image/png"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Campus Digital Service Nigeria`,
    description: siteConfig.description,
    images: {
      url: siteConfig.image,
      alt: "Samsilo Digital Hub - Campus Digital Service Nigeria Business Card"
    }
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent"
  },
  icons: {
    icon: [
      { url: "/samsilo-favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/samsilo-favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/samsilo-favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/samsilo-favicon-256.png", sizes: "256x256", type: "image/png" },
      { url: "/samsilo-favicon-512.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/samsilo-favicon-32.png",
    apple: [{ url: "/samsilo-favicon-256.png", sizes: "256x256", type: "image/png" }]
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: false
  },
  other: {
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#061745",
    "msapplication-tap-highlight": "no"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5faff" },
    { media: "(prefers-color-scheme: dark)", color: "#061745" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <PwaRegister />
        {children}
      </body>
    </html>
  );
}
