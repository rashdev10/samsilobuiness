"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, MessageCircle, Moon, Phone, Sun, X } from "lucide-react";
import { mainNavItems } from "@/lib/navigation";
import { business, whatsappLink } from "@/lib/site";

type Theme = "light" | "dark";
const themeStorageKey = "samsilo-theme";

function getStoredTheme(): Theme {
  if (typeof document !== "undefined" && document.documentElement.dataset.theme === "dark") {
    return "dark";
  }

  return "light";
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

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [themeReady, setThemeReady] = useState(false);

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

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }

  return (
    <header className="brand-header sticky inset-x-0 top-0 z-50 border-b border-white/[0.15] text-white backdrop-blur-xl">
      <div className="section-shell flex min-h-[74px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Samsilo Digital Hub home">
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
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-200 lg:flex" aria-label="Main navigation">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-underline transition hover:text-green-300 ${isActive ? "text-cyan-200" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a href={`tel:${business.phoneE164}`} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Phone className="size-4 text-green-300" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="brand-primary-button inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold text-white transition"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
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
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-3 transition hover:bg-white/10 ${isActive ? "bg-white/10 text-cyan-200" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
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
  );
}
