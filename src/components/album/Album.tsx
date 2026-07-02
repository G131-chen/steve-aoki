import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { album, pages } from "./data";
import { Atmosphere, Reveal } from "./atoms";
import { TrackSpread } from "./TrackSpread";

function Cover() {
  return (
    <section
      id="cover"
      className="collector-page grain relative min-h-screen w-full overflow-hidden bg-[#0c0b09]"
    >
      <Atmosphere
        blob1="radial-gradient(circle at 24% 28%, #6f3fc8 0%, transparent 58%)"
        blob2="radial-gradient(circle at 76% 68%, #1a1028 0%, transparent 62%)"
      />

      <img
        src={album.cover}
        alt=""
        className="image-editorial absolute inset-0 h-full w-full scale-105 object-cover opacity-72"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b09] via-[#0c0b09]/45 to-[#0c0b09]/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_34%,rgba(111,63,200,0.38),transparent_34%)] mix-blend-screen" />

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 py-10 sm:px-12 lg:px-16">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 max-w-5xl lg:col-span-8">
            <Reveal>
              <div className="font-mono-e mb-8 text-[10px] uppercase text-[#eee8dc]/68">
                COVER / STEVE AOKI / COLLECTOR'S NOTES
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-7xl leading-[0.82] text-[#f7f1e8] sm:text-9xl lg:text-[12rem]">
                STEVE AOKI
              </h1>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="font-serif-e mt-10 text-4xl leading-none italic text-[#f7f1e8] sm:text-6xl lg:text-7xl">
                A Thoughtful Beginning
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 flex justify-between gap-8 border-t border-[#eee8dc]/16 pt-8 lg:col-span-4 lg:flex-col lg:items-end lg:border-t-0 lg:pt-0">
            <Reveal delay={0.32}>
              <div className="font-mono-e text-[10px] uppercase leading-relaxed text-[#eee8dc]/58">
                July 2026
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="font-display text-3xl leading-none text-[#f7f1e8] sm:text-4xl">
                TORRAS
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.25, 0.75, 0.25] }}
        transition={{ duration: 4.5, repeat: Infinity }}
        className="pointer-events-none absolute right-0 bottom-6 left-0 z-20 flex justify-center"
      >
        <div className="font-mono-e text-[10px] uppercase text-[#eee8dc]/46">scroll</div>
      </motion.div>
    </section>
  );
}

const SECTIONS = [
  { id: "cover", label: "00" },
  ...pages.map((page) => ({ id: page.id, label: page.no })),
];

function IndexRail({ active }: { active: string }) {
  return (
    <div className="pointer-events-none fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 md:block">
      <ul className="flex flex-col gap-4">
        {SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id} className="pointer-events-auto">
              <a
                href={`#${section.id}`}
                className={`font-mono-e block text-right text-[10px] transition ${
                  isActive ? "text-[#f7f1e8]" : "text-[#eee8dc]/28 hover:text-[#eee8dc]/70"
                }`}
              >
                {section.label}
                <span
                  className={`ml-3 inline-block h-px align-middle transition-all ${
                    isActive ? "w-10 bg-[#f7f1e8]" : "w-3 bg-[#eee8dc]/30"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function FooterStrip({ active }: { active: string }) {
  const page = pages.find((item) => item.id === active);
  const label = active === "cover" ? "COLLECTOR'S NOTES" : (page?.label ?? "");
  const side = page ? `SIDE ${page.side}` : "COVER";

  return (
    <div className="pointer-events-none fixed right-0 bottom-0 left-0 z-30 flex items-center justify-between gap-3 border-t border-[#eee8dc]/10 bg-[#0c0b09]/82 px-4 py-3 backdrop-blur-md sm:px-8">
      <div className="font-mono-e text-[10px] uppercase text-[#eee8dc]/58">TORRAS</div>
      <div className="font-mono-e hidden text-[10px] uppercase text-[#eee8dc]/76 sm:block">
        {label}
      </div>
      <div className="font-mono-e text-[10px] uppercase text-[#eee8dc]/58">{side}</div>
    </div>
  );
}

export function Album() {
  const [active, setActive] = useState<string>("cover");

  useEffect(() => {
    const els = SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (element): element is HTMLElement => !!element,
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -54% 0px", threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="relative bg-[#0c0b09] text-[#eee8dc]">
      <IndexRail active={active} />
      <FooterStrip active={active} />
      <Cover />
      {pages.map((page) => (
        <TrackSpread key={page.id} page={page} id={page.id} />
      ))}
    </main>
  );
}
