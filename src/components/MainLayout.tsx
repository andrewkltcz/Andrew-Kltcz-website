import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import logo from "@/assets/AK_logo_White.png";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dark min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#2B2B2B]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-4 sm:px-6">
          <div className="flex flex-col items-center gap-2">
            <img src={logo} alt="AK monogram logo" className="size-12 object-contain" />
            <p className="font-display text-center text-lg leading-none font-bold tracking-[0.14em] uppercase">
              Endre Kulutácz
            </p>
          </div>
          <nav className="mt-5" aria-label="Primary navigation">
            <Link
              to="/cv"
              activeOptions={{ exact: true }}
              className="border-b-2 border-accent px-3 pb-2 font-display text-xs font-semibold tracking-[0.24em] text-accent uppercase transition-opacity hover:opacity-80"
              activeProps={{ "aria-current": "page" }}
            >
              CV
            </Link>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-border py-8 text-center">
        <p className="font-display text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
          Endre Kulutácz — Professional Path | Creative Path
        </p>
      </footer>
    </div>
  );
}