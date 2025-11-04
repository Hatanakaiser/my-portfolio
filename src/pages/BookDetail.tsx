import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { books } from "../data/books";
import type { Channel } from "../components/ui/BookCard";

function formatJPY(n?: number) {
  return typeof n === "number"
    ? n.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })
    : "-";
}

function ChannelButtons({ channels }: { channels?: Channel[] }) {
  if (!channels || channels.length === 0) return null;

  const labelMap: Record<Exclude<Channel["type"], "event">, string> = {
    booth: "Boothで通販",
    melonbooks: "メロンブックスで通販",
    toranoana: "とらのあなで通販",
  };

  return (
    <div className="flex flex-wrap gap-2">
      {channels.map((c, i) => {
        if (c.type === "event") {
          return (
            <span key={i} className="rounded-full border px-3 py-1 text-sm">
              {c.date ?? "近日"} / {c.place ?? "イベント頒布"}
            </span>
          );
        }

        // c.type が "booth" | "melonbooks" | "toranoana" に絞り込まれるので c.url に型が付きます
        const label = labelMap[c.type];
        const url = c.url;

        return (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-600 text-white px-3 py-1 text-sm hover:bg-emerald-700"
          >
            {label} →
          </a>
        );
      })}
    </div>
  );
}

export default function BookDetail() {
  const { slug } = useParams<{ slug: string }>();

  const book = useMemo(() => books.find((b) => b.slug === slug), [slug]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!book) {
    return (
      <main className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h1 className="text-2xl md:text-3xl font-bold">Not Found</h1>
          <p className="mt-2 text-slate-600">
            指定された本が見つかりませんでした。
          </p>
          <div className="mt-6 flex gap-2">
            <Link to="/books" className="rounded border px-3 py-1 text-sm">
              ← Books一覧
            </Link>
            <Link to="/" className="rounded border px-3 py-1 text-sm">
              ホーム
            </Link>
          </div>
        </div>
      </main>
    );
  }
  const ORIGIN = import.meta.env.VITE_SITE_URL ?? window.location.origin;
  const pageUrl = `${ORIGIN}/books/${book.slug}`;
  const pageTitle = `${book.title} | はたなかいざー開発室`;
  const desc = book.desc ?? "同人誌の詳細ページ";
  const ogImg = book.image.startsWith("http")
    ? book.image
    : `${ORIGIN}${book.image}`;
  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={desc} />

      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="はたなかいざー開発室" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImg} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImg} />

      <main className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          {/* パンくず */}
          <div className="mb-4 text-sm">
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <Link to="/books" className="text-blue-600 hover:underline">
              Books
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-600">{book.title}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* 左：表紙＋サンプル */}
            <div>
              <div className="overflow-hidden rounded-2xl border bg-slate-50">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {book.samples && book.samples.length > 0 && (
                <>
                  <h3 className="mt-6 mb-2 font-semibold">試し読み</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {book.samples.map((s, i) => (
                      <button
                        key={s}
                        onClick={() => setOpenIndex(i)}
                        className="overflow-hidden rounded-xl border bg-white"
                        title="拡大表示"
                      >
                        <img
                          src={s}
                          alt={`${book.title} sample ${i + 1}`}
                          className="aspect-[4/3] w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* 右：情報 */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{book.title}</h1>
              {book.tag && (
                <div className="mt-2 inline-block rounded-full border px-2 py-0.5 text-xs">
                  {book.tag}
                </div>
              )}

              <p className="mt-4 text-slate-700 leading-relaxed">{book.desc}</p>

              <div className="mt-6 grid grid-cols-2 gap-y-2 text-sm">
                <div className="text-slate-500">サイズ</div>
                <div className="font-medium">{book.size ?? "-"}</div>
                <div className="text-slate-500">ページ数</div>
                <div className="font-medium">{book.pages ?? "-"}</div>
                <div className="text-slate-500">価格</div>
                <div className="font-medium">{formatJPY(book.price)}</div>
              </div>

              {book.specs && book.specs.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold">仕様</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm">
                    {book.specs.map((sp, i) => (
                      <li key={i}>{sp}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6">
                <ChannelButtons channels={book.channels} />
              </div>

              <div className="mt-8 flex gap-2">
                <Link to="/books" className="rounded border px-3 py-1 text-sm">
                  ← Books一覧
                </Link>
                <Link to="/" className="rounded border px-3 py-1 text-sm">
                  ホーム
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* モーダル（試し読み拡大） */}
        {openIndex !== null && book.samples && (
          <div
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
                  src={book.samples[openIndex]}
                  alt={`${book.title} sample ${openIndex + 1}`}
                  className="w-full h-full object-contain max-h-[80vh] bg-black"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
