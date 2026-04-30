export type ServiceCategory = {
  title: string;
  summary: string;
  items: string[];
};

export type PackageCard = {
  title: string;
  price: string;
  summary: string;
  items: string[];
  featured?: boolean;
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Everyday Computer Services",
    summary:
      "Fast document handling for students, lecturers, class reps, departments, and campus businesses.",
    items: [
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
    title: "School Portal & Online Services",
    summary:
      "Guided support for admission, registration, uploads, payments, student email, and online school tasks.",
    items: [
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
    title: "Academic & Project Support",
    summary:
      "Ethical academic editing, formatting, research assistance, data presentation, and defence preparation.",
    items: [
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
    title: "Career & Job Services",
    summary:
      "Career documents and digital positioning for students, graduates, interns, and job seekers.",
    items: [
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
    title: "AI & Digital Productivity Services",
    summary:
      "Responsible AI support for proofreading, summaries, reports, presentations, prompts, and productivity.",
    items: [
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
    title: "Training Services",
    summary:
      "Practical digital skills training for students who want to work faster and present more professionally.",
    items: [
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
    title: "Business & Department Services",
    summary:
      "Digital design and operations support for class reps, departments, associations, and student founders.",
    items: [
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

export const packages: PackageCard[] = [
  {
    title: "Freshers Digital Welcome Pack",
    price: "Starting from ₦10,000",
    summary: "A setup pack for newly admitted students who need portal and document readiness.",
    items: [
      "Portal setup support",
      "Document scanning",
      "Passport photo support",
      "Course registration guidance",
      "PDF folder organization",
      "Student checklist"
    ]
  },
  {
    title: "Assignment Clean-Up Pack",
    price: "Starting from ₦3,000",
    summary: "A quick polish package for assignments that need clean formatting and submission-ready output.",
    items: ["Typing", "Formatting", "Grammar cleanup", "References", "PDF conversion", "Printing support"]
  },
  {
    title: "Final-Year Defence Pack",
    price: "Starting from ₦50,000",
    summary: "Ethical project formatting, data presentation, defence slide support, and final document guidance.",
    featured: true,
    items: [
      "Project formatting",
      "Questionnaire support",
      "Data charts",
      "Defence slides",
      "Printing and binding guidance",
      "Mock defence questions"
    ]
  },
  {
    title: "Job-Ready Graduate Pack",
    price: "Starting from ₦25,000",
    summary: "A practical career package for fresh graduates, interns, NYSC candidates, and job seekers.",
    items: ["CV", "LinkedIn optimization", "Cover letter template", "Job application guidance", "Interview prep"]
  },
  {
    title: "Student Entrepreneur Pack",
    price: "Starting from ₦50,000",
    summary: "A launch kit for campus businesses that need identity, sales materials, and digital presence.",
    items: ["Logo", "Flyers", "WhatsApp catalogue", "Simple landing page", "Product labels", "Social media graphics"]
  },
  {
    title: "Department Event Pack",
    price: "Starting from ₦100,000",
    summary: "Event communication and operations support for departments, associations, and class executives.",
    items: ["Event flyers", "Tickets", "Certificates", "Registration forms", "Attendance QR code", "Event programme design"]
  }
];

export const retainershipPlans: PackageCard[] = [
  {
    title: "Student Basic",
    price: "₦2,000/month",
    summary: "A light plan for students who need faster routine document support.",
    items: ["Priority queue", "Discounted printing", "Free school update alerts", "5 free scans monthly"]
  },
  {
    title: "Student Plus",
    price: "₦5,000/month",
    summary: "A stronger monthly support plan for active students with regular assignments and career needs.",
    items: ["Everything in Basic", "Assignment formatting discount", "CV discount", "Monthly academic checklist"]
  },
  {
    title: "Final-Year VIP",
    price: "₦20,000/month",
    summary: "A focused support plan for final-year students preparing project documents and defence materials.",
    featured: true,
    items: [
      "Project formatting support",
      "Defence preparation support",
      "Data analysis discount",
      "Priority printing and binding support"
    ]
  },
  {
    title: "Department/Class Rep Plan",
    price: "Custom Pricing",
    summary: "A flexible plan for class reps, departments, associations, and lecturers with recurring bulk needs.",
    items: ["Bulk printing", "Event designs", "Certificates", "QR attendance", "Registration forms", "Commission/referral benefits"]
  }
];
