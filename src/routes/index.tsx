import { createFileRoute } from "@tanstack/react-router";
import { Album } from "@/components/album/Album";
import coverImg from "@/assets/tracks/cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STEVE AOKI — COLLECTOR'S NOTES · TORRAS" },
      {
        name: "description",
        content:
          "A collector's edition art book for Steve Aoki and TORRAS — thoughtful objects, movement, creativity, and a natural beginning.",
      },
      { property: "og:title", content: "STEVE AOKI — COLLECTOR'S NOTES" },
      {
        property: "og:description",
        content: "A quiet editorial story about shared values, movement, and creative objects.",
      },
      { property: "og:image", content: coverImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: coverImg },
    ],
  }),
  component: Album,
});
