export type GalleryItem = {
  src: string; // 画像パス（public配下推奨）
  alt: string; // 代替テキスト
  series: string; // カテゴリ（例： "蓮ノ空", "オリジナル", "ポケモン" など）
  w?: number; // 任意：幅（比率のヒント）
  h?: number; // 任意：高さ
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/rennosora_01.jpg",
    alt: "蓮ノ空イラスト01",
    series: "蓮ノ空",
    w: 1080,
    h: 1440,
  },
  {
    src: "/images/gallery/rennosora_02.jpg",
    alt: "蓮ノ空イラスト02",
    series: "蓮ノ空",
    w: 1440,
    h: 1080,
  },
  {
    src: "/images/gallery/original_01.jpg",
    alt: "オリジナルキャラ01",
    series: "オリジナル",
    w: 1200,
    h: 1600,
  },
  {
    src: "/images/gallery/pokemon_01.jpg",
    alt: "ポケモンイラスト01",
    series: "ポケモン",
    w: 1600,
    h: 1200,
  },
];
