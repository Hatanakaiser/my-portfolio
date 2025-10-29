import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { galleryItems } from "../data/gallery";

const PAGE_SIZE = 10;
const ALL = "すべて";

export default function GalleryPage() {
  const [params, setParams] = useSearchParams();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // URLクエリ ?series=…&page=… を採用
  const seriesParam = params.get("series") ?? ALL;
  const pageParam = Math.max(1, Number(params.get("page") ?? 1));

  const seriesList = useMemo(
    () => [ALL, ...Array.from(new Set(galleryItems.map((g) => g.series)))],
    [],
  );

  const filtered = useMemo(
    () =>
      seriesParam === ALL
        ? galleryItems
        : galleryItems.filter((g) => g.series === seriesParam),
    [seriesParam],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(pageParam, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const current = filtered.slice(start, start + PAGE_SIZE);

  // キー操作（← → Esc）
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft")
        setOpenIndex((i) =>
          i === null ? null : (i + current.length - 1) % current.length,
        );
      if (e.key === "ArrowRight")
        setOpenIndex((i) => (i === null ? null : (i + 1) % current.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, current.length]);

  useEffect(() => {
    if (openIndex !== null) {
      dialogRef.current?.focus();
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [openIndex]);

  const setSeries = (s: string) => {
    params.set("series", s);
    params.set("page", "1");
    setParams(params, { replace: true });
  };

  const goPage = (p: number) => {
    params.set("page", String(p));
    setParams(params, { replace: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ORIGIN = import.meta.env.VITE_SITE_URL ?? window.location.origin;
  return (
    <>
      <title>Gallery | Nova Hatanakaiser</title>
      <meta name="description" content="イラスト・ビジュアルの一覧" />
      <meta property="og:url" content={`${ORIGIN}/gallery`} />
      <main className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Gallery</h1>
              <p className="text-sm text-slate-600 mt-1">
                イラスト・カバー・ビジュアルの一覧
              </p>
            </div>
            <Link
              to="/"
              className="rounded border px-3 py-1 text-sm text-blue-600 hover:bg-blue-50"
            >
              ← ホーム
            </Link>
          </div>

          {/* フィルタ */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            {seriesList.map((s) => (
              <button
                key={s}
                onClick={() => setSeries(s)}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  s === seriesParam
                    ? "bg-slate-900 text-white border-slate-900"
                    : "hover:bg-slate-50"
                }`}
                aria-pressed={s === seriesParam}
              >
                {s}
              </button>
            ))}
          </div>

          {/* 一覧 */}
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {current.map((g, i) => (
              <button
                key={`${g.src}-${i}`}
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block overflow-hidden rounded-xl border bg-slate-50"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* ページャ */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                className="rounded border px-3 py-1 text-sm disabled:opacity-50"
                disabled={currentPage === 1}
                onClick={() => goPage(currentPage - 1)}
              >
                前へ
              </button>
              <span className="text-sm">
                {currentPage} / {totalPages}
              </span>
              <button
                className="rounded border px-3 py-1 text-sm disabled:opacity-50"
                disabled={currentPage === totalPages}
                onClick={() => goPage(currentPage + 1)}
              >
                次へ
              </button>
            </div>
          )}
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
                  src={current[openIndex].src}
                  alt={current[openIndex].alt}
                  className="w-full h-full object-contain max-h-[80vh] bg-black"
                />
                <button
                  type="button"
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white/80 hover:text-white"
                  onClick={() =>
                    setOpenIndex((i) =>
                      i === null
                        ? null
                        : (i + current.length - 1) % current.length,
                    )
                  }
                  aria-label="前の画像へ"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white/80 hover:text-white"
                  onClick={() =>
                    setOpenIndex((i) =>
                      i === null ? null : (i + 1) % current.length,
                    )
                  }
                  aria-label="次の画像へ"
                >
                  ›
                </button>
              </div>
              <div className="mt-3 text-center text-white text-sm">
                {current[openIndex].alt}（{seriesParam}）
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
