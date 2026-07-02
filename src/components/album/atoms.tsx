import { motion } from "framer-motion";
import { type ReactNode, type CSSProperties } from "react";

export function Atmosphere({ blob1, blob2 }: { blob1: string; blob2: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#0c0b09]">
      <div
        className="drift absolute -inset-[22%] opacity-40 blur-3xl"
        style={{ background: blob1, filter: "saturate(0.65) brightness(0.78)" }}
      />
      <div
        className="drift-alt absolute -inset-[28%] opacity-30 blur-3xl"
        style={{ background: blob2, filter: "saturate(0.58) brightness(0.7)" }}
      />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(238,232,220,0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(238,232,220,0.04) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />
      <div className="absolute inset-0 bg-[#0c0b09]/62 mix-blend-multiply" />
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 34,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TapeStrip({
  className,
  rotate = -6,
  color = "rgba(217,201,141,0.75)",
}: {
  className?: string;
  rotate?: number;
  color?: string;
}) {
  return (
    <div
      className={className}
      style={{
        transform: `rotate(${rotate}deg)`,
        background: color,
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(12,11,9,0.08) 0 1px, transparent 1px 8px)",
        border: "1px solid rgba(238,232,220,0.18)",
        boxShadow: "0 8px 28px rgba(0,0,0,0.38)",
      }}
    />
  );
}

export function Polaroid({
  src,
  caption,
  rotate = -3,
  tape = true,
  style,
  className,
  size = "md",
}: {
  src: string;
  caption?: string;
  rotate?: number;
  tape?: boolean;
  style?: CSSProperties;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const w =
    size === "sm" ? "w-full max-w-56" : size === "lg" ? "w-full max-w-96" : "w-full max-w-72";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
      className={`${w} relative bg-[#eee8dc] p-2 pb-10 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.82)] ring-1 ring-[#eee8dc]/20 ${className ?? ""}`}
      style={style}
    >
      {tape && (
        <TapeStrip
          className="absolute -top-3 left-1/2 h-5 w-24 -translate-x-1/2"
          rotate={-4}
          color="rgba(238,232,220,0.28)"
        />
      )}
      <div className="relative aspect-square w-full overflow-hidden bg-[#0c0b09]">
        <img
          src={src}
          alt={caption ?? ""}
          loading="lazy"
          className="image-editorial h-full w-full object-cover"
        />
      </div>
      {caption && (
        <p className="font-mono-e mt-4 text-center text-[10px] uppercase leading-relaxed text-[#0c0b09]/70">
          {caption}
        </p>
      )}
    </motion.div>
  );
}

export function MarkerNote({
  children,
  className,
  rotate = -3,
  color = "#eee8dc",
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  color?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, rotate }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay: 0.25 }}
      className={`font-marker leading-none ${className ?? ""}`}
      style={{ color }}
    >
      {children}
    </motion.p>
  );
}

export function Scribble({
  children,
  className,
  rotate = -2,
  color = "#eee8dc",
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  color?: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, delay: 0.32 }}
      className={`font-scribble ${className ?? ""}`}
      style={{ transform: `rotate(${rotate}deg)`, color }}
    >
      {children}
    </motion.p>
  );
}

export function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-[#eee8dc]/18 pl-3">
      <div className="font-mono-e text-[10px] uppercase text-[#eee8dc]/40">{label}</div>
      <div className="font-mono-e mt-1 text-xs text-[#eee8dc]/86">{value}</div>
    </div>
  );
}
