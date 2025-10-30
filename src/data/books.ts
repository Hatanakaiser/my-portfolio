import type { Book } from "../components/ui/BookCard";

export const books: Book[] = [
  {
    slug: "blooming-resonance",
    title: "蓮ノ空合同誌 - Blooming Resonance",
    desc: "蓮ノ空をテーマにしたフルカラー合同誌。全16ページ。",
    image: "/images/books/20251009_ikizulive.webp",
    status: "coming_soon",
    channels: [
      {
        type: "event",
        place: "コミックマーケット×× 東○-△",
        date: "2025-12-30",
      },
      // { type: "booth", url: "https://hatanaka.booth.pm/items/xxxxxx" },
    ],
    tag: "二次創作",
    pages: 16,
    size: "B5",
    price: 1000,
    samples: [
      "/images/books/blooming-resonance_sample1.jpg",
      "/images/books/blooming-resonance_sample2.jpg",
    ],
    specs: ["フルカラー", "本文マットコート", "特典ポストカード（予定）"],
  },
  {
    slug: "vr-dialogue-guide",
    title: "VR音声対話の作り方",
    desc: "Unity × OpenXRで作る対話エージェントの技術本。",
    image: "/images/books/vr-dialogue-guide.jpg",
    status: "event_only",
    channels: [{ type: "event", place: "技術書典××", date: "2026-01-20" }],
    tag: "技術書",
    pages: 36,
    size: "B5",
    price: 1500,
    samples: ["/images/books/vr-guide_sample1.jpg"],
    specs: ["Unity 2022 LTS", "OpenXR", "音声認識/LLM連携の実装例"],
  },
];
