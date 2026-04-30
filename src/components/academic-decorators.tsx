"use client";

import {
  BadgeCheck,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  Gift,
  GraduationCap,
  Handshake,
  Laptop,
  MapPin,
  MessageCircle,
  PenLine,
  Phone,
  Presentation,
  Printer,
  Repeat,
  School,
  Search,
  Sparkles,
  Star,
  Users,
  WalletCards
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export type AcademicDecoratorVariant =
  | "home"
  | "about"
  | "services"
  | "packages"
  | "retainership"
  | "contact"
  | "blog"
  | "article";

const decoratorIcons: Record<AcademicDecoratorVariant, LucideIcon[]> = {
  home: [School, Laptop, ClipboardList, Sparkles],
  about: [GraduationCap, Users, MapPin, Handshake],
  services: [Printer, FileText, Bot, School],
  packages: [WalletCards, Presentation, Star, BriefcaseBusiness],
  retainership: [Users, Repeat, Gift, BadgeCheck],
  contact: [MessageCircle, MapPin, Clock, Phone],
  blog: [BookOpen, Search, PenLine, Sparkles],
  article: [FileText, CheckCircle2, BookOpen, PenLine]
};

export function AcademicDecorators({ variant = "home" }: { variant?: AcademicDecoratorVariant }) {
  const shouldReduceMotion = useReducedMotion();
  const fadeSequence = shouldReduceMotion ? [0.72, 0.95, 0.72] : [0.18, 1, 0.18];

  return (
    <div className={`academic-decorators academic-decorators-${variant}`} aria-hidden="true">
      {decoratorIcons[variant].map((Icon, index) => (
        <motion.span
          key={`${variant}-${index}`}
          className={`academic-decorator academic-decorator-${index + 1}`}
          initial={{ opacity: fadeSequence[0] }}
          animate={{ opacity: fadeSequence }}
          transition={{
            duration: 2.4,
            delay: index * 0.45,
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.5, 1],
            ease: "easeInOut"
          }}
          style={{ willChange: "opacity" }}
        >
          <Icon />
        </motion.span>
      ))}
    </div>
  );
}
