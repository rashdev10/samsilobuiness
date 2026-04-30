import type { FaqItem } from "@/lib/content";

export type BlogSection = {
  heading: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  keywords: string[];
  sections: BlogSection[];
  checklist: string[];
  faqs: FaqItem[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "prepare-final-year-project-document-before-defence",
    title: "How to Prepare a Cleaner Final-Year Project Document Before Defence",
    category: "Project Support",
    summary: "A practical checklist for structure, references, tables, charts, and PowerPoint defence slides.",
    description:
      "Learn how final-year students in Nigeria can prepare a cleaner project document before defence with ethical formatting, citation cleanup, data tables, charts, and presentation support.",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    readingTime: "5 min read",
    keywords: [
      "project formatting Nigeria",
      "final year project support",
      "PowerPoint defence slides",
      "data analysis for students",
      "LASUSTECH digital services"
    ],
    sections: [
      {
        heading: "Start with the school format before editing",
        body: [
          "Before you print or bind a final-year project, confirm your department's approved format. Check title page order, margin settings, chapter numbering, line spacing, table style, reference style, and whether appendices should come before or after questionnaires.",
          "A clean project document is not only about good typing. It should look consistent from chapter one to chapter five, and every table, figure, citation, and appendix should be easy for a supervisor or examiner to follow."
        ]
      },
      {
        heading: "Clean up references, citations, tables, and charts",
        body: [
          "Many project documents lose marks because references are inconsistent. Keep your citation style uniform, make sure every in-text citation appears in the reference list, and remove references that are not used in the work.",
          "For Excel/SPSS data analysis, label charts and tables clearly. A reader should know what each chart explains without guessing from the paragraph before it."
        ]
      },
      {
        heading: "Prepare defence slides from the examiner's point of view",
        body: [
          "PowerPoint defence slides should not copy the entire project. Focus on the research problem, objectives, method, key findings, charts, conclusion, and recommendations.",
          "At Samsilo Digital Hub, our final year project support is ethical: we help with formatting, editing, research guidance, data presentation, document cleanup, and defence preparation, not academic cheating."
        ]
      }
    ],
    checklist: [
      "Confirm department format and chapter order",
      "Check margins, spacing, page numbers, headings, and captions",
      "Clean up references and citation style",
      "Review questionnaires, appendices, tables, and charts",
      "Convert final copy to PDF before printing",
      "Prepare defence PowerPoint slides with key findings only"
    ],
    faqs: [
      {
        question: "Can Samsilo Digital Hub format my final-year project?",
        answer:
          "Yes. We offer ethical project formatting Nigeria support including layout cleanup, citation formatting, tables, charts, PDF conversion, defence slides, printing, and binding guidance."
      },
      {
        question: "Do you help with Excel/SPSS data analysis?",
        answer:
          "Yes. We support data analysis for students using Excel or SPSS, including charts, tables, interpretation guidance, and presentation-ready outputs."
      }
    ]
  },
  {
    slug: "ethical-ai-tools-for-students",
    title: "Smart Ways Students Can Use AI Tools Ethically",
    category: "AI Training",
    summary: "Use AI for proofreading, summaries, outlines, and productivity while keeping your work honest.",
    description:
      "A student-friendly guide to using AI tools for proofreading, lecture note summarization, report structure, prompts, presentations, and academic productivity without cheating.",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    readingTime: "4 min read",
    keywords: [
      "AI training for students",
      "campus digital service Nigeria",
      "student productivity tools",
      "report structuring",
      "presentation design"
    ],
    sections: [
      {
        heading: "Use AI as a study assistant, not a shortcut for dishonesty",
        body: [
          "AI tools can help students understand notes faster, improve grammar, create outlines, and prepare presentations. The ethical line is simple: use AI to improve your own work and learning, not to submit work you did not understand.",
          "When AI gives you an answer, verify it. AI can make confident mistakes, especially with citations, statistics, local academic rules, and school-specific instructions."
        ]
      },
      {
        heading: "Turn rough notes into useful study material",
        body: [
          "Students can use AI to summarize lecture notes, create revision questions, organize report sections, and simplify difficult explanations. This is helpful for freshers, final-year students, and busy class reps preparing academic materials.",
          "A good prompt should include the course, topic, level, expected output, and tone. Clear prompts produce cleaner study guides and better presentation drafts."
        ]
      },
      {
        heading: "Get training before depending on AI tools",
        body: [
          "AI training for students should cover prompt writing, proofreading, report structure, slide design, spreadsheet support, and the limits of AI-generated content.",
          "Samsilo Digital Hub helps students use AI productivity tools responsibly alongside Word, Excel, PowerPoint, Canva, Google Forms, and Google Sheets."
        ]
      }
    ],
    checklist: [
      "Use AI to clarify, summarize, proofread, and organize",
      "Do not submit AI output without understanding it",
      "Verify facts, citations, statistics, and school instructions",
      "Keep your own voice in reports and assignments",
      "Ask for training if you do not understand prompts or tools"
    ],
    faqs: [
      {
        question: "Does Samsilo Digital Hub offer AI training for students?",
        answer:
          "Yes. We train students on prompt writing, AI-assisted proofreading, report structuring, lecture note summarization, presentation design, Canva, Google Forms, and Sheets."
      },
      {
        question: "Can AI help with assignments ethically?",
        answer:
          "Yes, when used for guidance, proofreading, outlines, revision, and formatting. It should not be used to replace your own learning or submit dishonest work."
      }
    ]
  },
  {
    slug: "student-entrepreneur-digital-branding",
    title: "Why Student Entrepreneurs Need Simple Digital Branding",
    category: "Business Branding",
    summary: "Flyers, catalogues, labels, and landing pages can make a campus business easier to trust.",
    description:
      "A practical guide for student entrepreneurs who want better flyers, WhatsApp catalogues, product labels, social media graphics, and simple landing pages for campus businesses.",
    publishedAt: "2026-04-29",
    updatedAt: "2026-04-29",
    readingTime: "4 min read",
    keywords: [
      "student business branding",
      "campus digital service Nigeria",
      "WhatsApp catalogue",
      "student entrepreneur",
      "social media graphics"
    ],
    sections: [
      {
        heading: "Good branding helps people trust a small campus business",
        body: [
          "Student entrepreneurs often sell through WhatsApp, Instagram, class groups, and referrals. A clear logo, flyer, catalogue, product label, or landing page can make the business look organized and easier to contact.",
          "Simple branding does not need to be expensive. It needs to be consistent, readable, and clear about what you sell, your price range, your location, and how customers can order."
        ]
      },
      {
        heading: "Build around the platforms students already use",
        body: [
          "For campus businesses, WhatsApp catalogue setup, social media graphics, flyers, product labels, and short landing pages are usually more practical than complicated websites.",
          "The goal is to reduce buyer confusion. Customers should quickly understand the product, price, delivery option, and WhatsApp order process."
        ]
      },
      {
        heading: "Use a simple launch kit",
        body: [
          "A student entrepreneur pack can include a logo, flyers, WhatsApp catalogue, simple landing page, product labels, and social media graphics.",
          "Samsilo Digital Hub supports student business branding for students and small businesses around campuses in Nigeria."
        ]
      }
    ],
    checklist: [
      "Create a readable logo or business name style",
      "Design flyers sized for WhatsApp status and Instagram",
      "Set up a WhatsApp catalogue with clear product details",
      "Use consistent colors, prices, and contact information",
      "Add a simple landing page when customers need more details"
    ],
    faqs: [
      {
        question: "Can Samsilo Digital Hub design for student businesses?",
        answer:
          "Yes. We design logos, flyers, WhatsApp catalogues, simple landing pages, product labels, business profiles, and social media graphics."
      },
      {
        question: "Do student entrepreneurs need a full website?",
        answer:
          "Not always. Many campus businesses can start with WhatsApp catalogue, flyers, labels, and a simple landing page before investing in a bigger website."
      }
    ]
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
