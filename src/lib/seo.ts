import { blogPosts, type BlogPost } from "@/lib/blog";
import { answerHubItems, faqItems } from "@/lib/content";
import { business } from "@/lib/site";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

export const seoKeywords = [
  "campus digital service Nigeria",
  "student printing service",
  "project formatting Nigeria",
  "LASUSTECH digital services",
  "student CV writing",
  "school portal support",
  "data analysis for students",
  "final year project support",
  "PowerPoint defence slides",
  "student business branding",
  "AI training for students",
  "campus computer service"
];

export const siteConfig = {
  name: business.name,
  shortName: "Samsilo",
  url: siteUrl,
  locale: "en_NG",
  language: "en-NG",
  logo: "/samsilo-favicon-512.png",
  image: "/images/businesscard.png",
  description:
    "Samsilo Digital Hub is a modern campus digital service Nigeria brand for student printing service, school portal support, project formatting Nigeria, student CV writing, data analysis for students, AI training, defence slides, and student business branding."
};

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

const serviceCatalog = [
  {
    name: "Everyday Computer Services",
    services: [
      "Typing",
      "Printing",
      "Photocopy",
      "Scanning to PDF",
      "Lamination",
      "Binding",
      "Passport photo editing and printing",
      "PDF conversion and document cleanup"
    ]
  },
  {
    name: "School Portal and Online Services",
    services: [
      "Admission form support",
      "Acceptance fee support",
      "School fee payment guidance",
      "Course registration support",
      "Document upload support",
      "Online application support",
      "Student email setup"
    ]
  },
  {
    name: "Academic and Project Support",
    services: [
      "Assignment formatting",
      "Project formatting",
      "Proposal formatting",
      "References and citation formatting",
      "Questionnaire design",
      "Google Forms setup",
      "Excel/SPSS data analysis",
      "Charts and tables",
      "Defence PowerPoint slides",
      "Project binding support"
    ]
  },
  {
    name: "Career and Job Services",
    services: [
      "Modern CV design",
      "LinkedIn profile optimization",
      "Cover letters",
      "Internship application support",
      "Job application package",
      "Portfolio website setup",
      "Interview preparation documents"
    ]
  },
  {
    name: "AI and Digital Productivity Services",
    services: [
      "AI-assisted proofreading",
      "Lecture note summarization",
      "Report structuring",
      "Presentation design",
      "AI tools training",
      "Prompt writing support",
      "Canva designs",
      "Google Forms and Sheets setup"
    ]
  },
  {
    name: "Training Services",
    services: [
      "Microsoft Word",
      "Excel",
      "PowerPoint",
      "Canva",
      "AI tools for students",
      "SPSS/Excel data analysis",
      "CV and LinkedIn training",
      "Basic digital business training"
    ]
  },
  {
    name: "Business and Department Services",
    services: [
      "Event flyers",
      "Certificates",
      "ID cards",
      "Tickets",
      "Department event branding",
      "Attendance QR code",
      "Registration forms",
      "WhatsApp catalogue",
      "Simple landing pages",
      "Business profile designs",
      "Social media graphics"
    ]
  }
];

const businessNode = {
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": absoluteUrl("/#business"),
  name: business.name,
  url: absoluteUrl("/"),
  logo: absoluteUrl(siteConfig.logo),
  image: absoluteUrl(siteConfig.image),
  description: siteConfig.description,
  telephone: `+${business.phoneInternational}`,
  priceRange: "₦₦",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lagos State University of Science and Technology area",
    addressLocality: "Ikorodu",
    addressRegion: "Lagos",
    addressCountry: "NG"
  },
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Lagos, Nigeria"
    },
    {
      "@type": "Country",
      name: "Nigeria"
    }
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: `+${business.phoneInternational}`,
      contactType: "customer service",
      areaServed: "NG",
      availableLanguage: ["English"]
    }
  ],
  knowsAbout: seoKeywords
};

export function getHomeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      businessNode,
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: siteConfig.name,
        url: absoluteUrl("/"),
        inLanguage: siteConfig.language,
        publisher: {
          "@id": absoluteUrl("/#business")
        }
      },
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#webpage"),
        url: absoluteUrl("/"),
        name: "Campus Digital Service Nigeria | Samsilo Digital Hub",
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: {
          "@id": absoluteUrl("/#website")
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl(siteConfig.image)
        },
        about: {
          "@id": absoluteUrl("/#business")
        },
        mainEntity: [
          {
            "@id": absoluteUrl("/#service-catalog")
          },
          {
            "@id": absoluteUrl("/#faq")
          }
        ]
      },
      {
        "@type": "Service",
        "@id": absoluteUrl("/#service-catalog"),
        name: "Campus digital services for Nigerian students",
        serviceType: "Campus digital service, printing, school portal support, project formatting, data analysis, CV writing, AI training, and student business branding",
        provider: {
          "@id": absoluteUrl("/#business")
        },
        areaServed: {
          "@type": "Country",
          name: "Nigeria"
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Samsilo Digital Hub service catalog",
          itemListElement: serviceCatalog.map((catalog) => ({
            "@type": "OfferCatalog",
            name: catalog.name,
            itemListElement: catalog.services.map((serviceName) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: serviceName,
                provider: {
                  "@id": absoluteUrl("/#business")
                }
              }
            }))
          }))
        }
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl("/#faq"),
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/#answer-hub"),
        name: "Samsilo Digital Hub answer hub",
        itemListElement: answerHubItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }
        }))
      },
      {
        "@type": "Blog",
        "@id": absoluteUrl("/blog#blog"),
        name: "Samsilo Digital Hub Campus Digital Tips Blog",
        url: absoluteUrl("/blog"),
        publisher: {
          "@id": absoluteUrl("/#business")
        },
        blogPost: blogPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: absoluteUrl(`/blog/${post.slug}`),
          description: post.description,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          author: {
            "@id": absoluteUrl("/#business")
          }
        }))
      }
    ]
  };
}

export function getBlogIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      businessNode,
      {
        "@type": "Blog",
        "@id": absoluteUrl("/blog#blog"),
        name: "Campus Digital Tips Blog",
        url: absoluteUrl("/blog"),
        description:
          "Practical guides on project formatting Nigeria, AI training for students, student CV writing, school portal support, data analysis for students, and student business branding.",
        publisher: {
          "@id": absoluteUrl("/#business")
        },
        blogPost: blogPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          url: absoluteUrl(`/blog/${post.slug}`),
          description: post.description,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          keywords: post.keywords
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/")
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: absoluteUrl("/blog")
          }
        ]
      }
    ]
  };
}

export function getBlogPostJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      businessNode,
      {
        "@type": "BlogPosting",
        "@id": absoluteUrl(`/blog/${post.slug}#article`),
        headline: post.title,
        description: post.description,
        image: absoluteUrl(siteConfig.image),
        url: absoluteUrl(`/blog/${post.slug}`),
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        inLanguage: siteConfig.language,
        keywords: post.keywords,
        author: {
          "@id": absoluteUrl("/#business")
        },
        publisher: {
          "@id": absoluteUrl("/#business")
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": absoluteUrl(`/blog/${post.slug}`)
        }
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl(`/blog/${post.slug}#faq`),
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/")
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: absoluteUrl("/blog")
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: absoluteUrl(`/blog/${post.slug}`)
          }
        ]
      }
    ]
  };
}
