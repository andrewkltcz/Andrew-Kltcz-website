import { createFileRoute } from "@tanstack/react-router";
import { Plane } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa6";
import logo from "@/assets/AK_logo_White.png";
import cvFile from "@/assets/CV_ENG_Kulutacz_Endre.pdf";
import coverLetterFile from "@/assets/Cover_Letter_ENG_Kulutacz_Endre.pdf";
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

const university = byId(trunk, "university");

type TimelineRow = {
  label: string;
  professional?: TimelineItem[];
  creative?: TimelineItem[];
};

const item = (list: TimelineItem[], id: string) => byId(list, id);

const upperRows: TimelineRow[] = [
  { label: "2026", professional: [item(professional, "sigma")], creative: [item(creative, "primal")] },
  { label: "2023 – 2025", professional: [item(professional, "mondi-presales")], creative: [item(creative, "odyssey")] },
  { label: "2022", creative: [item(creative, "soulharbour"), item(creative, "ak11")] },
  { label: "2020", professional: [item(professional, "mondi-lead"), item(professional, "mondi-tw")], creative: [item(creative, "youtube")] },
  { label: "2018", creative: [item(creative, "midnight")] },
  { label: "2016", professional: [item(professional, "aleido-coord"), item(professional, "ohb-project")] },
  { label: "2015", professional: [item(professional, "aleido-tw"), item(professional, "morgan-shift"), item(professional, "morgan-rainbow"), item(professional, "morgan-cnc")], creative: [item(creative, "silent-ep"), item(creative, "silent-homes")] },
  { label: "2013 – 2014", professional: [item(professional, "cnc-course")], creative: [item(creative, "nexus"), item(creative, "hnd-album"), item(creative, "infinity")] },
  { label: "2012", creative: [item(creative, "hnd-guitar")] },
];

const lowerRows: TimelineRow[] = [
  { label: "2010", professional: [item(trunk, "highschool")] },
  { label: "2009", creative: [item(creative, "photo")] },
  { label: "2008", creative: [item(creative, "piano")] },
  { label: "2008", creative: [item(creative, "web-design")] },
  { label: "2007", creative: [item(creative, "guitar")] },
  { label: "2005", professional: [item(trunk, "primary")] },
  { label: "2004", creative: [item(creative, "poetry")] },
  { label: "1998", creative: [item(creative, "drawing")] },
];

const upperRecentRows = upperRows.slice(0, 5);
const upperEarlyRows = upperRows.slice(5);
const rejoinedAleidoRow: TimelineRow = { label: "2017", professional: [item(professional, "aleido-return")] };
const thyKeeperRow: TimelineRow = { label: "2017", creative: [item(creative, "thy-keeper")] };

const socialLinks = [
  { label: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/andrewklenhard/" },
  { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/endre-kulutacz-89164011a/" },
  { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/andrew.unwritten" },
  { label: "YouTube Playlists", icon: FaYoutube, href: "https://www.youtube.com/@andewkltcz/playlists" },
  { label: "TikTok", icon: FaTiktok, href: "https://www.tiktok.com/@andrew.kltcz" },
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

function TimelineMatrix({ rows }: { rows: TimelineRow[] }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-accent/45" />
      <div className="relative">
        {rows.map((row, rowIndex) => (
          <div
            key={`${row.label}-${rowIndex}`}
            className="grid grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] items-center gap-x-3 py-8 sm:gap-x-6"
          >
            <div className="relative space-y-5 after:absolute after:top-1/2 after:-right-3 after:hidden after:h-px after:w-3 after:bg-accent/45 sm:after:block md:-mr-0 sm:after:-right-6 sm:after:w-6">
              {row.professional?.map((timelineItem) => (
                <TimelineNode key={timelineItem.id} item={timelineItem} align="left" />
              ))}
            </div>
            <div className="relative z-10 flex h-full min-h-12 flex-col items-center justify-center gap-2">
              <span className="size-3 rounded-full border-2 border-accent bg-background shadow-[0_0_0_4px_var(--color-background),0_0_18px_var(--color-accent)]" />
              <span className="font-display text-center text-[10px] tracking-[0.18em] text-accent uppercase">
                {row.label.match(/\d{4}/)?.[0] ?? row.label.slice(0, 4)}
              </span>
            </div>
            <div className="relative space-y-5 before:absolute before:top-1/2 before:-left-3 before:hidden before:h-px before:w-3 before:bg-accent/45 sm:before:block md:-ml-0 sm:before:-left-6 sm:before:w-6">
              {row.creative?.map((timelineItem) => (
                <TimelineNode key={timelineItem.id} item={timelineItem} align="right" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="dark min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="AK monogram logo"
              className="size-10 shrink-0 object-contain"
            />
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
          <p className="mx-auto mt-5 max-w-2xl text-justify text-sm leading-relaxed text-muted-foreground">
            For over a decade, my career has bridged technical execution, team leadership,
            documentation, and multimedia creation. I build connections between complex systems and
            human experience, navigating a professional path through technical writing, AI project
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
                className="group grid size-10 place-items-center border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[0_0_18px_-6px_var(--color-accent)]"
              >
                <social.icon className="size-4.5 transition-transform group-hover:scale-110" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={cvFile}
              download="CV_ENG_Kulutacz_Endre.pdf"
              className="clip-corner inline-flex min-w-48 items-center justify-center bg-accent px-5 py-3 text-xs font-semibold tracking-[0.14em] text-accent-foreground uppercase transition-transform hover:-translate-y-0.5"
            >
              Download CV
            </a>
            <a
              href={coverLetterFile}
              download="Cover_Letter_ENG_Kulutacz_Endre.pdf"
              className="clip-corner inline-flex min-w-48 items-center justify-center bg-accent px-5 py-3 text-xs font-semibold tracking-[0.14em] text-accent-foreground uppercase transition-transform hover:-translate-y-0.5"
            >
              Download Cover Letter
            </a>
          </div>
        </section>

        {/* Unified chronological matrix — present to 2018 */}
        <section className="mt-4">
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <ColumnHeading label="Professional Path" side="left" />
            <ColumnHeading label="Creative Path" side="right" />
          </div>
          <TimelineMatrix rows={upperRecentRows} />
          <TimelineMatrix rows={[rejoinedAleidoRow]} />
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
                <p className="text-xs text-muted-foreground">{convergence.org}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Unified chronological matrix — 2017 to 2013 */}
        <section className="mt-6">
          <TimelineMatrix rows={[thyKeeperRow]} />
          <TimelineMatrix rows={upperEarlyRows} />
        </section>

        {/* Common university node */}
        <section className="relative mt-10">
          <div className="relative mx-auto max-w-2xl before:absolute before:-top-10 before:bottom-1/2 before:left-1/2 before:w-px before:-translate-x-1/2 before:bg-accent/45">
            <div className="relative z-10">
              <TimelineNode item={university} />
            </div>
          </div>
        </section>

        {/* Unified chronological matrix — 2010 to 1998 */}
        <section className="relative mt-10 pb-6">
          <TimelineMatrix rows={lowerRows} />
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
