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
  },
  {
    slug: "modern-cv-writing-guide-for-nigerian-graduates",
    title: "How to Write a Modern CV That Gets Noticed by Nigerian Recruiters",
    category: "Career Services",
    summary: "A practical guide to CV structure, ATS-friendly formatting, and LinkedIn optimization for graduates.",
    description:
      "Learn how Nigerian graduates and job seekers can write a modern CV with clean formatting, strong summaries, quantified achievements, and ATS-friendly design for better interview opportunities.",
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-02",
    readingTime: "6 min read",
    keywords: [
      "student CV writing",
      "CV design Nigeria",
      "LinkedIn profile optimization",
      "job application support",
      "career services Nigeria"
    ],
    sections: [
      {
        heading: "Start with a clear professional summary",
        body: [
          "Your CV should start with a 2-3 line professional summary that states your field, key skills, experience level, and what kind of role you want. This helps recruiters understand your profile quickly.",
          "For fresh graduates with limited work experience, focus on internships, academic projects, volunteer work, campus leadership, and relevant skills that match the job description."
        ]
      },
      {
        heading: "Use a clean, ATS-friendly format",
        body: [
          "Many Nigerian companies use Applicant Tracking Systems (ATS) to screen CVs. Use simple fonts like Arial or Calibri, avoid tables and text boxes, and save your CV as a PDF with selectable text.",
          "Structure your CV with clear sections: Contact Information, Professional Summary, Work Experience, Education, Skills, and Certifications. Use consistent formatting and bullet points for easy scanning."
        ]
      },
      {
        heading: "Quantify your achievements",
        body: [
          "Instead of writing 'Responsible for social media', write 'Managed Instagram account with 5,000+ followers, increasing engagement by 40% in 3 months'. Numbers make your achievements more credible.",
          "Include relevant skills like Microsoft Office, Excel, data analysis, project management, content writing, customer service, or any technical skills related to your field."
        ]
      },
      {
        heading: "Optimize your LinkedIn profile alongside your CV",
        body: [
          "A strong LinkedIn profile supports your CV. Use a professional photo, write a compelling headline, add your experience with achievements, request recommendations, and engage with industry content.",
          "Samsilo Digital Hub provides student CV writing, LinkedIn profile optimization, cover letter writing, and complete job application support for graduates and job seekers."
        ]
      }
    ],
    checklist: [
      "Write a clear 2-3 line professional summary",
      "Use ATS-friendly fonts and formatting",
      "List experience in reverse chronological order",
      "Quantify achievements with numbers and results",
      "Include relevant skills and certifications",
      "Optimize LinkedIn profile with professional details",
      "Proofread for grammar and spelling errors"
    ],
    faqs: [
      {
        question: "Can Samsilo Digital Hub write a modern CV for me?",
        answer:
          "Yes. We design modern, ATS-friendly CVs for fresh graduates, experienced professionals, and job seekers with strong formatting and achievement-focused content."
      },
      {
        question: "How do I make my CV stand out in Nigeria?",
        answer:
          "Use a clean format, strong professional summary, quantified achievements, relevant skills, and tailor your CV to match each job description. Also optimize your LinkedIn profile."
      }
    ]
  },
  {
    slug: "school-portal-registration-guide-for-freshers",
    title: "Complete Guide to School Portal Registration for Nigerian Freshers",
    category: "Portal Support",
    summary: "Step-by-step help for admission, acceptance fee, school fee payment, and course registration.",
    description:
      "A fresher-friendly guide to navigating school portal registration including admission forms, acceptance fee payment, document uploads, course registration, and common portal errors in Nigerian universities.",
    publishedAt: "2026-05-03",
    updatedAt: "2026-05-03",
    readingTime: "5 min read",
    keywords: [
      "school portal support",
      "course registration Nigeria",
      "acceptance fee payment",
      "admission support",
      "LASUSTECH digital services"
    ],
    sections: [
      {
        heading: "Understand the registration timeline",
        body: [
          "Most Nigerian universities have strict deadlines for acceptance fee payment, document uploads, course registration, and school fee payment. Missing any deadline can delay your admission or registration.",
          "Check your school portal daily, enable email notifications, and save important dates in your phone calendar. If you're unsure about a step, ask senior students or visit the school's digital support center."
        ]
      },
      {
        heading: "Prepare documents before starting",
        body: [
          "Common required documents include: O'level result (WAEC/NECO), JAMB result slip, birth certificate, local government letter, passport photograph, and admission letter. Scan these as clear PDFs before starting.",
          "Some portals require specific file sizes (usually under 200KB) and formats (PDF or JPG). Use a scanner or clear phone camera, and compress files if needed before uploading."
        ]
      },
      {
        heading: "Complete course registration correctly",
        body: [
          "Follow your department's course registration guidelines carefully. Register for the correct number of credit units, avoid registering for wrong level courses, and make sure you register all compulsory courses.",
          "After registration, print your course registration slip and keep it safe. Some departments require it for exams. If the portal shows errors, take a screenshot and report to your department or ICT unit."
        ]
      },
      {
        heading: "Get help when the portal is confusing",
        body: [
          "School portal support services can help with payment confirmation issues, document upload errors, login problems, course registration guidance, and portal navigation.",
          "Samsilo Digital Hub provides school portal support for LASUSTECH students and students across Nigerian campuses, including admission forms, acceptance fee support, course registration, and payment confirmation."
        ]
      }
    ],
    checklist: [
      "Check portal deadlines and save important dates",
      "Scan and compress required documents (PDF/JPG, under 200KB)",
      "Complete acceptance fee payment and keep receipts",
      "Upload documents carefully and verify successful upload",
      "Register courses according to department guidelines",
      "Print course registration slip and payment receipts",
      "Report portal errors immediately to avoid missing deadlines"
    ],
    faqs: [
      {
        question: "Can you help with school portal registration?",
        answer:
          "Yes. We provide school portal support including admission forms, acceptance fee payment guidance, document uploads, course registration support, and troubleshooting portal errors."
      },
      {
        question: "What if my payment is not reflecting on the portal?",
        answer:
          "Keep your payment receipt, take screenshots of the portal, and report to the bursary or ICT unit immediately. We can also help you prepare the necessary documents and follow-up requests."
      }
    ]
  },
  {
    slug: "excel-spss-data-analysis-for-students",
    title: "Beginner's Guide to Excel and SPSS Data Analysis for Student Projects",
    category: "Project Support",
    summary: "Learn how to analyze questionnaire data and create charts for your final-year project.",
    description:
      "A practical guide for Nigerian students who need to analyze research data using Excel or SPSS, including questionnaire design, data entry, descriptive statistics, charts, and interpretation for final-year projects.",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
    readingTime: "7 min read",
    keywords: [
      "data analysis for students",
      "Excel SPSS tutorial",
      "final year project support",
      "questionnaire design",
      "research data analysis Nigeria"
    ],
    sections: [
      {
        heading: "Design your questionnaire with analysis in mind",
        body: [
          "Before collecting data, plan how you will analyze it. Use clear numbering for questions, create response options that are easy to code (e.g., Strongly Agree = 5, Agree = 4), and avoid ambiguous questions.",
          "For online data collection, Google Forms can export responses directly to Excel, which saves time on manual data entry. Make sure your form is clear and mobile-friendly for respondents."
        ]
      },
      {
        heading: "Enter and clean your data properly",
        body: [
          "In Excel or SPSS, create one row per respondent and one column per question. Use consistent codes (1, 2, 3, 4, 5 instead of mixing numbers and text). Check for duplicate entries, missing values, and obvious errors.",
          "Label your variables clearly. Instead of 'Q1', use descriptive names like 'Age_Group' or 'Satisfaction_Level' so your analysis results are easier to understand."
        ]
      },
      {
        heading: "Run descriptive statistics and create charts",
        body: [
          "For most undergraduate projects, you need frequency tables, percentages, mean scores, and standard deviation. Excel can calculate these using functions or PivotTables. SPSS has built-in Descriptive Statistics tools.",
          "Create clear charts: bar charts for categorical data, pie charts for proportions, and line charts for trends. Every chart should have a title, axis labels, and a caption explaining what it shows."
        ]
      },
      {
        heading: "Interpret results and present findings professionally",
        body: [
          "Your project chapter should explain what the numbers mean in plain language. For example: '75% of respondents agreed that the platform is user-friendly, showing strong satisfaction with usability.'",
          "Samsilo Digital Hub provides data analysis for students, including Excel/SPSS analysis, questionnaire design, Google Forms setup, charts, tables, interpretation guidance, and presentation-ready outputs for final-year projects."
        ]
      }
    ],
    checklist: [
      "Design questionnaire with clear, codable response options",
      "Use Google Forms for easier data collection and export",
      "Enter data in Excel/SPSS with one row per respondent",
      "Clean data: check for errors, duplicates, and missing values",
      "Run frequency tables, percentages, mean, and standard deviation",
      "Create labeled charts (bar, pie, line) for key findings",
      "Write clear interpretations in your project chapter"
    ],
    faqs: [
      {
        question: "Do you provide data analysis for student projects?",
        answer:
          "Yes. We help students with Excel/SPSS data analysis, questionnaire design, Google Forms setup, data cleaning, descriptive statistics, charts, tables, and interpretation guidance."
      },
      {
        question: "Can you teach me how to use SPSS?",
        answer:
          "Yes. We offer SPSS and Excel training for students covering data entry, descriptive statistics, charts, frequency tables, and how to interpret results for academic projects."
      }
    ]
  },
  {
    slug: "whatsapp-business-catalogue-setup-guide",
    title: "How to Set Up a Professional WhatsApp Business Catalogue for Campus Sales",
    category: "Business Branding",
    summary: "Create a catalog that makes it easy for customers to browse products and place orders.",
    description:
      "A step-by-step guide for student entrepreneurs and small businesses on setting up a WhatsApp Business catalogue with product photos, descriptions, prices, and categories for better campus sales.",
    publishedAt: "2026-05-05",
    updatedAt: "2026-05-05",
    readingTime: "5 min read",
    keywords: [
      "WhatsApp catalogue setup",
      "student business branding",
      "campus entrepreneur Nigeria",
      "digital business tools",
      "product catalogue design"
    ],
    sections: [
      {
        heading: "Why WhatsApp Business is essential for campus sales",
        body: [
          "Most Nigerian students prefer ordering through WhatsApp because it's familiar, fast, and doesn't require creating new accounts. A WhatsApp Business catalogue organizes your products in one place, making browsing and ordering easier.",
          "Unlike regular WhatsApp, WhatsApp Business lets you add business hours, location, automated replies, quick replies, and most importantly, a product catalogue that customers can browse without asking for a price list every time."
        ]
      },
      {
        heading: "Set up your catalogue with clear product details",
        body: [
          "For each product, add a clear photo (good lighting, plain background), product name, price, brief description, and availability status. Use consistent photo styles so your catalogue looks professional.",
          "Organize products into categories (e.g., Food Items, Skincare, Accessories, Printing Services). This helps customers find what they need faster, especially if you have many products."
        ]
      },
      {
        heading: "Make ordering simple and clear",
        body: [
          "In your catalogue descriptions, include: product name, price, size/quantity options, delivery/pickup details, and how to order. For example: 'To order, send: Product name + Quantity + Delivery location'.",
          "Use WhatsApp Business features like automated greeting messages, away messages, and quick replies to answer common questions about delivery time, payment methods, and order confirmation."
        ]
      },
      {
        heading: "Keep your catalogue updated",
        body: [
          "Update prices, mark out-of-stock items, add new products, and remove discontinued items regularly. An outdated catalogue frustrates customers and wastes your time answering repetitive questions.",
          "Samsilo Digital Hub helps student entrepreneurs with WhatsApp catalogue setup, product photography, category organization, business profile design, and social media graphics for campus businesses."
        ]
      }
    ],
    checklist: [
      "Download and set up WhatsApp Business app",
      "Add business name, description, hours, and location",
      "Take clear product photos with good lighting",
      "Add products with name, price, description, and category",
      "Set up automated replies for common questions",
      "Test the catalogue flow: browsing, ordering, confirmation",
      "Update catalogue regularly with new products and prices"
    ],
    faqs: [
      {
        question: "Can you help me set up a WhatsApp Business catalogue?",
        answer:
          "Yes. We help student entrepreneurs with WhatsApp catalogue setup including product photos, descriptions, categories, pricing, business profile, and automated message templates."
      },
      {
        question: "Is WhatsApp Business free?",
        answer:
          "Yes. WhatsApp Business is free to download and use. You only pay for internet data. It includes free features like catalogue, automated messages, and business profile."
      }
    ]
  },
  {
    slug: "powerpoint-defence-presentation-tips",
    title: "How to Create a Professional Project Defence Presentation in PowerPoint",
    category: "Project Support",
    summary: "Design clear, examiner-friendly defence slides that highlight your key findings.",
    description:
      "A practical guide for final-year students preparing PowerPoint defence presentations, covering slide structure, design tips, key content to include, and how to avoid common presentation mistakes during project defence.",
    publishedAt: "2026-05-06",
    updatedAt: "2026-05-06",
    readingTime: "6 min read",
    keywords: [
      "PowerPoint defence slides",
      "final year project support",
      "project presentation tips",
      "defence preparation Nigeria",
      "academic presentation design"
    ],
    sections: [
      {
        heading: "Structure your slides like a story",
        body: [
          "Your defence presentation should tell the story of your research in 10-15 slides: Title slide, Introduction (problem statement), Objectives, Literature Review summary, Methodology, Findings (with charts), Discussion, Conclusion, Recommendations, and References.",
          "Do not copy entire paragraphs from your project document. Each slide should have a clear heading, 3-5 bullet points, and supporting visuals (charts, diagrams, images) where relevant."
        ]
      },
      {
        heading: "Use clean, professional design",
        body: [
          "Choose a simple, readable template with consistent colors (usually your school colors or professional blue/grey tones). Avoid distracting animations, bright colors, or fancy fonts that make slides hard to read.",
          "Use large fonts (minimum 24pt for body text, 32pt+ for headings). Examiners should be able to read your slides from across the room. Test your slides on a projector or large screen before defence day."
        ]
      },
      {
        heading: "Focus on findings and evidence",
        body: [
          "Examiners care most about your research questions, methodology, findings, and how you interpreted results. Spend most slides on these sections, using charts, tables, and data visualizations to support your points.",
          "For every chart, explain what it shows in one sentence. Example: 'Figure 3 shows that 78% of respondents prefer mobile banking, indicating strong acceptance of digital payment platforms among students.'"
        ]
      },
      {
        heading: "Practice and prepare for questions",
        body: [
          "Rehearse your presentation multiple times. Aim for 10-15 minutes total. Know your slides well enough that you can explain them without reading directly from the screen.",
          "Samsilo Digital Hub provides PowerPoint defence slide design, chart formatting, presentation structure guidance, and defence preparation support for final-year students across Nigerian campuses."
        ]
      }
    ],
    checklist: [
      "Structure: Title, Intro, Objectives, Literature, Method, Findings, Conclusion",
      "Use 10-15 slides maximum (10-15 minutes presentation)",
      "Choose clean, professional template with readable fonts",
      "Include charts and visuals for key findings",
      "Add slide numbers and keep consistent formatting",
      "Proofread all text for spelling and grammar errors",
      "Practice presentation timing and flow",
      "Prepare answers for potential examiner questions"
    ],
    faqs: [
      {
        question: "Can you design PowerPoint defence slides for my project?",
        answer:
          "Yes. We create professional PowerPoint defence presentations with clean design, charts, structured content, and examiner-friendly formatting for final-year students."
      },
      {
        question: "How many slides should a project defence have?",
        answer:
          "Typically 10-15 slides for a 10-15 minute presentation. Focus on problem statement, objectives, methodology, key findings with charts, and recommendations."
      }
    ]
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
