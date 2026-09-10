import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { MainLayout } from "@/components/MainLayout";
import ak11Logo from "@/assets/ak11/logo_w.png";

const illustrationAssets = import.meta.glob("./../assets/ak11/arts/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const logoAssets = import.meta.glob("./../assets/ak11/logo/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

function assetLabel(path: string) {
  return (
    path
      .split("/")
      .pop()
      ?.replace(/\.[^.]+$/, "")
      .replace(/[-_]/g, " ") ?? "AK11 artwork"
  );
}

function shuffleAssets(assets: Record<string, string>) {
  return Object.entries(assets).sort(() => Math.random() - 0.5);
}

export const Route = createFileRoute("/art")({
  head: () => ({ meta: [{ title: "Andrew Kltcz — Art" }] }),
  component: ArtPage,
});

function ArtPage() {
  const [galleries, setGalleries] = useState([
    { title: "Illustrations", assets: Object.entries(illustrationAssets) },
    { title: "Logos", assets: Object.entries(logoAssets) },
  ]);

  useEffect(() => {
    setGalleries([
      { title: "Illustrations", assets: shuffleAssets(illustrationAssets) },
      { title: "Logos", assets: shuffleAssets(logoAssets) },
    ]);
  }, []);

  return (
    <MainLayout>
      <main className="mx-auto min-h-[calc(100vh-210px)] w-full max-w-[1400px] px-4 py-12 sm:px-8 sm:py-16 lg:px-14">
        <header className="mb-6 pb-4">
          <p className="mb-3 font-display text-xs tracking-[0.3em] text-[#FCD12A] uppercase">
            Creative Work
          </p>
          <h1 className="font-display text-5xl font-bold tracking-tight text-[#FCD12A] uppercase sm:text-7xl">
            Art
          </h1>
          <p className="mt-5 max-w-2xl text-justify text-[15px] leading-[1.7] text-[#E0E0E0]">
            AK11
          </p>
        </header>

        <section className="mb-8 border-y border-white/10 py-4" aria-label="Art tools">
          <p className="mb-2 text-center font-display text-[10px] tracking-[0.3em] text-white/45 uppercase">
            Tools of the craft
          </p>
          <div className="grid grid-cols-2 items-center gap-y-6 text-center sm:grid-cols-4">
            <span className="font-display text-sm font-semibold tracking-[0.08em] text-[#E0E0E0]">
              PROCREATE
            </span>
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobeillustrator.svg"
              alt="Adobe Illustrator"
              loading="lazy"
              width="32"
              height="32"
              className="mx-auto size-8 object-contain brightness-0 invert"
            />
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/blender.svg"
              alt="Blender"
              loading="lazy"
              width="32"
              height="32"
              className="mx-auto size-8 object-contain brightness-0 invert"
            />
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobephotoshop.svg"
              alt="Adobe Photoshop"
              loading="lazy"
              width="32"
              height="32"
              className="mx-auto size-8 object-contain brightness-0 invert"
            />
          </div>
        </section>
        <section className="w-full text-justify text-[15px] leading-[1.7] text-[#E0E0E0] [&>p]:mb-6 [&>p:last-child]:mb-0">

          <p>
            I don&apos;t really consider myself a traditional artist, graphic designer, or
            professional illustrator. For me, drawing is simply a relaxing hobby and a creative
            outlet. Every now and then, an idea or a sudden epiphany strikes, and I just have to
            sketch it out. I&apos;ll sit down, refine the details, and occasionally—to my own
            pleasant surprise—it turns out nicely.
          </p>
          <p>
            Over the past few years, I&apos;ve ended up creating official merch designs and album
            covers for musical projects. It turned out that people actually liked them, which was a
            great bonus, but at its core, it remains pure therapy for me: sometimes I just see
            something in my head or in the world, and I feel compelled to draw it out. That&apos;s
            really all there is to it.
          </p>
          <h2 className="mb-4 mt-8 border-b border-[#FCD12A]/40 pb-2 text-xl font-semibold text-[#FCD12A]">
            Why AK11?
          </h2>
          <p>
            People often ask about the name. My artist name is{" "}
            <strong className="text-[#FCD12A]">A</strong>ndrew{" "}
            <strong className="text-[#FCD12A]">K</strong>ltcz, and I was born in November (
            <strong className="text-[#FCD12A]">11</strong>th month). Boom—myth solved.
          </p>
          <div className="pt-2">
            <a
              href="https://www.instagram.com/ak11_arts/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex border border-[#FCD12A] px-5 py-3 font-display text-xs font-semibold tracking-[0.14em] text-[#FCD12A] uppercase transition-colors hover:bg-[#FCD12A] hover:text-[#2B2B2B]"
            >
              Follow AK11 on Instagram
            </a>
          </div>
        </section>
        <div className="mt-16 space-y-12">
          {galleries.map((gallery) => (
            <section key={gallery.title} aria-label={`${gallery.title} gallery`}>
              <h2 className="mb-6 border-b border-[#FCD12A]/40 pb-3 font-display text-2xl font-semibold tracking-wide text-[#FCD12A] uppercase sm:text-3xl">
                {gallery.title}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {gallery.assets.map(([path, src]) => (
                  <div
                    key={path}
                    className="group aspect-square overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <img
                      src={src}
                      alt={assetLabel(path)}
                      loading="lazy"
                      decoding="async"
                      className="block size-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </MainLayout>
  );
}
