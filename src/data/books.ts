import type { Book } from "../components/ui/BookCard";

export const books: Book[] = [
  {
    title: "蓮ノ空合同誌 - Blooming Resonance",
    desc: "蓮ノ空をテーマにしたフルカラー合同誌。全16ページ。",
    image: "/images/books/blooming-resonance.jpg",
    status: "coming_soon",
    channels: [
      {
        type: "event",
        place: "コミックマーケット×× 東○-△",
        date: "2025-12-30",
      },
      // 委託/通販を始めたら↓を追記するだけ
      // { type: "booth", url: "https://hatanaka.booth.pm/items/xxxxxx" },
    ],
    tag: "二次創作",
  },
  {
    title: "VR音声対話の作り方",
    desc: "Unity × OpenXRで作る対話エージェントの技術本。",
    image: "/images/books/vr-dialogue-guide.jpg",
    status: "event_only",
    channels: [{ type: "event", place: "技術書典××", date: "2026-01-20" }],
    tag: "技術書",
  },
  // 追加でOK
];
