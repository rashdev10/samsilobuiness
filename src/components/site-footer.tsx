import Image from "next/image";
import Link from "next/link";
import { mainNavItems } from "@/lib/navigation";
import { business, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
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
          <p className="mt-5 max-w-sm text-sm leading-6 font-medium text-slate-300">
            A modern digital support hub for students, lecturers, departments, class reps, student entrepreneurs, and
            small businesses across Nigerian campuses.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-slate-400">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-sm text-slate-200">
            {mainNavItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-green-300">
                {item.label}
              </Link>
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
  );
}
