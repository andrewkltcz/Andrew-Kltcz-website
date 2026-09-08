import { createFileRoute } from "@tanstack/react-router";
import { Plane, ChevronsLeftRight, School } from "lucide-react";
import logo from "@/assets/ak-logo.png.asset.json";
import { TimelineNode, TimelineSelectionProvider } from "@/components/TimelineNode";
import { trunk, professional, creative, convergence } from "@/data/timeline";
import type { TimelineItem } from "@/data/timeline";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Endre Kulutácz — Two Paths. One Vision." },
      { property: "og:title", content: "Endre Kulutácz — Two Paths. One Vision." },
      {
        property: "og:description",
        content:
          "Project management, creativity and technology — explore two parallel careers on one interactive timeline.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const byId = (list: TimelineItem[], id: string) => list.find((i) => i.id === id)!;

const proSplit = professional.findIndex((i) => i.id === "aleido-return");
const creSplit = creative.findIndex((i) => i.id === "midnight");
const creEarlyEnd = creative.findIndex((i) => i.id === "hnd-guitar");

const proRecent = professional.slice(proSplit).slice().reverse();
const creRecent = creative.slice(creSplit).slice().reverse();
const proEarly = professional.slice(0, proSplit).slice().reverse();
const creEarly = creative.slice(creEarlyEnd, creSplit).slice().reverse();

const university = byId(trunk, "university");
const bottomTrunk: TimelineItem[] = [
  byId(trunk, "highschool"),
  byId(trunk, "primary"),
];

const earlyCreative = [
  byId(creative, "photo"),
  byId(creative, "piano"),
  byId(creative, "guitar"),
  byId(creative, "poetry"),
  byId(creative, "drawing"),
];

const socialLinks = [
  { label: "Facebook", shortLabel: "f", href: "https://www.facebook.com/andrewklenhard/" },
  { label: "LinkedIn", shortLabel: "in", href: "https://www.linkedin.com/in/endre-kulutacz-89164011a/" },
  { label: "Instagram", shortLabel: "ig", href: "https://www.instagram.com/andrew.unwritten" },
  { label: "YouTube Playlists", shortLabel: "yt", href: "https://www.youtube.com/@andewkltcz/playlists" },
  { label: "TikTok", shortLabel: "tk", href: "https://www.tiktok.com/@andrew.kltcz" },
];

function ColumnHeading({ label, side }: { label: string; side: "left" | "right" }) {
  return (
    <div className={`mb-6 flex items-center gap-3 ${side === "left" ? "sm:flex-row-reverse" : ""}`}>
      <span className="h-3 w-3 rotate-45 bg-accent" />
      <h2 className="font-display text-sm font-semibold tracking-[0.3em] text-foreground uppercase">
        {label}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function Index() {
  return (
    <div className="dark min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <img src={logo.url} alt="Endre Kulutácz logo" className="size-10 shrink-0 dark:invert" />
            <p className="font-display truncate text-lg leading-none font-bold tracking-[0.14em] uppercase">
              Endre Kulutácz
            </p>
          </div>
        </div>
      </header>

      <TimelineSelectionProvider>
        <main className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        {/* Hero */}
        <section className="relative py-16 text-center sm:py-24">
          <span className="mx-auto mb-6 block h-0 w-0 border-x-[14px] border-t-[20px] border-x-transparent border-t-accent" />
          <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-tight uppercase sm:text-6xl">
            Two paths.
            <span className="text-accent"> One vision.</span>
          </h1>
          <p className="font-display mt-4 text-[11px] tracking-[0.3em] text-muted-foreground uppercase sm:text-xs">
            Project Management | Creativity | Technology
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            For over a decade, my career has bridged technical execution, team leadership,
            documentation, and multimedia creation. I build connections between complex systems and
            human experience—navigating a professional path through technical writing, AI project
            management, and engineering workflows, running parallel to a life of music, visual arts,
            and media production.
          </p>
          <div className="mt-8 flex justify-center gap-2 sm:gap-3" aria-label="Social links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid size-10 place-items-center border border-border font-display text-xs font-bold tracking-wider text-muted-foreground transition-all hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[0_0_18px_-6px_var(--color-accent)]"
              >
                {social.shortLabel}
              </a>
            ))}
          </div>
        </section>

        {/* Dual columns — present back to late 2017 */}
        <section className="mt-4 grid gap-10 md:grid-cols-2 md:gap-8">
          <div className="relative md:border-r md:border-border md:pr-8">
            <ColumnHeading label="Professional Path" side="left" />
            <div className="space-y-5">
              {proRecent.map((item) => (
                <TimelineNode key={item.id} item={item} align="left" />
              ))}
            </div>
          </div>
          <div className="relative md:pl-8">
            <ColumnHeading label="Creative Path" side="right" />
            <div className="space-y-5">
              {creRecent.map((item) => (
                <TimelineNode key={item.id} item={item} align="right" />
              ))}
            </div>
          </div>
        </section>

        {/* Convergence bridge — 2017 Wales */}
        <section className="relative mt-12">
          <div className="clip-corner border-2 border-accent bg-accent/10 p-6 shadow-[0_0_60px_-20px_var(--color-accent)] sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center bg-accent text-accent-foreground">
                <Plane className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="font-display text-xs tracking-[0.28em] text-accent">
                  {convergence.date}
                </p>
                <h2 className="font-display text-xl leading-tight font-bold uppercase sm:text-2xl">
                  {convergence.title}
                </h2>
              </div>
              <span className="font-display ml-auto flex items-center gap-2 text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
                <ChevronsLeftRight className="size-4 text-accent" />
                Both paths paused
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {convergence.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {convergence.tags.map((t) => (
                <span
                  key={t}
                  className="border border-accent/60 px-2 py-0.5 text-[11px] tracking-wide text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Dual paths — 2013 back to 2012 */}
        <section className="mt-14 grid gap-10 md:grid-cols-2 md:gap-8">
          <div className="relative md:border-r md:border-border md:pr-8">
            <div className="space-y-5">
              {proEarly.map((item) => (
                <TimelineNode key={item.id} item={item} align="left" />
              ))}
            </div>
          </div>
          <div className="relative md:pl-8">
            <div className="space-y-5">
              {creEarly.map((item) => (
                <TimelineNode key={item.id} item={item} align="right" />
              ))}
            </div>
          </div>
        </section>

        {/* Common university node */}
        <section className="relative mt-10">
          <svg
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="h-16 w-full text-accent"
            aria-hidden="true"
          >
            <path
              d="M12 0 C12 26, 50 14, 50 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M88 0 C88 26, 50 14, 50 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="clip-corner mx-auto max-w-2xl border-2 border-accent bg-accent/10 p-6 text-center shadow-[0_0_60px_-20px_var(--color-accent)]">
            <span className="mx-auto grid size-10 place-items-center bg-accent text-accent-foreground">
              <School className="size-5" />
            </span>
            <p className="font-display mt-3 text-xs tracking-[0.28em] text-accent">
              {university.date}
            </p>
            <h2 className="font-display mt-1 text-xl leading-tight font-bold uppercase sm:text-2xl">
              Pécsi Tudományegyetem — Pollack Mihály Műszaki és Informatikai Kar (Multimedia Studies)
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {university.description}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-1.5">
              {university.tags.map((t) => (
                <span
                  key={t}
                  className="border border-accent/60 px-2 py-0.5 text-[11px] tracking-wide text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Parallel paths — 1990 to 2010 */}
        <section className="relative mt-10 grid gap-10 pb-6 md:grid-cols-2 md:gap-8">
          <div className="relative md:border-r md:border-border md:pr-8">
            <div className="space-y-5">
            {bottomTrunk.map((item) => (
              <TimelineNode key={item.id} item={item} align="left" />
            ))}
            </div>
          </div>
          <div className="relative md:pl-8">
            <div className="space-y-5">
              {earlyCreative.map((item) => (
                <TimelineNode key={item.id} item={item} align="right" />
              ))}
            </div>
          </div>
        </section>

        <section className="relative mt-4 pb-6">
          <div className="mx-auto max-w-md">
            <TimelineNode item={byId(trunk, "born")} />
          </div>
        </section>
        </main>
      </TimelineSelectionProvider>

      <footer className="border-t border-border py-8 text-center">
        <p className="font-display text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
          Endre Kulutácz — Professional Path | Creative Path
        </p>
      </footer>
    </div>
  );
}
