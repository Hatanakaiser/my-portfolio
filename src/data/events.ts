export type EventType = "event" | "release" | "restock" | "notice";

export type NewsItem = {
  id: string; // 一意なID(年-季節-番号)
  date: string; // ISO形式 "2025-12-30"
  title: string;
  type: EventType; // 種別(event/release/notice/restock/etc)
  place?: string; // イベント会場 / 配置
  link?: string; // 詳細や通販リンク
  body?: string; // 補足テキスト
  badge?: string; // 任意のラベル（新刊/委託など）
};

export const newsItems: NewsItem[] = [
  {
    id: "2025w-01",
    date: "2025-12-30",
    title: "コミックマーケット×× 参加",
    type: "event",
    place: "東ホール ○-△",
    badge: "参加予定",
    body: "新刊『蓮ノ空合同誌 - Blooming Resonance』を頒布予定です。",
  },
  {
    id: "2025r-01",
    date: "2025-12-31",
    title: "新刊『Blooming Resonance』通販開始",
    type: "release",
    link: "https://hatanaka.booth.pm/items/000000",
    badge: "通販",
    body: "Boothでの通販を開始しました。数量僅少です。",
  },
  {
    id: "2025n-01",
    date: "2025-11-10",
    title: "技術書典×× 申込完了",
    type: "notice",
    body: "Unity×音声対話の技術本を準備中。",
  },
  {
    id: "2025n-01",
    date: "2025-11-10",
    title: "技術書典×× 申込完了",
    type: "notice",
    body: "Unity×音声対話の技術本を準備中。",
  },
  {
    id: "2025n-01",
    date: "2025-11-10",
    title: "技術書典×× 申込完了",
    type: "notice",
    body: "Unity×音声対話の技術本を準備中。",
  },
  {
    id: "2025n-01",
    date: "2025-11-10",
    title: "技術書典×× 申込完了",
    type: "notice",
    body: "Unity×音声対話の技術本を準備中。",
  },
  {
    id: "2025n-01",
    date: "2025-11-10",
    title: "技術書典×× 申込完了",
    type: "notice",
    body: "Unity×音声対話の技術本を準備中。",
  },
];
