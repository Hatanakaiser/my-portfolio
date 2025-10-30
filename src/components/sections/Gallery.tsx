import { useEffect, useMemo, useRef, useState } from "react";
import GalleryImage from "../ui/GalleryImage";
import { galleryItems, type GalleryItem } from "../../data/gallery";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, slideUp } from "../../lib/motion";

const ALL = "ALL";

export default function Gallery() {
  const [series, setSeries] = useState<string>(ALL);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const seriesList = useMemo(
    () => [ALL, ...Array.from(new Set(galleryItems.map((g) => g.series)))],
    [],
  );

  const filtered: GalleryItem[] = useMemo(() => {
    const list: GalleryItem[] =
      series === ALL
        ? galleryItems
        : galleryItems.filter((g) => g.series === series);

    const byDateDesc = (a: GalleryItem, b: GalleryItem) => {
      const ad = a.date ?? "";
      const bd = b.date ?? "";
      if (ad < bd) return 1;
      if (ad > bd) return -1;
      return 0;
    };
    return [...list].sort(byDateDesc).slice(0, 8);
  }, [series]);

  // キーボード操作（← → ESC）
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? null : (i + filtered.length - 1) % filtered.length,
        );
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? null : (i + 1) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, filtered.length]);

  // モーダルオープン時フォーカス
  useEffect(() => {
    if (openIndex !== null) {
      dialogRef.current?.focus();
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [openIndex]);

  const listHref =
    series === ALL
      ? "/gallery"
      : `/gallery?series=${encodeURIComponent(series)}`;

  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* ▼ ここを置き換え：タイトル＋右側リンク */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Gallery</h2>
          <Link to={listHref} className="text-sm text-blue-600 hover:underline">
            すべて見る →
          </Link>
        </div>
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h3 className="text-2xl md:text-3xl font-bold">Tags</h3>

          {/* フィルタ */}
          <div className="flex flex-wrap items-center gap-2">
            {seriesList.map((s) => (
              <button
                key={s}
                onClick={() => setSeries(s)}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  s === series
                    ? "bg-slate-900 border-slate-900"
                    : "hover:bg-slate-50"
                }`}
                aria-pressed={s === series}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* サムネグリッド */}
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
        >
          {filtered.map((g, i) => (
            <motion.div key={`${g.src}-${i}`} variants={slideUp}>
              <GalleryImage
                src={g.src}
                alt={g.alt}
                onClick={() => setOpenIndex(i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* モーダル */}
      {openIndex !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => {
            // 背景クリックで閉じる
            if (e.target === e.currentTarget) setOpenIndex(null);
          }}
        >
          <div className="relative max-w-5xl w-full">
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              className="absolute -top-10 right-0 rounded bg-white/90 px-3 py-1 text-sm shadow hover:bg-white"
            >
              閉じる（Esc）
            </button>

            <div className="relative overflow-hidden rounded-2xl bg-black">
              <img
                src={filtered[openIndex].src}
                alt={filtered[openIndex].alt}
                className="w-full h-full object-contain max-h-[80vh] bg-black"
              />

              {/* 前/次 */}
              <button
                type="button"
                className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-black/80 hover:text-black/100"
                onClick={() =>
                  setOpenIndex((i) =>
                    i === null
                      ? null
                      : (i + filtered.length - 1) % filtered.length,
                  )
                }
                aria-label="前の画像へ"
              >
                ‹
              </button>
              <button
                type="button"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-black/80 hover:text-black/100"
                onClick={() =>
                  setOpenIndex((i) =>
                    i === null ? null : (i + 1) % filtered.length,
                  )
                }
                aria-label="次の画像へ"
              >
                ›
              </button>
            </div>

            <div className="mt-3 text-center text-white text-sm">
              {filtered[openIndex].alt}（{filtered[openIndex].series}）
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
