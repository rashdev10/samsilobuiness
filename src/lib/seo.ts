import { blogPosts, type BlogPost } from "@/lib/blog";
import { answerHubItems, faqItems } from "@/lib/content";
import { business } from "@/lib/site";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

// Primary SEO Keywords
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

// LSI Keywords (Latent Semantic Indexing) for better ranking
export const lsiKeywords = [
  "affordable printing services for students",
  "academic project help Nigeria",
  "thesis formatting services",
  "dissertation editing Nigeria",
  "student document services Lagos",
  "university printing service",
  "project binding services",
  "academic CV writing",
  "research data analysis",
  "SPSS training for students",
  "Excel data analysis tutorial",
  "student career services",
  "campus entrepreneurship support",
  "digital skills training Nigeria",
  "Canva training for students"
];

// Combined keywords for comprehensive SEO
export const allSeoKeywords = [...seoKeywords, ...lsiKeywords];

export const siteConfig = {
  name: business.name,
  shortName: "Samsilo",
  url: siteUrl,
  locale: "en_NG",
  language: "en-NG",
  logo: "/samsilo-favicon-512.png",
  image: "/images/businesscard.png",
  description:
    "Samsilo Digital Hub is a modern campus digital service Nigeria brand for student printing service, school portal support, project formatting Nigeria, student CV writing, data analysis for students, AI training, defence slides, and student business branding.",
  // Geo-targeting
  geo: {
    region: "NG-LA",
    placename: "Lagos, Nigeria",
    position: "6.5244;3.3792" // Lagos coordinates
  },
  // Verification tags (add your actual verification codes)
  verification: {
    google: "SWosAbt4UNVUf1UokBJY8ogFo_MvIYaYREJMZKVvfHo", // Google Search Console verification
    bing: "",   // Add Bing Webmaster verification
    yandex: "" // Add Yandex verification if needed
  },
  // Social media profiles
  social: {
    whatsapp: `https://wa.me/${business.phoneInternational}`,
    // Add other social profiles as they become available
  }
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
  "@type": ["LocalBusiness", "ProfessionalService", "EducationalOrganization"],
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: "6.5244",
    longitude: "3.3792"
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
      availableLanguage: ["English"],
      contactOption: "TollFree"
    }
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "16:00"
    }
  ],
  sameAs: [
    siteConfig.social.whatsapp
  ],
  knowsAbout: [...seoKeywords, ...lsiKeywords],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1"
  }
};

// Organization schema for enhanced SEO
const organizationNode = {
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: business.name,
  url: absoluteUrl("/"),
  logo: {
    "@type": "ImageObject",
    "@id": absoluteUrl("/#logo"),
    url: absoluteUrl(siteConfig.logo),
    contentUrl: absoluteUrl(siteConfig.logo),
    caption: `${business.name} Logo`
  },
  image: {
    "@type": "ImageObject",
    url: absoluteUrl(siteConfig.image)
  },
  description: siteConfig.description,
  sameAs: [
    siteConfig.social.whatsapp
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${business.phoneInternational}`,
    contactType: "customer service",
    areaServed: "NG",
    availableLanguage: ["English"]
  }
};

// HowTo Schema for Project Formatting
const projectFormattingHowTo = {
  "@type": "HowTo",
  "@id": absoluteUrl("/#howto-project-formatting"),
  name: "How to Format Your Final Year Project in Nigeria",
  description: "Step-by-step guide to format academic projects according to Nigerian university standards",
  totalTime: "PT2H",
  step: [
    {
      "@type": "HowToStep",
      name: "Check Department Requirements",
      text: "Confirm your department's approved format for margins, spacing, and citation style",
      position: 1
    },
    {
      "@type": "HowToStep",
      name: "Structure Your Document",
      text: "Organize chapters, references, and appendices according to school guidelines",
      position: 2
    },
    {
      "@type": "HowToStep",
      name: "Format References",
      text: "Apply consistent citation style (APA, MLA, Chicago, or Harvard) throughout",
      position: 3
    },
    {
      "@type": "HowToStep",
      name: "Add Tables and Charts",
      text: "Insert properly labeled tables, figures, and charts with captions",
      position: 4
    },
    {
      "@type": "HowToStep",
      name: "Create Defence Slides",
      text: "Prepare PowerPoint presentation summarizing your project for defence",
      position: 5
    }
  ]
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
      },
      organizationNode,
      projectFormattingHowTo
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

// Helper function to generate breadcrumb JSON-LD for any page
export function getBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url)
    }))
  };
}
