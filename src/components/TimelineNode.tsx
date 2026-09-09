import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import * as Icons from "lucide-react";
import type { TimelineItem } from "@/data/timeline";
import { cn } from "@/lib/utils";

function NodeIcon({ name, className }: { name: string; className?: string }) {
  const Comp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name] ?? Icons.Circle;
  return <Comp className={className} strokeWidth={2.2} />;
}

type Props = {
  item: TimelineItem;
  align?: "left" | "right" | "center";
};

type TimelineSelection = {
  openId: string | null;
  setOpenId: Dispatch<SetStateAction<string | null>>;
};

const TimelineSelectionContext = createContext<TimelineSelection | null>(null);

export function TimelineSelectionProvider({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <TimelineSelectionContext.Provider value={{ openId, setOpenId }}>
      {children}
    </TimelineSelectionContext.Provider>
  );
}

export function TimelineNode({ item, align = "center" }: Props) {
  const selection = useContext(TimelineSelectionContext);
  const [localOpen, setLocalOpen] = useState(false);
  const open = selection ? selection.openId === item.id : localOpen;
  const titleParts = item.title.split(" — ");
  const entity = item.org ?? (titleParts.length > 1 ? titleParts[0] : "Personal milestone");
  const primaryTitle = item.org ? item.title : titleParts.slice(1).join(" — ") || item.title;
  const isRoot = item.id === "born";
  const toggleOpen = () => {
    if (selection) {
      selection.setOpenId((current) => (current === item.id ? null : item.id));
      return;
    }
    setLocalOpen((current) => !current);
  };

  return (
    <div className="group relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={toggleOpen}
        className={cn(
          "clip-corner relative w-full border border-border bg-card p-4 text-left transition-all duration-300",
          "hover:border-accent hover:shadow-[0_0_0_1px_var(--color-accent),0_12px_30px_-18px_var(--color-accent)]",
          open && "border-accent",
          align === "left" && "sm:text-right",
        )}
      >
        <div
          className={cn(
            "flex items-center gap-3",
            align === "left" && "sm:flex-row-reverse sm:text-right",
          )}
        >
          <span className="grid size-9 shrink-0 place-items-center bg-accent text-accent-foreground">
            <NodeIcon name={item.icon} className="size-4.5" />
          </span>
          <div className="min-w-0 flex-1 space-y-0.5">
            <p className="font-display truncate text-xs leading-4 tracking-[0.22em] text-accent">
              {item.date}
            </p>
            <h3 className="font-display truncate text-base leading-5 font-semibold text-foreground uppercase">
              {primaryTitle}
            </h3>
            {!isRoot && (item.org || titleParts.length > 1) && (
              <p className="truncate text-xs leading-4 text-muted-foreground">{entity}</p>
            )}
            {!isRoot && item.tags.length > 0 && (
              <p className="truncate text-[11px] leading-4 tracking-wide text-accent" title={item.tags.join(" ")}>
                {item.tags.join(" ")}
              </p>
            )}
          </div>
        </div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-out",
          open ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="clip-corner border border-accent/40 bg-popover p-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.overview ?? item.description}
            </p>
            {item.highlights && item.highlights.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 bg-accent" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
            {item.tools && item.tools.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2" aria-label="Tools and skills">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-accent/50 px-2 py-1 text-[10px] font-semibold tracking-[0.08em] text-accent uppercase"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
            {item.links && item.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-accent px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-accent-foreground uppercase transition-transform hover:-translate-y-0.5"
                  >
                    <Icons.ArrowUpRight className="size-3.5" />
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
