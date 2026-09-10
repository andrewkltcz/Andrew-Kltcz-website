import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { MainLayout } from "@/components/MainLayout";

import image01 from "@/assets/music/01.JPG";
import image02 from "@/assets/music/02.JPG";
import image03 from "@/assets/music/03.JPG";
import image04 from "@/assets/music/04.jpg";
import image05 from "@/assets/music/05.jpg";
import image06 from "@/assets/music/06.jpg";
import image07 from "@/assets/music/07.jpg";
import image08 from "@/assets/music/08.jpg";
import image09 from "@/assets/music/09.jpg";
import infinityCover from "@/assets/music/ifinitycover.jpg";
import nexusCover from "@/assets/music/nexusofedencover.jpg";
import soulHarbourCover from "@/assets/music/soulharbourcover.jpg";
import thyKeeperCover from "@/assets/music/thykeepercover.jpg";
import reasonCover from "@/assets/music/reasoncover.jpg";
import tearsCover from "@/assets/music/tearsofgaiacover.jpg";
import runCover from "@/assets/music/runcover.jpg";
import odysseyCover from "@/assets/music/odysseycover.png";
import primalCover from "@/assets/music/primalcover.png";

export const Route = createFileRoute("/music")({
  head: () => ({ meta: [{ title: "Andrew Kltcz — Music" }] }),
  component: MusicPage,
});

const linkClass = "text-[#FCD12A] underline decoration-[#FCD12A]/50 underline-offset-4 hover:decoration-[#FCD12A]";

type MusicImage = { src: string; alt: string; side: "left" | "right" };

function BiographySection({ title, images, children }: { title: string; images: MusicImage[]; children: ReactNode }) {
  return (
    <section className="border-t border-white/10 pt-8 first:border-t-0 first:pt-0">
      <h2 className="mb-6 border-b border-[#FCD12A]/40 pb-3 font-display text-2xl font-semibold tracking-wide text-[#FCD12A] uppercase sm:text-3xl">{title}</h2>
      <div className="text-justify text-[15px] leading-[1.7] text-[#E0E0E0] [&>p]:mb-5 [&>p:last-child]:mb-0">
        {images.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} loading="lazy" decoding="async" width="300" height="300" className={`mb-5 w-[min(43%,300px)] rounded-md object-cover shadow-lg sm:mb-4 ${image.side === "left" ? "float-left mr-6" : "float-right ml-6"}`} />
        ))}
        {children}
        <div className="clear-both" />
      </div>
    </section>
  );
}

const releases = [
  { artist: "Hybrid Reality", title: "Infinity [EP]", year: "2013", cover: infinityCover, href: "https://hybridreality.bandcamp.com/album/infinity-ep-2", tracks: ["I Still Have a Dream", "Infinity", "Swimming in the Smoke", "Nebula"] },
  { artist: "Hybrid Reality", title: "Nexus of Eden [EP]", year: "2013", cover: nexusCover, href: "https://hybridreality.bandcamp.com/album/nexus-of-eden-ep", tracks: ["Wings of Grace", "Purgathory", "Haiiro", "Prometheus", "Nemeis Inside"] },
  { artist: "Silent Homes", title: "Soul Harbour [EP]", year: "2015", cover: soulHarbourCover, href: "https://silenthomes.bandcamp.com/album/soul-harbour", tracks: ["Waiting", "Brighter Days", "Paradigm Shift", "Spring", "Mirrors"] },
  { artist: "Andrew Lenhard", title: "Thy Keeper [EP]", year: "2017", cover: thyKeeperCover, href: "https://andrewlenhard.bandcamp.com/album/thy-keeper", tracks: ["Words", "Public Enemy", "Ghost", "Pessimist", "Haiiro", "Prometheus", "Swimming in the Smoke", "Circles", "Thy Keeper"] },
  { artist: "Midnight in November", title: "Three Singles", year: "2020–2021", cover: [reasonCover, tearsCover, runCover], href: "https://midnightinnovember.bandcamp.com/", tracks: ["Reason", "Tears of Gaia", "Run"] },
  { artist: "Soulharbour", title: "Odyssey (Album)", year: "2023", cover: odysseyCover, href: "https://open.spotify.com/album/3JZ1rWfbylDSbSur6To4ir?si=ltwEOAJ7T8qFgFDj9-s5DQ", tracks: ["Odyssey", "Farewell", "Blind", "Lost", "Stories", "Death", "Split", "Tides", "Returnal"] },
  { artist: "Soulharbour", title: "Primal [EP]", year: "2026", cover: primalCover, href: "https://open.spotify.com/album/522NSqwPB6Mq6PZiTmqAow?si=J_8brEbuRF2RX5szwP0zdA", tracks: ["Primal", "Wildfire", "Waves", "NOMAD", "Tempest", "Elemental"] },
];

