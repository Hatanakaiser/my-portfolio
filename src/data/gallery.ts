export type GalleryItem = {
  src: string; // 画像パス（public配下推奨）
  alt: string; // 代替テキスト
  series: string; // カテゴリ（例： "蓮ノ空", "オリジナル", "ポケモン" など）
  w?: number; // 任意：幅（比率のヒント）
  h?: number; // 任意：高さ
};
//default dimensions
//4093x2894

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/20250927_ikizulive.webp",
    alt: "山田真緑",
    series: "イキヅライブ",
    w: 2894,
    h: 4093,
  },
  {
    src: "/images/gallery/20251009_ikizulive.webp",
    alt: "調布のりこ",
    series: "イキヅライブ",
    w: 2894,
    h: 4093,
  },
  {
    src: "/images/gallery/20251017_ikizulive.webp",
    alt: "春宮ゆくり",
    series: "イキヅライブ",
    w: 2894,
    h: 4093,
  },
  {
    src: "/images/gallery/20251021_ikizulive.webp",
    alt: "此花輝夜",
    series: "イキヅライブ",
    w: 2894,
    h: 4093,
  },
  {
    src: "/images/gallery/20251029_ikizulive.webp",
    alt: "山田真緑（リリイベレポ）",
    series: "イキヅライブ",
    w: 4093,
    h: 2894,
  },
];
