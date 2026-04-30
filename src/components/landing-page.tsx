"use client";

import Image from "next/image";
import Link from "next/link";
import { type ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AcademicDecorators } from "@/components/academic-decorators";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Gift,
  GraduationCap,
  Handshake,
  Headphones,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Presentation,
  Printer,
  Rocket,
  School,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Users,
  WalletCards,
  X
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { blogPosts } from "@/lib/blog";
import { answerHubItems, faqItems } from "@/lib/content";
import { business, whatsappLink } from "@/lib/site";

type ServiceCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

type PackageCard = {
  title: string;
  price: string;
  items: string[];
  featured?: boolean;
};

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Retainership", href: "/retainership" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

const trustBadges = [
  "Fast Delivery",
  "Student-Friendly Prices",
  "Project & Defence Support",
  "WhatsApp Booking",
  "Campus-Based Service"
];

const heroSlides = [
  {
    title: "Your Campus Digital Service Hub for Printing, Projects, Portals, CVs, Data Analysis & More",
    description:
      "We help students, lecturers, departments, and small businesses handle documents, academic work, career materials, online registrations, digital training, and business support faster and more professionally.",
    primaryText: "Chat on WhatsApp",
    primaryHref: whatsappLink("Hello Samsilo Digital Hub, I want to request a service."),
    secondaryText: "Explore Services",
    secondaryHref: "#services"
  },
  {
    title: "Final-Year Projects, Data Analysis & Defence Slides Done Professionally",
    description:
      "Get ethical academic support for project formatting, references, questionnaires, Excel/SPSS data analysis, charts, tables, defence PowerPoint slides, printing, and binding guidance.",
    primaryText: "Start Defence Support",
    primaryHref: whatsappLink("Hello Samsilo Digital Hub, I need final-year project and defence support."),
    secondaryText: "View Packages",
    secondaryHref: "#packages"
  },
  {
    title: "From Freshers Portal Help to CVs, AI Training & Student Business Branding",
    description:
      "Samsilo Digital Hub supports students from admission to graduation with portal guidance, CV and LinkedIn services, AI productivity training, Canva designs, and business branding.",
    primaryText: "Book a Service",
    primaryHref: whatsappLink("Hello Samsilo Digital Hub, I want to book a service."),
    secondaryText: "Join Retainership",
    secondaryHref: "#retainership"
  }
];