const artistLinks: Record<string, string> = {
  "Hybrid Reality": "https://hybridreality.bandcamp.com/",
  "Silent Homes": "https://www.youtube.com/@silenthomes33",
  "Midnight in November": "https://www.youtube.com/@midnightinnovember1794",
  Soulharbour: "https://soulharbour.net/",
};

function MusicPage() {
  return (
    <MainLayout>
        <main className="mx-auto w-full max-w-[1400px] px-4 py-12 sm:px-8 sm:py-16 lg:px-14">
      <header className="mb-12 border-b border-white/10 pb-8">
        <p className="mb-3 font-display text-xs tracking-[0.3em] text-[#FCD12A] uppercase">Creative Work</p>
        <h1 className="font-display text-5xl font-bold tracking-tight text-[#FCD12A] uppercase sm:text-7xl">Music</h1>
        <p className="mt-5 max-w-2xl text-justify text-[15px] leading-[1.7] text-[#E0E0E0]">A history of the bands, records, and collaborations that shaped my creative life.</p>
      </header>

      <div className="space-y-12">
        <BiographySection title="Early Life and Career Beginnings (2007–2012)" images={[{ src: image01, alt: "Early music years", side: "left" }, { src: image02, alt: "Early music project", side: "right" }]}>
          <p>I have wanted to be a musician ever since I first started listening to Linkin Park. Inspired by their sound, I bought my first guitar in 2007 and immediately formed my first band as a singer and guitarist, which was a total disaster in terms of execution, but it sparked my lifelong passion for creation.</p>
          <p>I spent 2008 and 2009 focusing heavily on self-education and learning the ropes. I taught myself how to play guitar, bass, and piano, while also learning how to program drums and create samples. I was never really driven by technical instrument mastery; my main focus was always about capturing specific moods, raw atmospheres, and deep emotional soundscapes.</p>
          <p>In 2010, I met András Szegvári, who became a lifelong friend and a key guitarist on many of my projects along the way. Together, we formed Message from the Otherside. This was my first "real" band where I finally learned proper songwriting, musical arrangement, and understood how different instruments fit together in a group setting. Philosophically, the project was about exploring uncharted atmospheric territory, but despite spending a massive amount of time rehearsing, things somehow never fully worked out, and the band eventually ran its course without releasing completed material.</p>
        </BiographySection>

        <BiographySection title="Heroes Never Die and Hybrid Reality (2012–2015)" images={[{ src: image03, alt: "Heroes Never Die era", side: "left" }, { src: image04, alt: "Hybrid Reality era", side: "right" }]}>
          <p>In 2012, András, Gergő Gajer (the original bassist for Message from the Otherside), and I linked up with former members of Heroes Never Die. We decided to restart Heroes Never Die and let Message from the Otherside fade away. Joining Heroes Never Die allowed me to transition into a full-time lead vocalist, giving me the opportunity to refine and polish my screaming skills over many live concerts. With HND, we released an EP titled Rémálom in August 2013, which captured a heavier, raw metalcore energy.</p>
          <p>Around the same time, I took the unfinished songs left over from Message from the Otherside, completed them on my own, and released them under my solo project, <a href="https://hybridreality.bandcamp.com/" target="_blank" rel="noreferrer" className={linkClass}>Hybrid Reality</a>. <a href="https://hybridreality.bandcamp.com/" target="_blank" rel="noreferrer" className={linkClass}>Hybrid Reality</a> served as a creative outlet for unfiltered individual expression, dark themes, and anti-establishment social commentary.</p>
          <p><a href="https://hybridreality.bandcamp.com/album/infinity-ep-2" target="_blank" rel="noreferrer" className={`${linkClass} font-semibold`}>Infinity [EP] (January 2013)</a> – My debut instrumental solo EP, which I wrote, recorded, and mastered independently. It leaned into heavy metalcore riffs paired with ambient electronic production. The opening track, "I Still Have a Dream", set a reflective, historical backdrop with Martin Luther King Jr.'s speech samples. The track "Infinity" was written early on, originally sampled by Gábor Miklós, and explored the unbearable boredom of daily routine, drift, and patience.</p>
          <p><a href="https://hybridreality.bandcamp.com/album/nexus-of-eden-ep" target="_blank" rel="noreferrer" className={`${linkClass} font-semibold`}>Nexus of Eden [EP] (November 2013)</a> – This was a major milestone for me, as it was my first solo record featuring vocals. Up until then, I hadn't trusted my vocals, but after hearing myself on the Heroes Never Die sessions, I gained the confidence to scream and incorporate lyrics into my solo material. The record explored an emotional search for perfection and "eden" through atmospheric metalcore, featuring songs written, recorded, and mastered completely by myself.</p>
          <p>Following the disbanding of Heroes Never Die in late 2013, I spent most of 2014 jamming with different musicians and playing live shows using a temporary session line-up under the Hybrid Reality name.</p>
        </BiographySection>

        <BiographySection title="Budapest, Silent Homes, and the Seeds of Soulharbour (2015–2017)" images={[{ src: image05, alt: "Silent Homes performance", side: "left" }, { src: image06, alt: "Silent Homes project", side: "right" }]}>
          <p>After relocating to Budapest, I joined the progressive alternative metal outfit <a href="https://www.youtube.com/@silenthomes33" target="_blank" rel="noreferrer" className={linkClass}>Silent Homes</a>, which originally started as guitarist György Mede's solo instrumental project. György quickly became my true musical soulmate. <a href="https://www.youtube.com/@silenthomes33" target="_blank" rel="noreferrer" className={linkClass}>Silent Homes</a> was built on a philosophy of uplifting, highly melodic, and accessible progressive metal that blended complex guitar leads with deep emotional harmony. We released the <a href="https://silenthomes.bandcamp.com/album/soul-harbour" target="_blank" rel="noreferrer" className={linkClass}>Soul Harbour EP</a> in late 2015 and played several live shows together. <a href="https://www.youtube.com/@silenthomes33" target="_blank" rel="noreferrer" className={linkClass}>Silent Homes</a> hadn't disbanded at that time yet; I simply left the band for personal reasons during a period when my life felt out of control, while the group continued operating without me for a brief time.</p>
          <p>Following my departure, I prepared to move abroad briefly in 2017. Before I left, Gyuri approached me with a song that didn't quite fit the Silent Homes sound, proposing we record it together as a farewell track. That collaboration resulted in the single <a href="https://www.youtube.com/watch?v=OHjIXK5u0JM&list=RDOHjIXK5u0JM&start_radio=1" target="_blank" rel="noreferrer" className={linkClass}>"Farewell" (March 2017)</a>. Around the same time, I released my solo EP under the stage name Andrew Lenhard, titled <a href="https://andrewlenhard.bandcamp.com/album/thy-keeper" target="_blank" rel="noreferrer" className={linkClass}>Thy Keeper (April 2017)</a>, which explored deep personal reflection and emotional catharsis.</p>
          <p>When I returned home, Gyuri and I naturally reconnected and released a second collaborative single, <a href="https://www.youtube.com/watch?v=9dX7ie9LkgM&list=RD9dX7ie9LkgM&start_radio=1" target="_blank" rel="noreferrer" className={linkClass}>"NOMAD"</a>. Philosophically and musically, these two collaborative tracks written with Gyuri laid the fundamental groundwork for what would eventually become <a href="https://soulharbour.net/" target="_blank" rel="noreferrer" className={linkClass}>Soulharbour</a>—and we even derived our future band's name directly from that 2015 Silent Homes EP, Soul Harbour.</p>
        </BiographySection>

        <BiographySection title="Midnight in November (2018–2022)" images={[{ src: image07, alt: "Midnight in November project", side: "left" }]}>
          <p>In 2018, I co-founded <a href="https://www.youtube.com/@midnightinnovember1794" target="_blank" rel="noreferrer" className={linkClass}>Midnight in November</a> alongside bassist István Polyákovics and guitarist Péter Futó. The project was built around a high-concept thematic philosophy centered on the seven deadly sins, pairing heavy metal production with deep conceptual storytelling.</p>
          <p>The project went on a break in 2019, but Péter Székely reached out to me in 2020 to continue it. We brought the project back to life and released a series of thematic singles, including "Reason [Luxuria]", "Tears of Gaia [Gula]", and "Run [Acedia]" (2021), each serving as an installment in our conceptual exploration of human corruption and morality.</p>
        </BiographySection>

        <BiographySection title="Soulharbour (2022–present)" images={[{ src: image08, alt: "Soulharbour band", side: "right" }, { src: image09, alt: "Soulharbour performance", side: "left" }]}>
          <p>By 2021, György Mede and I decided to officially turn our ongoing collaboration into a full progressive djent/metalcore band named <a href="https://soulharbour.net/" target="_blank" rel="noreferrer" className={linkClass}>Soulharbour</a>. The band's underlying philosophy is represented by its name: a multi-layered journey through turbulent states of mind and personal struggles, driven by the single ultimate goal of finally reaching a safe harbour.</p>
          <p>We officially debuted in May 2023 with our lead single and music video "Split", followed by our debut full-length release:</p>
          <p><a href="https://open.spotify.com/album/3JZ1rWfbylDSbSur6To4ir?si=ltwEOAJ7T8qFgFDj9-s5DQ" target="_blank" rel="noreferrer" className={`${linkClass} font-semibold`}>Odyssey (November 2023)</a> – A deeply personal concept album inspired by my own journey through severe personal rock bottoms, mental health battles, and emotional recovery. The album was widely recognized across Hungarian metal outlets, appearing on several year-end top release lists.</p>
          <p><a href="https://open.spotify.com/album/522NSqwPB6Mq6PZiTmqAow?si=J_8brEbuRF2RX5szwP0zdA" target="_blank" rel="noreferrer" className={`${linkClass} font-semibold`}>Primal [EP] (March 2026)</a> – A release that shifted philosophy toward raw human emotion, spontaneity, and instinct over digital over-processing, focusing on the four basic elements as representations of human emotional states. It notably revisited our earlier roots by featuring a reworked version of "NOMAD".</p>
          <p>Today, Soulharbour operates on a strict DIY ethos where I handle primary vocals, lyricism, and visual design alongside my bandmates, creating an authentic and immersive identity.</p>
        </BiographySection>
      </div>

      <section className="mt-16 border-t border-white/10 pt-10">
        <h2 className="mb-8 border-b border-[#FCD12A]/40 pb-3 font-display text-2xl font-semibold tracking-wide text-[#FCD12A] uppercase sm:text-3xl">Selected Discography</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {releases.map((release) => (
            <article key={`${release.artist}-${release.title}`} className="overflow-hidden border border-white/10 uppercase transition-transform hover:-translate-y-1">
              <a href={release.href} target="_blank" rel="noreferrer" aria-label={`Open ${release.artist} ${release.title}`}>
                {Array.isArray(release.cover) ? (
                  <span className="grid aspect-square grid-cols-2 gap-px bg-white/10">
                    {release.cover.map((cover, index) => (
                      <img key={cover} src={cover} alt={`${release.artist} ${release.title} cover ${index + 1}`} loading="lazy" decoding="async" width="300" height="300" className="h-full w-full object-cover" />
                    ))}
                  </span>
                ) : (
                  <img src={release.cover} alt={`${release.artist} - ${release.title} cover`} loading="lazy" decoding="async" width="300" height="300" className="aspect-square w-full object-cover" />
                )}
              </a>
              <div className="p-5">
                <p className="font-display text-xs tracking-[0.16em] text-[#FCD12A] uppercase"><a href={artistLinks[release.artist] ?? release.href} target="_blank" rel="noreferrer" className="hover:underline">{release.artist}</a></p>
                <h3 className="mt-2 text-lg font-semibold text-[#E0E0E0]">{release.title}</h3>
                <p className="mt-1 text-sm text-white/55">{release.year}</p>
                <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-[#E0E0E0]/80">{release.tracks.map((track) => <li key={track}>{track}</li>)}</ol>
                <a href={release.href} target="_blank" rel="noreferrer" className="mt-5 inline-block text-xs font-semibold tracking-[0.14em] text-[#FCD12A] uppercase underline underline-offset-4">Listen</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      </main>
    </MainLayout>
  );
}
