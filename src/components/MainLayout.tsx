import { Link } from "@tanstack/react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa6";
import type { ReactNode } from "react";

import logo from "@/assets/AK_logo_White.png";

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/andrewklenhard/" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/endre-kulutacz-89164011/" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/andrew.unwritten" },
  { label: "YouTube", icon: FaYoutube, href: "https://www.youtube.com/@andewkltcz/playlists" },
  { label: "TikTok", icon: FaTiktok, href: "https://www.tiktok.com/@andrew.kltcz" },
];

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dark min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#2B2B2B]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-4 sm:px-6">
          <div className="flex flex-col items-center gap-2">
            <img src={logo} alt="AK monogram logo" className="size-12 object-contain" />
          </div>
          <nav className="mt-5 flex items-center gap-5" aria-label="Primary navigation">
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className="border-b-2 border-transparent px-3 pb-2 font-display text-xs font-semibold tracking-[0.24em] text-accent uppercase transition-opacity hover:border-accent hover:opacity-80"
              activeProps={{ "aria-current": "page" }}
            >
              Home
            </Link>
            <Link
              to="/cv"
              activeOptions={{ exact: true }}
              className="border-b-2 border-transparent px-3 pb-2 font-display text-xs font-semibold tracking-[0.24em] text-accent uppercase transition-opacity hover:border-accent hover:opacity-80"
              activeProps={{ "aria-current": "page" }}
            >
              CV
            </Link>
            <Link
              to="/photography"
              activeOptions={{ exact: true }}
              className="border-b-2 border-transparent px-3 pb-2 font-display text-xs font-semibold tracking-[0.24em] text-accent uppercase transition-opacity hover:border-accent hover:opacity-80"
              activeProps={{ "aria-current": "page" }}
            >
              Photography
            </Link>
            <Link
              to="/videography"
              activeOptions={{ exact: true }}
              className="border-b-2 border-transparent px-3 pb-2 font-display text-xs font-semibold tracking-[0.24em] text-accent uppercase transition-opacity hover:border-accent hover:opacity-80"
              activeProps={{ "aria-current": "page" }}
            >
              Videography
            </Link>
            <Link
              to="/art"
              activeOptions={{ exact: true }}
              className="border-b-2 border-transparent px-3 pb-2 font-display text-xs font-semibold tracking-[0.24em] text-accent uppercase transition-opacity hover:border-accent hover:opacity-80"
              activeProps={{ "aria-current": "page" }}
            >
              Art
            </Link>
            <Link
              to="/gaijin-kitsune"
              activeOptions={{ exact: true }}
              className="border-b-2 border-transparent px-3 pb-2 font-display text-xs font-semibold tracking-[0.24em] text-accent uppercase transition-opacity hover:border-accent hover:opacity-80"
              activeProps={{ "aria-current": "page" }}
            >
              Gaijin Kitsune
            </Link>
            <Link
              to="/music"
              activeOptions={{ exact: true }}
              className="border-b-2 border-transparent px-3 pb-2 font-display text-xs font-semibold tracking-[0.24em] text-accent uppercase transition-opacity hover:border-accent hover:opacity-80"
              activeProps={{ "aria-current": "page" }}
            >
              Music
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-border py-8 text-center">
        <div className="flex justify-center gap-4" aria-label="Social links">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              <social.icon className="size-4" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          A personal space for project work, music, and making things.
        </p>
        <p className="mt-2 font-display text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
          Built in 2026 by Andrew Kltcz
        </p>
      </footer>
    </div>
  );
}