const serviceCategories: ServiceCategory[] = [
  {
    title: "Everyday Computer Services",
    icon: Printer,
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
    icon: School,
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
    icon: GraduationCap,
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
    icon: BriefcaseBusiness,
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
    icon: Bot,
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
    icon: Presentation,
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
    icon: Building2,
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

const packages: PackageCard[] = [
  {
    title: "Freshers Digital Welcome Pack",
    price: "Starting from ₦10,000",
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
    items: ["Typing", "Formatting", "Grammar cleanup", "References", "PDF conversion", "Printing support"]
  },
  {
    title: "Final-Year Defence Pack",
    price: "Starting from ₦50,000",
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
    items: ["CV", "LinkedIn optimization", "Cover letter template", "Job application guidance", "Interview prep"]
  },
  {
    title: "Student Entrepreneur Pack",
    price: "Starting from ₦50,000",
    items: ["Logo", "Flyers", "WhatsApp catalogue", "Simple landing page", "Product labels", "Social media graphics"]
  },
  {
    title: "Department Event Pack",
    price: "Starting from ₦100,000",
    items: ["Event flyers", "Tickets", "Certificates", "Registration forms", "Attendance QR code", "Event programme design"]
  }
];

const retainershipPlans: PackageCard[] = [
  {
    title: "Student Basic",
    price: "₦2,000/month",
    items: ["Priority queue", "Discounted printing", "Free school update alerts", "5 free scans monthly"]
  },
  {
    title: "Student Plus",
    price: "₦5,000/month",
    items: ["Everything in Basic", "Assignment formatting discount", "CV discount", "Monthly academic checklist"]
  },
  {
    title: "Final-Year VIP",
    price: "₦20,000/month",
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
    items: ["Bulk printing", "Event designs", "Certificates", "QR attendance", "Registration forms", "Commission/referral benefits"]
  }
];

const whyChoose = [
  { title: "Fast and reliable service", icon: Clock },
  { title: "Affordable student-friendly pricing", icon: WalletCards },
  { title: "WhatsApp booking available", icon: MessageCircle },
  { title: "Project and defence support", icon: GraduationCap },
  { title: "Modern digital tools", icon: Sparkles },
  { title: "Friendly customer support", icon: Headphones },
  { title: "Services for students, lecturers, and businesses", icon: Users },
  { title: "Retainership and referral rewards", icon: Gift }
];

const testimonials = [
  {
    role: "Final-year student",
    quote:
      "My project document looked more professional after formatting, and the defence slides were clean and easy to present."
  },
  {
    role: "Class representative",
    quote:
      "Samsilo Digital Hub helped us manage bulk printing and class documents without wasting time. The WhatsApp process made it simple."
  },
  {
    role: "Fresher",
    quote:
      "They helped me scan my documents, organize my admission files, and understand the next portal steps as a new student."
  },
  {
    role: "Student entrepreneur",
    quote:
      "I got flyers, product labels, and a WhatsApp catalogue that made my small campus business look serious."
  }
];

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name must contain only letters and spaces"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^[0-9+\s()-]+$/, "Phone number must contain only digits and valid characters"),
  campus: z
    .string()
    .min(2, "School/Campus name must be at least 2 characters")
    .max(100, "School/Campus name must be less than 100 characters"),
  departmentLevel: z
    .string()
    .min(2, "Department/Level must be at least 2 characters")
    .max(100, "Department/Level must be less than 100 characters"),
  serviceNeeded: z
    .string()
    .min(1, "Please select a service"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

type Theme = "light" | "dark";
const themeStorageKey = "samsilo-theme";

function getStoredTheme(): Theme {
  if (typeof document !== "undefined" && document.documentElement.dataset.theme === "dark") {
    return "dark";
  }

  return "light";
}

function SectionIntro({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <h2 className="text-balance text-3xl font-bold leading-tight text-slate-950 md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
}) {
  const classes =
    variant === "secondary"
      ? "border border-white/60 bg-white/10 text-white hover:bg-white/20"
      : variant === "dark"
        ? "brand-dark-button text-white"
        : "brand-primary-button text-white";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition ${classes}`}
    >
      {children}
    </a>
  );
}

function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex size-11 items-center justify-center rounded-lg border border-white/20 bg-white/[0.08] text-white transition hover:bg-white/[0.16]"
    >
      {isDark ? <Sun className="size-5" aria-hidden="true" /> : <Moon className="size-5" aria-hidden="true" />}
    </button>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-green-600" aria-hidden="true" />
          <span className="font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LandingPage() {
  const [heroCarouselRef, heroCarouselApi] = useEmblaCarousel({ align: "start", loop: true });
  const [heroSelectedIndex, setHeroSelectedIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [themeReady, setThemeReady] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur"
  });

  const formValues = watch();

  const onHeroSelect = useCallback(() => {
    if (!heroCarouselApi) {
      return;
    }

    setHeroSelectedIndex(heroCarouselApi.selectedScrollSnap());
  }, [heroCarouselApi]);

  const scrollToHeroSlide = useCallback(
    (index: number) => {
      heroCarouselApi?.scrollTo(index);
    },
    [heroCarouselApi]
  );

  const scrollHeroPrev = useCallback(() => {
    heroCarouselApi?.scrollPrev();
  }, [heroCarouselApi]);

  const scrollHeroNext = useCallback(() => {
    heroCarouselApi?.scrollNext();
  }, [heroCarouselApi]);

  useEffect(() => {
    if (!heroCarouselApi) {
      return;
    }

    heroCarouselApi.on("select", onHeroSelect);
    heroCarouselApi.on("reInit", onHeroSelect);

    return () => {
      heroCarouselApi.off("select", onHeroSelect);
      heroCarouselApi.off("reInit", onHeroSelect);
    };
  }, [heroCarouselApi, onHeroSelect]);

  useEffect(() => {
    if (!heroCarouselApi || shouldReduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      heroCarouselApi.scrollNext();
    }, 8000);

    return () => window.clearInterval(interval);
  }, [heroCarouselApi, shouldReduceMotion]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTheme(getStoredTheme());
      setThemeReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!themeReady) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme, themeReady]);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%"
            }
          }
        );
      });
    });

    return () => context.revert();
  }, [shouldReduceMotion]);

  const formWhatsappLink = useMemo(() => {
    const name = formValues?.fullName || "a visitor";
    const service = formValues?.serviceNeeded || "a digital service";
    return whatsappLink(
      `Hello Samsilo Digital Hub, my name is ${name}. I need help with ${service}. Phone: ${formValues?.phone || "not provided"}.`
    );
  }, [formValues]);

  async function onSubmit(data: ContactFormData) {
    setFormStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setFormStatus({
          type: "error",
          message: result.error || "Your request could not be saved. Please use WhatsApp for now."
        });
        return;
      }

      reset();
      setFormStatus({
        type: "success",
        message: "Your request has been received. We will follow up as soon as possible."
      });
    } catch {
      setFormStatus({
        type: "error",
        message: "Network error. Please chat with us on WhatsApp for immediate support."
      });
    }
  }

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <main className="theme-root overflow-hidden bg-slate-50 transition-colors duration-300">
      <header className="brand-header fixed inset-x-0 top-0 z-50 border-b border-white/[0.15] text-white backdrop-blur-xl">
        <div className="section-shell flex min-h-[74px] items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3" aria-label="Samsilo Digital Hub home">
            <span className="logo-mark flex size-11 items-center justify-center rounded-lg bg-white p-1.5">
              <Image
                src="/samsilo-favicon-512.png"
                alt="Samsilo Digital Hub logo"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-black">{business.name}</span>
              <span className="block text-xs text-slate-300">Campus Digital Service Hub</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link-underline transition hover:text-green-300">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <a
              href={`tel:${business.phoneE164}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200"
            >
              <Phone className="size-4 text-green-300" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
            <PrimaryButton href={whatsappLink()} variant="primary">
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </PrimaryButton>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-white/20 text-white"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="brand-mobile-menu border-t border-white/10 px-4 py-4 lg:hidden">
            <nav className="mx-auto grid max-w-xl gap-2 text-sm font-semibold text-slate-100" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 transition hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="brand-primary-button mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-bold text-white"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      <section id="home" className="relative isolate flex min-h-[88vh] items-center pt-[74px] text-white">
        <Image
          src="/images/campus-digital-service.jpg"
          alt="Students working together on laptops for campus digital services"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="hero-overlay absolute inset-0 -z-10" />
        <AcademicDecorators variant="home" />
        <div className="section-shell relative z-10 py-14 md:py-20">
          <motion.div
            initial={false}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <div className="hero-carousel" aria-roledescription="carousel" aria-label="Samsilo Digital Hub highlights">
              <div className="overflow-hidden" ref={heroCarouselRef}>
                <div className="hero-carousel-track flex">
                  {heroSlides.map((slide, index) => {
                    const HeadingTag = index === 0 ? "h1" : "h2";

                    return (
                      <div
                        key={slide.title}
                        className="hero-carousel-slide min-w-0 flex-[0_0_100%]"
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${index + 1} of ${heroSlides.length}`}
                      >
                        <HeadingTag className="text-balance text-4xl font-black leading-tight md:text-6xl">
                          {slide.title}
                        </HeadingTag>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100 md:text-xl">{slide.description}</p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                          <PrimaryButton href={slide.primaryHref}>
                            <MessageCircle className="size-5" aria-hidden="true" />
                            {slide.primaryText}
                          </PrimaryButton>
                          <PrimaryButton href={slide.secondaryHref} variant="secondary">
                            {slide.secondaryText}
                            <ArrowRight className="size-5" aria-hidden="true" />
                          </PrimaryButton>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3" aria-label="Hero carousel controls">
                <button
                  type="button"
                  onClick={scrollHeroPrev}
                  className="inline-flex size-11 items-center justify-center rounded-lg border border-white/25 bg-white/[0.12] text-white backdrop-blur transition hover:bg-white/[0.2]"
                  aria-label="Previous hero slide"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={scrollHeroNext}
                  className="inline-flex size-11 items-center justify-center rounded-lg border border-white/25 bg-white/[0.12] text-white backdrop-blur transition hover:bg-white/[0.2]"
                  aria-label="Next hero slide"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>

                <div className="flex items-center gap-2">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => scrollToHeroSlide(index)}
                      className={`h-2.5 rounded-full transition ${
                        index === heroSelectedIndex ? "w-9 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
                      }`}
                      aria-label={`Go to hero slide ${index + 1}`}
                      aria-current={index === heroSelectedIndex ? "true" : undefined}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex max-w-[17.5rem] flex-wrap gap-3 sm:max-w-none">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/12 px-3 py-2 text-xs font-bold text-white backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/40"
                >
                  <BadgeCheck className="size-4 text-yellow-300" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="about-diagonal-section bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="gsap-reveal">
            <h2 className="text-balance text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              Digital support from admission stage to graduation and beyond
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-slate-600">
              Samsilo Digital Hub helps students and campus communities with modern digital services beyond normal
              printing and typing. We support freshers, final-year students, lecturers, class reps, departments, student
              entrepreneurs, small businesses, graduates, and job seekers.
            </p>
            <p className="mt-4 text-base font-medium leading-7 text-slate-600">
              From school portal support and academic formatting to final-year project preparation, CV writing, AI
              training, data analysis, and business branding, the goal is simple: make important campus tasks faster,
              cleaner, and more professional. Our LASUSTECH digital services presence gives us strong roots, while our
              campus digital service Nigeria approach keeps the brand open to students across Nigeria.
            </p>
          </div>

          <div className="gsap-reveal grid gap-4 sm:grid-cols-2">
            {[
              ["Students supported", "Freshers, final-year students, class reps, and graduates"],
              ["Academic support", "Ethical formatting, editing, guidance, analysis, and defence preparation"],
              ["Business support", "Branding, catalogues, social media graphics, and simple landing pages"],
              ["Service channels", "Walk-in support and WhatsApp booking for faster requests"]
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 font-medium">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="subtle-grid bg-slate-50 py-20">
        <div className="section-shell">
          <SectionIntro
            title="Services Built Around Student Life"
            description="Choose one service or combine support across printing, portal work, academic documents, career materials, AI productivity, training, and campus business design."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              return (
                <article
                  key={category.title}
                  className="gsap-reveal flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-800">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold leading-snug text-slate-950">{category.title}</h3>
                      {category.title === "Academic & Project Support" ? (
                        <p className="mt-2 text-sm font-medium leading-6 text-slate-600">
                          Ethical academic support for editing, formatting, guidance, research assistance, and
                          preparation.
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex-1">
                    <CheckList items={category.items} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="packages" className="bg-white py-20">
        <div className="section-shell">
          <SectionIntro
            title="Service Packages With Starting Prices"
            description="Pick a ready-made package for freshers, assignments, final-year defence, job search, student business branding, or department events."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.title}
                className={`gsap-reveal flex h-full flex-col rounded-lg border p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl ${
                  item.featured ? "border-green-500 bg-green-50 hover:border-green-600" : "border-slate-200 bg-white hover:border-blue-300"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-black leading-snug text-slate-950">{item.title}</h3>
                  {item.featured ? <Star className="size-5 shrink-0 fill-yellow-300 text-yellow-500" aria-hidden="true" /> : null}
                </div>
                <p className="mt-4 text-2xl font-black text-blue-900">{item.price}</p>
                <div className="flex-1">
                  <CheckList items={item.items} />
                </div>
                <a
                  href={whatsappLink(`Hello Samsilo Digital Hub, I am interested in the ${item.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="brand-dark-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold text-white transition"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Request Package
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="retainership" className="brand-premium-section py-20 text-white">
        <div className="section-shell">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">
              Join Our Student & Department Retainership Plans
            </h2>
            <p className="mt-4 text-base leading-7 text-blue-100 md:text-lg">
              Students, class reps, departments, lecturers, and small businesses can subscribe monthly or per semester
              for priority service, discounts, digital updates, and continuous support.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {retainershipPlans.map((plan) => (
                <article
                  key={plan.title}
                  className={`gsap-reveal flex h-full flex-col rounded-lg border p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${
                    plan.featured ? "border-green-300 bg-white text-slate-950 hover:border-green-400" : "border-white/15 bg-white/8 hover:bg-white/15 hover:border-white/25"
                  }`}
                >
                <h3 className="text-xl font-black">{plan.title}</h3>
                <p className={`mt-4 text-2xl font-black ${plan.featured ? "text-blue-900" : "text-yellow-300"}`}>
                  {plan.price}
                </p>
                <ul className="mt-5 flex-1 space-y-3 text-sm leading-6">
                  {plan.items.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <CheckCircle2
                        className={`mt-0.5 size-4 shrink-0 ${plan.featured ? "text-green-600" : "text-green-300"}`}
                        aria-hidden="true"
                      />
                      <span className={plan.featured ? "text-slate-700" : "text-blue-50"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <PrimaryButton href={whatsappLink("Hello Samsilo Digital Hub, I want to join a retainership plan.")}>
              <Rocket className="size-5" aria-hidden="true" />
              Join on WhatsApp
            </PrimaryButton>
          </div>
        </div>
      </section>

      <section className="subtle-grid bg-slate-50 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="gsap-reveal">
            <h2 className="text-balance text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              Refer Students & Earn Rewards
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Customers can refer friends and earn airtime, print credit, discounts, or cash rewards. Class reps with
              bulk referrals can earn special commissions while helping their classmates access reliable service.
            </p>
            <div className="mt-8">
              <PrimaryButton
                href={whatsappLink("Hello Samsilo Digital Hub, I want to join the referral program.")}
                variant="dark"
              >
                <Gift className="size-5" aria-hidden="true" />
                Join Referral Program on WhatsApp
              </PrimaryButton>
            </div>
          </div>
          <div className="gsap-reveal grid gap-4 sm:grid-cols-2">
            {[
              ["Refer 1 paying customer", "Get print credit or airtime"],
              ["Refer 3 customers", "Get service discount"],
              ["Refer 5 customers", "Get free CV support or higher discount"],
              ["Class rep bulk referrals", "Earn special commissions"]
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:scale-105 hover:border-green-300 hover:shadow-lg">
                <Handshake className="size-7 text-green-600" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="subtle-grid bg-slate-50 py-20">
        <div className="section-shell">
          <SectionIntro
            title="Why Choose Us"
            description="Samsilo Digital Hub is built for students who need speed, clarity, affordability, and modern digital support without losing professionalism."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((point) => {
              const Icon = point.icon;
              return (
                <article key={point.title} className="gsap-reveal rounded-lg border border-slate-200 bg-white p-5 transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-lg">
                  <Icon className="size-7 text-blue-800" aria-hidden="true" />
                  <h3 className="mt-4 text-base font-bold leading-snug text-slate-950">{point.title}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionIntro
            title="What Students Say"
            description="Realistic examples of the kind of experience Samsilo Digital Hub is built to deliver for students, class reps, freshers, and student entrepreneurs."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((item) => (
              <article key={item.role} className="gsap-reveal rounded-lg border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:scale-105 hover:border-yellow-300 hover:shadow-lg">
                <div className="flex gap-1 text-yellow-500" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="size-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                <h3 className="mt-5 text-sm font-black text-blue-900">{item.role}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="brand-dark-section py-20 text-white">
        <div className="section-shell">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">Campus Digital Tips Blog</h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Short, useful posts on project formatting Nigeria, student CV writing, school portal support, data
                analysis for students, AI training for students, and student business branding.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-bold transition hover:bg-white/10"
              >
                View Blog
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink("Hello Samsilo Digital Hub, I want updates from your blog and services.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-bold transition hover:bg-white/10"
              >
                Get Updates
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="gsap-reveal flex h-full flex-col rounded-lg border border-white/12 bg-white/8 p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-white/15 hover:border-white/25 hover:shadow-2xl">
                <span className="inline-flex rounded-lg bg-yellow-300 w-fit px-3 py-1 text-xs font-black text-slate-950">
                  {post.category}
                </span>
                <h3 className="mt-5 text-xl font-black leading-snug">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{post.summary}</p>
                <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-300">
                  Read guide
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="answers" className="bg-white py-20">
        <div className="section-shell">
          <SectionIntro
            title="Quick Answers For Campus Digital Services"
            description="Short, direct answers for students searching for printing, project formatting, data analysis, portal help, CV writing, AI training, and campus computer service in Nigeria."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {answerHubItems.map((item) => (
              <article key={item.question} className="gsap-reveal rounded-lg border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-blue-300 hover:shadow-lg">
                <h3 className="text-lg font-black leading-snug text-slate-950">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="subtle-grid bg-slate-50 py-20">
        <div className="section-shell">
          <SectionIntro
            title="Frequently Asked Questions"
            description="Quick answers for students, departments, lecturers, and campus businesses planning to request support."
          />
          <div className="mx-auto grid max-w-4xl gap-4">
            {faqItems.map((faq) => (
              <details key={faq.question} className="gsap-reveal group rounded-lg border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:scale-[1.01] hover:border-blue-300 hover:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-slate-950">
                  {faq.question}
                  <ChevronDown className="size-5 shrink-0 transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="mt-4 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="subtle-grid bg-slate-50 py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="gsap-reveal">
            <h2 className="text-balance text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              Request a Service
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Tell us what you need, or chat with us on WhatsApp now for urgent student printing service, campus
              computer service, final year project support, PowerPoint defence slides, CV support, portal work, and
              business design.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: business.phoneDisplay },
                { icon: MapPin, label: "Location", value: business.location },
                { icon: ShieldCheck, label: "Service Coverage", value: business.coverage }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-5 transition-all duration-300 hover:scale-105 hover:border-green-300 hover:shadow-lg">
                    <div className="flex gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-700">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-sm font-black uppercase text-slate-500">{item.label}</h3>
                        <p className="mt-1 text-base font-semibold leading-6 text-slate-950">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <PrimaryButton href={whatsappLink("Hello Samsilo Digital Hub, I want to request a service now.")} variant="dark">
                <MessageCircle className="size-5" aria-hidden="true" />
                Chat with us on WhatsApp now
              </PrimaryButton>
            </div>
          </div>

          <form onSubmit={handleFormSubmit(onSubmit)} className="gsap-reveal rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Full Name
                <input
                  {...register("fullName")}
                  className={`min-h-12 rounded-lg border px-4 text-base font-normal outline-none transition focus:ring-4 ${
                    errors.fullName
                      ? "border-red-500 focus:border-red-700 focus:ring-red-100"
                      : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
                  }`}
                  placeholder="Your full name"
                />
                {errors.fullName && (
                  <span className="text-xs font-semibold text-red-600">{errors.fullName.message}</span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Phone Number
                <input
                  {...register("phone")}
                  className={`min-h-12 rounded-lg border px-4 text-base font-normal outline-none transition focus:ring-4 ${
                    errors.phone
                      ? "border-red-500 focus:border-red-700 focus:ring-red-100"
                      : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
                  }`}
                  placeholder="080..."
                />
                {errors.phone && (
                  <span className="text-xs font-semibold text-red-600">{errors.phone.message}</span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                School/Campus
                <input
                  {...register("campus")}
                  className={`min-h-12 rounded-lg border px-4 text-base font-normal outline-none transition focus:ring-4 ${
                    errors.campus
                      ? "border-red-500 focus:border-red-700 focus:ring-red-100"
                      : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
                  }`}
                  placeholder="LASUSTECH, UNILAG, YABATECH..."
                />
                {errors.campus && (
                  <span className="text-xs font-semibold text-red-600">{errors.campus.message}</span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800">
                Department/Level
                <input
                  {...register("departmentLevel")}
                  className={`min-h-12 rounded-lg border px-4 text-base font-normal outline-none transition focus:ring-4 ${
                    errors.departmentLevel
                      ? "border-red-500 focus:border-red-700 focus:ring-red-100"
                      : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
                  }`}
                  placeholder="Department and level"
                />
                {errors.departmentLevel && (
                  <span className="text-xs font-semibold text-red-600">{errors.departmentLevel.message}</span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800 md:col-span-2">
                Service Needed
                <select
                  {...register("serviceNeeded")}
                  className={`min-h-12 rounded-lg border bg-white px-4 text-base font-normal outline-none transition focus:ring-4 ${
                    errors.serviceNeeded
                      ? "border-red-500 focus:border-red-700 focus:ring-red-100"
                      : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option>Printing, typing, scanning, binding</option>
                  <option>School portal or online registration</option>
                  <option>Project formatting or defence support</option>
                  <option>Data analysis for students</option>
                  <option>Student CV writing or LinkedIn support</option>
                  <option>AI training for students</option>
                  <option>Business or department branding</option>
                  <option>Retainership or referral program</option>
                </select>
                {errors.serviceNeeded && (
                  <span className="text-xs font-semibold text-red-600">{errors.serviceNeeded.message}</span>
                )}
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-800 md:col-span-2">
                Message
                <textarea
                  {...register("message")}
                  className={`min-h-36 rounded-lg border px-4 py-3 text-base font-normal outline-none transition focus:ring-4 ${
                    errors.message
                      ? "border-red-500 focus:border-red-700 focus:ring-red-100"
                      : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
                  }`}
                  placeholder="Describe the service you need, deadline, file details, or package."
                />
                {errors.message && (
                  <span className="text-xs font-semibold text-red-600">{errors.message.message}</span>
                )}
              </label>
            </div>

            {formStatus ? (
              <p
                className={`mt-5 rounded-lg px-4 py-3 text-sm font-semibold ${
                  formStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-yellow-50 text-yellow-900"
                }`}
              >
                {formStatus.message}
              </p>
            ) : null}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="size-4" aria-hidden="true" />
                {isSubmitting ? "Sending..." : "Send Request"}
              </button>
              <a
                href={formWhatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-green-600 px-5 py-3 text-sm font-bold text-green-700 transition hover:bg-green-50"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp Instead
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="brand-dark-section py-12 text-white">
        <div className="section-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="logo-mark flex size-11 items-center justify-center rounded-lg bg-white p-1.5">
                <Image
                  src="/samsilo-favicon-512.png"
                  alt="Samsilo Digital Hub logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <h2 className="text-lg font-black">{business.name}</h2>
                <p className="text-sm text-slate-300">Campus digital service Nigeria</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
              A modern digital support hub for students, lecturers, departments, class reps, student entrepreneurs, and
              small businesses across Nigerian campuses.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase text-slate-400">Quick Links</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-200">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-green-300">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase text-slate-400">Services</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-200">
              <span>Printing & typing</span>
              <span>Portal support</span>
              <span>Project formatting</span>
              <span>Data analysis</span>
              <span>CV & LinkedIn</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase text-slate-400">Contact</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-200">
              <a href={`tel:${business.phoneE164}`}>{business.phoneDisplay}</a>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="text-green-300">
                WhatsApp us
              </a>
              <span>Instagram coming soon</span>
              <span>Facebook coming soon</span>
              <span>LinkedIn coming soon</span>
            </div>
          </div>
        </div>
        <div className="section-shell mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>Copyright {new Date().getFullYear()} Samsilo Digital Hub. All rights reserved.</p>
        </div>
      </footer>

      <a
        href={whatsappLink("Hello Samsilo Digital Hub, I need help with a campus digital service.")}
        target="_blank"
        rel="noreferrer"
        className="brand-floating-button fixed bottom-4 right-4 z-50 inline-flex size-12 items-center justify-center rounded-lg text-white shadow-xl transition sm:bottom-5 sm:right-5 sm:size-14"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="size-7" aria-hidden="true" />
      </a>
    </main>
  );
}
