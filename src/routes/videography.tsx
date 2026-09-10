import { createFileRoute } from "@tanstack/react-router";

import { MainLayout } from "@/components/MainLayout";

type VideoItem = { id: string; title: string; playlist?: string };

const videoSections: {
  title: string;
  playlist: string;
  videos: VideoItem[];
}[] = [
  {
    title: "Vlog",
    playlist: "https://www.youtube.com/playlist?list=PLCOZ_7hWfDck",
    videos: [{ id: "OzSfS7sJesQ", title: "I Lost My Job", playlist: "PLCOZ_7hWfDck" }],
  },
  {
    title: "Music Videos",
    playlist: "https://www.youtube.com/playlist?list=PL1FKX102w7BLFYSWFwzajSZk2HyO9VcVM",
    videos: [
      {
        id: "AVTM5XLrsX0",
        title: "Silence of Solitude - Descent - Guitar Playthrough Video",
        playlist: "PL1FKX102w7BLFYSWFwzajSZk2HyO9VcVM",
      },
      {
        id: "X2XmHI4YXso",
        title: "Soulharbour - Split - Official Music Video",
        playlist: "PL1FKX102w7BLFYSWFwzajSZk2HyO9VcVM",
      },
      { id: "9fakj_3iT3A", title: "Soulharbour - Tempest - Official Music Video" },
    ],
  },
  {
    title: "Shorts",
    playlist: "https://www.youtube.com/playlist?list=PL1FKX102w7BJKlH1raMpoVs1g5ZQZkjLd",
    videos: [
      { id: "KzI0Lm4zmqo", title: "Fushimi Inari Shrine - Kyoto's Most Mythical Place" },
      { id: "4IhM2uOo6hY", title: "First Flight with the DJI Mini 4K" },
      { id: "Co9570OMqYQ", title: "Hidden Beauty of Bélapátfalva" },
      { id: "IIESp3EZglo", title: "Quiet Moments at Lake Balaton" },
    ],
  },
  {
    title: "Events",
    playlist: "https://www.youtube.com/playlist?list=PL1FKX102w7BLLKUpY-UPkjmj0Xj1csDg3",
    videos: [
      {
        id: "0-SNcLLNeYo",
        title: "Tech Company Christmas Event",
        playlist: "PL1FKX102w7BLLKUpY-UPkjmj0Xj1csDg3",
      },
      {
        id: "qfXVwdTKhK0",
        title: "Tech Company Team Building Event",
        playlist: "PL1FKX102w7BLLKUpY-UPkjmj0Xj1csDg3",
      },
    ],
  },
  {
    title: "Travel",
    playlist: "https://www.youtube.com/playlist?list=PL1FKX102w7BJiuXzGrXHXm05pLCpPyddk",
    videos: [
      {
        id: "Zr_vXCMts54",
        title: "A Trip to Japan",
        playlist: "PL1FKX102w7BJiuXzGrXHXm05pLCpPyddk",
      },
    ],
  },
];

export const Route = createFileRoute("/videography")({
  head: () => ({ meta: [{ title: "Andrew Kltcz — Videography" }] }),
  component: VideographyPage,
});

function VideographyPage() {
  return (
    <MainLayout>
      <main className="mx-auto min-h-[calc(100vh-210px)] w-full max-w-[1400px] px-4 py-12 sm:px-8 sm:py-16 lg:px-14">
        <header className="mb-6 pb-4">
          <p className="mb-3 font-display text-xs tracking-[0.3em] text-[#FCD12A] uppercase">
            Creative Work
          </p>
          <h1 className="font-display text-5xl font-bold tracking-tight text-[#FCD12A] uppercase sm:text-7xl">
            Videography
          </h1>
          <p className="mt-5 max-w-2xl text-justify text-[15px] leading-[1.7] text-[#E0E0E0]">
            Every motion has a story.
          </p>
        </header>
        <section
          className="mb-8 border-y border-white/10 py-4"
          aria-label="Videography tools and equipment"
        >
          <p className="mb-2 text-center font-display text-[10px] tracking-[0.3em] text-white/45 uppercase">
            Tools of the craft
          </p>
          <div className="grid grid-cols-2 items-center gap-y-6 text-center sm:grid-cols-3 lg:grid-cols-5">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobepremierepro.svg"
              alt="Adobe Premiere Pro"
              loading="lazy"
              width="32"
              height="32"
              className="mx-auto size-8 object-contain brightness-0 invert"
            />
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/davinciresolve.svg"
              alt="DaVinci Resolve"
              loading="lazy"
              width="32"
              height="32"
              className="mx-auto size-8 object-contain brightness-0 invert"
            />
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobeaftereffects.svg"
              alt="Adobe After Effects"
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
              src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/sony.svg"
              alt="Sony"
              loading="lazy"
              width="32"
              height="32"
              className="mx-auto size-8 object-contain brightness-0 invert"
            />
          </div>
        </section>
        <section className="w-full text-justify text-[15px] leading-[1.7] text-[#E0E0E0] [&>p]:mb-6 [&>p:last-child]:mb-0">
          <p>
            If I could choose any dream career in the world, I would be a film director or a video
            editor. Movies have been a core part of my life for as long as I can remember, starting
            from when I was just 2 or 3 years old, glued to the TV screen watching 90s blockbusters
            on VHS.
          </p>
          <p>
            When I picked up skateboarding around 2003–2004, my friends and I naturally started
            filming everything we did. Once I got my hands on my first digital camera, I began
            spending hours experimenting with footage. Discovering video editing software was a
            turning point: I spent endless nights cutting together fan edits for my favorite bands
            and crafting recap videos from parties and hangouts. During my multimedia studies at
            university, I took that passion a step further by working with the local TV station,
            spending countless hours in the editing suite mastering timing, visual pacing, and story
            structure.
          </p>
          <p>
            Today, I channel that lifelong love for moving images into short-form content, vlogs,
            live event coverage, and music videos, handling everything from behind-the-camera
            direction to final post-production and motion effects.
          </p>
        </section>
        <div className="mt-14 space-y-12">
          {videoSections.map((section) => (
            <section key={section.title} aria-label={`${section.title} videos`}>
              <div className="mb-6 flex flex-col gap-4 border-b border-[#FCD12A]/40 pb-3 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="font-display text-2xl font-semibold tracking-wide text-[#FCD12A] uppercase sm:text-3xl">
                  {section.title}
                </h2>
                <a
                  href={section.playlist}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit border border-[#FCD12A] px-4 py-2 font-display text-[10px] font-semibold tracking-[0.14em] text-[#FCD12A] uppercase transition-colors hover:bg-[#FCD12A] hover:text-[#2B2B2B]"
                >
                  Watch more on YouTube
                </a>
              </div>
              {section.videos.length > 0 ? (
                <div
                  className={`grid gap-4 ${section.title === "Shorts" ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
                >
                  {section.videos.map((video) => (
                    <div key={video.id} className="overflow-hidden border border-white/10 bg-black">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}${video.playlist ? `?list=${video.playlist}` : ""}`}
                        title={video.title}
                        className={`${section.title === "Shorts" ? "aspect-[9/16]" : "aspect-video"} w-full`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-dashed border-white/15 px-6 py-10 text-center text-sm text-white/45">
                  More videos coming soon.
                </div>
              )}
            </section>
          ))}
        </div>
      </main>
    </MainLayout>
  );
}
