export type FaqItem = {
  question: string;
  answer: string;
};

export type AnswerHubItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Do you only serve LASUSTECH students?",
    answer: "No, we support students across campuses in Nigeria, with strong physical presence around LASUSTECH."
  },
  {
    question: "Can I request service through WhatsApp?",
    answer: "Yes, most services can be requested through WhatsApp."
  },
  {
    question: "Do you write assignments or projects for students?",
    answer:
      "We provide ethical academic support such as formatting, editing, research guidance, data analysis, referencing, document cleanup, and defence preparation."
  },
  {
    question: "Do you offer urgent printing or typing?",
    answer: "Yes, urgent service is available depending on workload."
  },
  {
    question: "Can class reps partner with you?",
    answer: "Yes, class reps can join our referral and bulk service partnership."
  },
  {
    question: "Do you train students?",
    answer: "Yes, we offer training in Word, Excel, PowerPoint, Canva, AI tools, CV writing, and data analysis."
  }
];

export const answerHubItems: AnswerHubItem[] = [
  {
    question: "What is Samsilo Digital Hub?",
    answer:
      "Samsilo Digital Hub is a campus digital service Nigeria brand helping students, lecturers, departments, class reps, graduates, student entrepreneurs, and small businesses with documents, portals, projects, career materials, training, data analysis, and branding."
  },
  {
    question: "Where is Samsilo Digital Hub located?",
    answer:
      "Samsilo Digital Hub has a strong physical presence around Lagos State University of Science and Technology in Lagos, Nigeria, while supporting students across Nigerian campuses through WhatsApp booking and remote digital service requests."
  },
  {
    question: "What student printing service can I request?",
    answer:
      "Students can request typing, printing, photocopy, scanning to PDF, lamination, binding, passport photo editing, PDF conversion, and document cleanup."
  },
  {
    question: "Can Samsilo Digital Hub help with project formatting Nigeria requests?",
    answer:
      "Yes. We provide ethical final year project support including document formatting, proposal formatting, citation cleanup, questionnaire design, Google Forms setup, Excel/SPSS data analysis, charts, tables, defence PowerPoint slides, printing, and binding guidance."
  },
  {
    question: "Do you offer student CV writing and LinkedIn support?",
    answer:
      "Yes. Graduates and job seekers can request modern CV design, LinkedIn profile optimization, cover letters, internship application support, portfolio setup, and interview preparation documents."
  },
  {
    question: "Can students learn AI tools at Samsilo Digital Hub?",
    answer:
      "Yes. We offer AI training for students covering proofreading, lecture note summarization, report structuring, presentation design, prompt writing, Canva workflows, Google Forms, and Google Sheets productivity."
  }
];
