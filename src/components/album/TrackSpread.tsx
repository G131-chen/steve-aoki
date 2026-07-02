import { motion } from "framer-motion";
import type { ImagePlate, StoryPage } from "./data";
import { Atmosphere, Reveal, TapeStrip } from "./atoms";

function PageMarker({ page }: { page: StoryPage }) {
  return (
    <Reveal>
      <div className="font-mono-e flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase text-[#eee8dc]/58">
        <span>Page {page.no}</span>
        <span className="h-px w-8 bg-current opacity-40" />
        <span>Side {page.side}</span>
        <span className="h-px w-8 bg-current opacity-40" />
        <span>{page.label}</span>
      </div>
    </Reveal>
  );
}

function PageTitle({ children, className = "" }: { children: string; className?: string }) {
  return (
    <Reveal delay={0.08}>
      <h2
        className={`font-display max-w-5xl text-7xl leading-[0.82] text-[#f7f1e8] uppercase sm:text-9xl lg:text-[11rem] ${className}`}
      >
        {children}
      </h2>
    </Reveal>
  );
}

function CopyBlock({ lines, className = "" }: { lines: string[]; className?: string }) {
  return (
    <Reveal delay={0.18} className={className}>
      <div className="space-y-9">
        {lines.map((line) => (
          <p
            key={line}
            className="font-serif-e max-w-xl text-3xl leading-[1.02] text-[#f7f1e8] sm:text-4xl lg:text-5xl"
          >
            {line}
          </p>
        ))}
      </div>
    </Reveal>
  );
}

