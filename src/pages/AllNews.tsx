import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "../components/ui/EventCard";
import { newsItems } from "../data/events";

const PAGE_SIZE = 10;

export default function AllNews() {
  const sorted = useMemo(
    () => [...newsItems].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [],
  );

  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const current = sorted.slice(start, start + PAGE_SIZE);

  const ORIGIN = import.meta.env.VITE_SITE_URL ?? window.location.origin;
  return (
    <>
      <title>All News | はたなかいざー醸造所</title>
      <meta name="description" content="お知らせ・参加予定・頒布情報の一覧" />
      <meta property="og:url" content={`${ORIGIN}/all-news`} />
      <main className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">All News</h1>
              <p className="text-sm text-slate-600 mt-1">
                お知らせ・参加予定・頒布情報の一覧
              </p>
            </div>

            {/* 🏠 ホームに戻るボタン */}
            <Link
              to="/"
              className="rounded border px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 transition"
            >
              ← ホーム
            </Link>
          </div>

          <div className="grid gap-6">
            {current.map((item) => (
              <EventCard key={item.id} {...item} />
            ))}
          </div>

          {/* ページャ */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                className="rounded border px-3 py-1 text-sm disabled:opacity-50"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                前へ
              </button>
              <span className="text-sm">
                {page} / {totalPages}
              </span>
              <button
                className="rounded border px-3 py-1 text-sm disabled:opacity-50"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                次へ
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
