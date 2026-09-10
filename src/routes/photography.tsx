import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { MainLayout } from "@/components/MainLayout";

const photoAssets = import.meta.glob("./../assets/photography/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const photos = Object.entries(photoAssets).map(([path, src]) => ({
  src,
  alt:
    path
      .split("/")
      .pop()
      ?.replace(/\.[^.]+$/, "")
      .replace(/[-_]/g, " ") ?? "Photography image",
}));

function shufflePhotos() {
  return [...photos].sort(() => Math.random() - 0.5).slice(0, 30);
}

export const Route = createFileRoute("/photography")({
  head: () => ({ meta: [{ title: "Andrew Kltcz — Photography" }] }),
  component: PhotographyPage,
});

function PhotographyPage() {
  const [shuffledPhotos, setShuffledPhotos] = useState(shufflePhotos);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    setShuffledPhotos(shufflePhotos());
    const refreshGallery = window.setInterval(() => {
      setShuffledPhotos(shufflePhotos());
      setSelectedIndex(null);
    }, 60_000);

    return () => window.clearInterval(refreshGallery);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") {
        setSelectedIndex((index) =>
          index === null ? null : (index - 1 + shuffledPhotos.length) % shuffledPhotos.length,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedIndex((index) => (index === null ? null : (index + 1) % shuffledPhotos.length));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, shuffledPhotos.length]);

  return (
    <MainLayout>
      <main className="mx-auto min-h-[calc(100vh-210px)] w-full max-w-[1400px] px-4 py-12 sm:px-8 sm:py-16 lg:px-14">
        <header className="mb-8 border-b border-white/10 pb-8">
          <p className="mb-3 font-display text-xs tracking-[0.3em] text-[#FCD12A] uppercase">
            Creative Work
          </p>
          <h1 className="font-display text-5xl font-bold tracking-tight text-[#FCD12A] uppercase sm:text-7xl">
            Photography
          </h1>
          <p className="mt-5 max-w-2xl text-justify text-[15px] leading-[1.7] text-[#E0E0E0]">
            A path through capturing light, quiet moments, and the stories hidden in ordinary
            frames.
          </p>
        </header>
        <section className="w-full text-justify text-[15px] leading-[1.7] text-[#E0E0E0] [&>p]:mb-6 [&>p:last-child]:mb-0">
          <p>
            I received my first compact Canon digital camera around 2006, and I immediately fell in
            love. That single moment marked the start of an enormous, ever-expanding photo archive.
            I brought that camera everywhere. Family trips, aimless city walks, and late nights
            hanging out in friends&apos; basements. I captured thousands of photos, along with
            plenty of moody self-portraits typical of a sad emo kid back then (thankfully, those are
            safely buried and no longer available online).
          </p>
          <p>
            As my university years drew to a close, panic set in. I had no idea what direction to
            take. The only things I truly cared about were music and art, which didn&apos;t feel
            like obvious paths to a stable career. To bridge the gap, I enrolled at the University
            of Pécs to study multimedia. Over the following years, I honed my skills in digital
            photo editing, visual composition, and creative direction.
          </p>
          <p>
            Although my professional career eventually led me down technical project management and
            technical writing paths, my underlying passion for photography never died. In 2019,
            while on a trip, something suddenly clicked again. I tumbled headfirst down an endless
            rabbit hole of camera bodies, lenses, focal lengths, framing techniques, ISO settings,
            and late-night Lightroom sessions.
          </p>
          <p>
            While I occasionally take on events, bands, and commercial projects, my deepest passion
            lies in nature and street photography, capturing wide, quiet landscapes alongside the
            moody, dark corners of urban environments.
          </p>
        </section>
        <section className="mt-16" aria-label="Photography gallery">
          <div className="mb-6 flex flex-col items-start gap-3 border-b border-[#FCD12A]/40 pb-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-2xl font-semibold tracking-wide text-[#FCD12A] uppercase sm:text-3xl">
              Selected Frames
            </h2>
            <div className="flex items-center gap-4">
              <span className="font-display text-[10px] tracking-[0.2em] text-white/45 uppercase">
                {shuffledPhotos.length} images
              </span>
              <a
                href="https://www.instagram.com/andrewkltcz/"
                target="_blank"
                rel="noreferrer"
                className="border border-[#FCD12A] px-4 py-2 font-display text-[10px] font-semibold tracking-[0.14em] text-[#FCD12A] uppercase transition-colors hover:bg-[#FCD12A] hover:text-[#2B2B2B]"
              >
                Follow me on Instagram for more
              </a>
            </div>
          </div>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {shuffledPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group mb-4 block w-full break-inside-avoid cursor-pointer overflow-hidden border border-white/10 bg-[#171717] text-left transition-transform duration-300 hover:scale-[1.02]"
                aria-label={`Enlarge ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </section>
      </main>
      {selectedIndex !== null && shuffledPhotos[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded photography image"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-10 grid size-11 place-items-center border border-white/20 text-white transition-colors hover:border-[#FCD12A] hover:text-[#FCD12A]"
            aria-label="Close image"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedIndex((index) =>
                index === null ? null : (index - 1 + shuffledPhotos.length) % shuffledPhotos.length,
              );
            }}
            className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center border border-white/20 text-white transition-colors hover:border-[#FCD12A] hover:text-[#FCD12A] sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft className="size-6" />
          </button>
          <img
            src={shuffledPhotos[selectedIndex].src}
            alt={shuffledPhotos[selectedIndex].alt}
            className="max-h-[90vh] max-w-[calc(100vw-7rem)] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedIndex((index) =>
                index === null ? null : (index + 1) % shuffledPhotos.length,
              );
            }}
            className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center border border-white/20 text-white transition-colors hover:border-[#FCD12A] hover:text-[#FCD12A] sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      )}
    </MainLayout>
  );
}
