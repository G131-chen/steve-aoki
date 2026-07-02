import cover from "@/assets/tracks/cover.jpg";
import t1 from "@/assets/tracks/track01.jpg";
import t2 from "@/assets/tracks/track02.jpg";
import t3 from "@/assets/tracks/track03.jpg";
import t4 from "@/assets/tracks/track04.jpg";
import t5 from "@/assets/tracks/track05.jpg";
import t6 from "@/assets/tracks/track06.jpg";
import t7 from "@/assets/tracks/track07.jpg";

export const album = {
  artist: "STEVE AOKI",
  title: "COLLECTOR'S NOTES",
  catalog: "TORRAS / JULY 2026",
  pressing: "A thoughtful beginning",
  year: "JULY 2026",
  cover,
};

export type Atmosphere = {
  name: string;
  blob1: string;
  blob2: string;
  text: string;
};

export type ImagePlate = {
  src: string;
  label: string;
};

export type StoryPage = {
  no: string;
  id: string;
  label: string;
  side: "A" | "B";
  title: string;
  atmos: Atmosphere;
  left: string[];
  keywords?: string[];
  bottom?: string[];
  quote?: string[];
  note?: string[];
  images?: ImagePlate[];
  hero?: ImagePlate;
  layout: 1 | 2 | 3 | 4 | 5;
};

export const pages: StoryPage[] = [
  {
    no: "01",
    id: "why-steve",
    label: "WHY STEVE",
    side: "A",
    title: "WHY STEVE",
    atmos: {
      name: "Purple",
      blob1: "radial-gradient(circle at 24% 26%, #6f3fc8 0%, transparent 58%)",
      blob2: "radial-gradient(circle at 76% 70%, #1d1028 0%, transparent 62%)",
      text: "#c6adff",
    },
    left: [
      "We didn't choose Steve because of his audience.",
      "We chose Steve because of his mindset.",
    ],
    keywords: ["Music", "Performance", "Collectibles", "Movement"],
    bottom: ["Always creating.", "Always exploring.", "Always moving."],
    images: [
      { src: t4, label: "Live Performance" },
      { src: t2, label: "Collectible Cards" },
      { src: t5, label: "Surf" },
      { src: t6, label: "Snow" },
    ],
    layout: 1,
  },
  {
    no: "02",
    id: "why-torras",
    label: "WHY TORRAS",
    side: "A",
    title: "WHY TORRAS",
    atmos: {
      name: "Pink",
      blob1: "radial-gradient(circle at 28% 24%, #d25a8a 0%, transparent 58%)",
      blob2: "radial-gradient(circle at 78% 74%, #3a1422 0%, transparent 62%)",
      text: "#f0a6c8",
    },
    left: [
      "At TORRAS,",
      "we design everyday objects for people who never stop creating.",
      "Thoughtful.",
      "Functional.",
      "Made to move.",
    ],
    keywords: ["Design", "Movement", "Protection", "Creativity"],
    bottom: ["Different industries.", "The same philosophy."],
    hero: { src: t3, label: "Q3 Air / product hero placeholder" },
    layout: 2,
  },
  {
    no: "03",
    id: "why-ostand-core",
    label: "WHY OSTAND CORE",
    side: "A",
    title: "WHY OSTAND CORE",
    atmos: {
      name: "Orange",
      blob1: "radial-gradient(circle at 26% 30%, #d66b2e 0%, transparent 58%)",
      blob2: "radial-gradient(circle at 76% 68%, #32170d 0%, transparent 62%)",
      text: "#f1ad76",
    },
    left: ["Not because it's our newest product.", "Because it carries the future we believe in."],
    keywords: ["Minimal", "Lightweight", "Confident", "Built to Move", "Future Ready"],
    bottom: ["When we thought about Steve,", "this was the only case that felt right."],
    note: ["Shared Mindset", "Future", "Movement", "Creativity", "Exploration"],
    hero: { src: t7, label: "Ostand Core / product object placeholder" },
    layout: 3,
  },
  {
    no: "04",
    id: "why-now",
    label: "WHY NOW",
    side: "B",
    title: "WHY NOW",
    atmos: {
      name: "Blue",
      blob1: "radial-gradient(circle at 32% 26%, #2f68d8 0%, transparent 58%)",
      blob2: "radial-gradient(circle at 76% 72%, #061a33 0%, transparent 62%)",
      text: "#9ec5ff",
    },
    left: [
      "Long before our first email,",
      "we noticed Steve was already using a TORRAS case.",
      "That small moment started everything.",
    ],
    quote: ["Sometimes", "the best introductions", "happen naturally."],
    bottom: ["This isn't about asking for anything.", "It's simply our way of saying hello."],
    hero: { src: t1, label: "Steve using TORRAS / placeholder" },
    layout: 4,
  },
  {
    no: "05",
    id: "looking-forward",
    label: "LOOKING FORWARD",
    side: "B",
    title: "LOOKING FORWARD",
    atmos: {
      name: "White",
      blob1: "radial-gradient(circle at 28% 28%, #f3eee5 0%, transparent 58%)",
      blob2: "radial-gradient(circle at 76% 70%, #948d7e 0%, transparent 62%)",
      text: "#f7f1e8",
    },
    left: [
      "Great relationships take time.",
      "We'd love to start with this.",
      "And see where it goes.",
    ],
    bottom: ["No pressure.", "No expectations.", "Just shared values."],
    note: ["See you soon.", "TORRAS"],
    hero: { src: cover, label: "Collector's notes" },
    layout: 5,
  },
];