function KeywordList({
  words,
  accent,
  columns = false,
}: {
  words: string[];
  accent: string;
  columns?: boolean;
}) {
  return (
    <Reveal delay={0.28}>
      <div
        className={
          columns
            ? "grid grid-cols-2 gap-x-8 gap-y-7"
            : "flex flex-wrap items-center gap-x-10 gap-y-5"
        }
      >
        {words.map((word) => (
          <div
            key={word}
            className="font-mono-e border-l border-current/30 pl-4 text-[10px] uppercase leading-relaxed text-[#eee8dc]/70"
            style={{ color: accent }}
          >
            {word}
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function BottomLines({ lines, accent }: { lines?: string[]; accent: string }) {
  if (!lines?.length) return null;

  return (
    <Reveal delay={0.36}>
      <div className="border-t border-[#eee8dc]/12 pt-12">
        <div className="font-serif-e max-w-4xl text-4xl leading-[0.98] text-[#f7f1e8] italic sm:text-5xl lg:text-6xl">
          {lines.map((line) => (
            <span key={line} className="mr-5 inline-block" style={{ color: accent }}>
              {line}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function ImageCard({ plate, className = "" }: { plate: ImagePlate; className?: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 44, scale: 1.02 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden border border-[#eee8dc]/12 bg-[#eee8dc]/5 shadow-[0_54px_140px_-60px_rgba(0,0,0,0.95)] ${className}`}
    >
      <img
        src={plate.src}
        alt=""
        loading="lazy"
        className="image-editorial h-full w-full object-cover transition duration-[1800ms] group-hover:scale-[1.025]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0b09]/62 via-transparent to-transparent" />
      <figcaption className="font-mono-e absolute right-4 bottom-4 left-4 text-[10px] uppercase text-[#f7f1e8]/76">
        {plate.label}
      </figcaption>
    </motion.figure>
  );
}

function HeroImage({ plate, className = "" }: { plate?: ImagePlate; className?: string }) {
  if (!plate) return null;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 48, scale: 1.025 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 1.45, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${className}`}
    >
      <div className="relative overflow-hidden border border-[#eee8dc]/12 bg-[#eee8dc]/5 shadow-[0_70px_170px_-72px_rgba(0,0,0,0.95)]">
        <img
          src={plate.src}
          alt=""
          loading="lazy"
          className="image-editorial aspect-[4/5] h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_48%_22%,rgba(255,255,255,0.16),transparent_36%)] mix-blend-screen" />
      </div>
      <TapeStrip
        className="absolute -top-3 left-[12%] h-5 w-28"
        rotate={-3}
        color="rgba(238,232,220,0.2)"
      />
      <figcaption className="font-mono-e mt-5 text-[10px] uppercase text-[#eee8dc]/48">
        {plate.label}
      </figcaption>
    </motion.figure>
  );
}

function NoteModule({ lines, accent }: { lines?: string[]; accent: string }) {
  if (!lines?.length) return null;

  return (
    <Reveal delay={0.42}>
      <div className="max-w-xs border border-[#eee8dc]/12 bg-[#eee8dc]/5 p-6">
        <div className="font-mono-e mb-6 text-[10px] uppercase text-[#eee8dc]/46">{lines[0]}</div>
        <div className="space-y-3">
          {lines.slice(1).map((line) => (
            <div
              key={line}
              className="font-mono-e text-[10px] uppercase leading-relaxed"
              style={{ color: accent }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function TrackSpread({ page, id }: { page: StoryPage; id: string }) {
  const A = page.atmos;

  return (
    <section
      id={id}
      className="collector-page grain relative min-h-[118vh] w-full overflow-hidden bg-[#0c0b09]"
    >
      <Atmosphere blob1={A.blob1} blob2={A.blob2} />

      <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 flex items-center justify-between px-6 py-7 sm:px-12 lg:px-16">
        <div className="font-mono-e text-[10px] uppercase text-[#eee8dc]/45">
          Collector's Notes / {page.label}
        </div>
        <div className="font-mono-e text-[10px] uppercase text-[#eee8dc]/45">Page {page.no}</div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[118vh] max-w-[1660px] flex-col justify-center px-6 py-36 sm:px-12 sm:py-44 lg:px-16 lg:py-52">
        {renderLayout(page)}
      </div>
    </section>
  );

  function renderLayout(item: StoryPage) {
    switch (item.layout) {
      case 1:
        return (
          <div className="grid grid-cols-12 items-center gap-y-24 lg:gap-x-24">
            <div className="col-span-12 lg:col-span-4">
              <PageMarker page={item} />
              <PageTitle className="mt-10 text-6xl sm:text-8xl lg:text-[8rem]">
                {item.title}
              </PageTitle>
              <CopyBlock lines={item.left} className="mt-20" />
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="grid min-h-[55rem] grid-cols-2 gap-5 sm:gap-7">
                {item.images?.map((image, index) => (
                  <ImageCard
                    key={image.label}
                    plate={image}
                    className={index % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/5] translate-y-10"}
                  />
                ))}
              </div>
              {item.keywords && (
                <div className="mt-16">
                  <KeywordList words={item.keywords} accent={A.text} columns />
                </div>
              )}
            </div>

            <div className="col-span-12">
              <BottomLines lines={item.bottom} accent={A.text} />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="grid grid-cols-12 items-center gap-y-24 lg:gap-x-28">
            <div className="col-span-12 lg:col-span-5">
              <PageMarker page={item} />
              <PageTitle className="mt-10 text-6xl sm:text-8xl lg:text-[8.5rem]">
                {item.title}
              </PageTitle>
              <CopyBlock lines={item.left} className="mt-20" />
            </div>
            <div className="col-span-12 lg:col-span-7">
              <HeroImage plate={item.hero} className="ml-auto w-full max-w-[48rem]" />
              {item.keywords && (
                <div className="mt-16">
                  <KeywordList words={item.keywords} accent={A.text} />
                </div>
              )}
            </div>
            <div className="col-span-12">
              <BottomLines lines={item.bottom} accent={A.text} />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="grid grid-cols-12 items-center gap-y-24 lg:gap-x-24">
            <div className="col-span-12 lg:col-span-5">
              <PageMarker page={item} />
              <PageTitle className="mt-10 text-6xl sm:text-8xl lg:text-[8.5rem]">
                {item.title}
              </PageTitle>
              <CopyBlock lines={item.left} className="mt-20" />
              <div className="mt-20">
                <BottomLines lines={item.bottom} accent={A.text} />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <HeroImage plate={item.hero} className="ml-auto w-full max-w-[50rem]" />
              <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_auto]">
                {item.keywords && <KeywordList words={item.keywords} accent={A.text} columns />}
                <NoteModule lines={item.note} accent={A.text} />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="grid grid-cols-12 items-center gap-y-24 lg:gap-x-24">
            <div className="col-span-12 lg:col-span-5">
              <PageMarker page={item} />
              <PageTitle className="mt-10 text-6xl sm:text-8xl lg:text-[9rem]">
                {item.title}
              </PageTitle>
              <CopyBlock lines={item.left} className="mt-20" />
              <div className="mt-20">
                <BottomLines lines={item.bottom} accent={A.text} />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <HeroImage plate={item.hero} className="ml-auto w-full max-w-[52rem]" />
              {item.quote && (
                <Reveal delay={0.36}>
                  <div
                    className="font-serif-e mt-16 max-w-xl text-4xl leading-[0.98] italic sm:text-5xl"
                    style={{ color: A.text }}
                  >
                    {item.quote.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <PageMarker page={item} />
            <PageTitle className="mt-14 text-6xl sm:text-8xl lg:text-[9rem]">
              {item.title}
            </PageTitle>
            <CopyBlock lines={item.left} className="mt-24" />
            <div className="mt-24">
              <BottomLines lines={item.bottom} accent={A.text} />
            </div>
            {item.note && (
              <Reveal delay={0.46}>
                <div className="font-mono-e mt-24 space-y-5 text-[10px] uppercase leading-relaxed text-[#eee8dc]/64">
                  {item.note.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        );
    }
  }
}
