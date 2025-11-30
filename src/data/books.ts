import type { Book } from "../components/ui/BookCard";

export const books: Book[] = [
  {
    slug: "R3BIRTH_Ski",
    title: "タイトル未定",
    desc: "R3BIRTHがスキーに行く話",
    image: "/images/books/僕ラブ48_サークルカット.webp",
    status: "coming_soon",
    channels: [
      {
        type: "event",
        place: "僕らのラブライブ！48　虹ヶ咲25",
        date: "2026-01-24",
      },
      // { type: "booth", url: "https://hatanaka.booth.pm/items/xxxxxx" },
    ],
    tag: "二次創作",
    pages: 24,
    size: "B5",
    price: 500,
    samples: [
      "/images/books/僕ラブ48_sample1.webp",
      "/images/books/僕ラブ48_sample2.webp",
    ],
    specs: ["白黒", "本文マットコート", "特典ポストカード（予定）"],
  },
  {
    slug: "vr-dialogue-guide",
    title: "VR音声対話の作り方",
    desc: "Unity × OpenXRで作る対話エージェントの技術本。",
    image: "/images/books/vr-dialogue-guide.webp",
    status: "event_only",
    channels: [{ type: "event", place: "技術書典××", date: "2026-01-20" }],
    tag: "技術書",
    pages: 36,
    size: "B5",
    price: 1500,
    samples: ["/images/books/vr-guide_sample1.webp"],
    specs: ["Unity 2022 LTS", "OpenXR", "音声認識/LLM連携の実装例"],
  },
];
