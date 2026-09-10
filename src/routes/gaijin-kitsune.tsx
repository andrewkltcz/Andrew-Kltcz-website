import { createFileRoute } from "@tanstack/react-router";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

import { MainLayout } from "@/components/MainLayout";
import logo from "@/assets/gaijin_kitsune/logo_white.png";

export const Route = createFileRoute("/gaijin-kitsune")({
  head: () => ({ meta: [{ title: "Andrew Kltcz — Gaijin Kitsune" }] }),
  component: GaijinKitsunePage,
});

function GaijinKitsunePage() {
  const socialLinks = [
    {
      label: "YouTube Shorts",
      icon: FaYoutube,
      href: "https://www.youtube.com/@GaijinKitsune/shorts",
    },
    { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/gaijin.kitsune" },
    {
      label: "Facebook",
      icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61555431576622",
    },
    { label: "TikTok", icon: FaTiktok, href: "https://www.tiktok.com/@gaijin.kitsune" },
  ];

  return (
    <MainLayout>
      <main className="mx-auto min-h-[calc(100vh-210px)] w-full max-w-[1400px] px-4 py-12 sm:px-8 sm:py-16 lg:px-14">
        <header className="mb-10 border-b border-white/10 pb-8">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_220px]">
            <div>
              <p className="mb-3 font-display text-xs tracking-[0.3em] text-[#FCD12A] uppercase">
                Content Creation
              </p>
              <h1 className="font-display text-5xl font-bold tracking-tight text-[#FCD12A] uppercase sm:text-7xl">
                Gaijin Kitsune外人狐
              </h1>
              <p className="mt-5 max-w-3xl text-justify text-[15px] leading-[1.7] text-[#E0E0E0]">
                Uncovering the Japan you won't find in guidebooks.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src={logo}
                alt="Gaijin Kitsune logo"
                width="220"
                height="220"
                className="size-40 object-contain sm:size-48"
              />
            </div>
          </div>
        </header>
        <section className="w-full text-justify text-[15px] leading-[1.7] text-[#E0E0E0] [&>p]:mb-6 [&>p:last-child]:mb-0">
          <p>
            For a long time, I tried really hard to make videos about making videos—focusing on
            camera gear, lighting setups, and editing tutorials—but somehow it never quite clicked
            or felt right.
          </p>
          <p>
            Then I remembered a piece of advice from filmmaker and creator{" "}
            <a
              href="https://www.youtube.com/@petermckinnon"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#FCD12A] underline underline-offset-4"
            >
              Peter McKinnon
            </a>
            : if you have a passion for making videos and a passion for something else, combine them
            and make videos about that other thing.
          </p>
          <p>
            Well, I love Japan. Japanese culture has been part of my life for as long as I can
            remember. It started when I was a toddler, frequently visited by a close Japanese friend
            of my dad&apos;s. From there, it grew into a lifelong immersion: watching anime,
            practicing martial arts, striving to live by Zen principles, and reading endlessly about
            samurai history.
          </p>
          <p>
            One day, everything fell into place: I should combine my filmmaking skills with my love
            for Japanese culture and create short-form content about it. And that&apos;s how Gaijin
            Kitsune was born.
          </p>
        </section>
        <section className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-start lg:gap-16">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
            <iframe
              src="https://www.youtube.com/embed/5tJpaq4UFMI"
              title="The Tragic Story Behind Japan's Jizo Statues"
              className="aspect-[9/16] max-h-[480px] w-full border border-white/10 bg-black"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/VpYtSP_FaFA"
              title="Why Tokyo Has No Public Trash Cans"
              className="aspect-[9/16] max-h-[480px] w-full border border-white/10 bg-black"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/R_vEMXHvVgo"
              title="The Dark Side of Kyoto Tourist Buses Don't Show You"
              className="aspect-[9/16] max-h-[480px] w-full border border-white/10 bg-black"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <iframe
              src="https://www.youtube.com/embed/XE-KetpKWqI"
              title="3 Words English Desperately Needs From Japanese"
              className="aspect-[9/16] max-h-[480px] w-full border border-white/10 bg-black"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div>
            <p className="mb-5 font-display text-xs tracking-[0.24em] text-[#FCD12A] uppercase">
              Watch more on
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 border border-white/10 px-4 py-3 text-sm text-[#E0E0E0] transition-colors hover:border-[#FCD12A] hover:text-[#FCD12A]"
                >
                  <social.icon className="size-4" aria-hidden="true" />
                  <span className="font-display tracking-[0.14em] uppercase">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
