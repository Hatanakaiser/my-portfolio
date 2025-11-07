export type GalleryItem = {
  src: string; // 画像パス（public配下推奨）
  alt: string; // 代替テキスト
  series: string; // カテゴリ（例： "蓮ノ空", "オリジナル", "ポケモン" など）
  date: string; // 任意：日付（YYYY-MM-DD形式推奨）
  w?: number; // 任意：幅（比率のヒント）
  h?: number; // 任意：高さ
};
//default dimensions
//4093x2894

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/20250910_suzumiyaharuhi.webp",
    alt: "涼宮ハルヒ",
    series: "涼宮ハルヒの憂鬱",
    date: "2025-09-10",
    w: 675,
    h: 1200,
  },
  {
    src: "/images/gallery/20250927_ikizulive.webp",
    alt: "山田真緑",
    series: "イキヅライブ",
    date: "2025-09-27",
    w: 2894,
    h: 4093,
  },
  {
    src: "/images/gallery/20251009_ikizulive.webp",
    alt: "調布のりこ",
    series: "イキヅライブ",
    date: "2025-10-09",
    w: 2894,
    h: 4093,
  },
  {
    src: "/images/gallery/20251017_ikizulive.webp",
    alt: "春宮ゆくり",
    series: "イキヅライブ",
    date: "2025-10-17",
    w: 2894,
    h: 4093,
  },
  {
    src: "/images/gallery/20251021_ikizulive.webp",
    alt: "此花輝夜",
    series: "イキヅライブ",
    date: "2025-10-21",
    w: 2894,
    h: 4093,
  },
  {
    src: "/images/gallery/20251029_ikizulive.webp",
    alt: "山田真緑_LittleGreen委員会リリイベレポートイラスト",
    series: "イキヅライブ",
    date: "2025-10-29",
    w: 4093,
    h: 2894,
  },
  {
    src: "/images/gallery/20251107_nijigasaki.webp",
    alt: "優木せつ菜(映ヶ咲2章：私服ver.)",
    series: "虹ヶ咲",
    date: "2025-11-07",
    w: 2894,
    h: 4093,
  },
];
