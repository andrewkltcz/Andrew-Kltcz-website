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
          <div className="min-w-0">
            <p className="font-display text-xs tracking-[0.22em] text-accent">{item.date}</p>
            <h3 className="font-display text-base leading-tight font-semibold text-foreground uppercase">
              {item.title}
            </h3>
            {item.org && <p className="text-xs text-muted-foreground">{item.org}</p>}
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
            <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="border border-accent/50 px-2 py-0.5 text-[11px] tracking-wide text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            {item.links && item.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
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
