import { useEffect, useMemo, useState } from "react"; // useEffect 追加
import { Link } from "react-router-dom";
import BookCard, {
  type Book,
  type SaleStatus,
} from "../components/ui/BookCard";
import { books } from "../data/books";

const PAGE_SIZE = 9;

const STATUS_LABEL: Record<SaleStatus, string> = {
  coming_soon: "準備中",
  event_only: "イベント頒布",
  booth: "Booth",
  melonbooks: "メロンブックス",
  toranoana: "とらのあな",
  sold_out: "完売",
};

export default function BooksPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<SaleStatus | "all">("all");
  const [tag, setTag] = useState<string | "all">("all");
  const [page, setPage] = useState(1);

  const tags = useMemo(
    () =>
      Array.from(new Set(books.map((b) => b.tag).filter(Boolean))) as string[],
    [],
  );

  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return books.filter((b) => {
      const okQ =
        !kw ||
        b.title.toLowerCase().includes(kw) ||
        b.desc.toLowerCase().includes(kw);
      const okStatus = status === "all" || b.status === status;
      const okTag = tag === "all" || b.tag === tag;
      return okQ && okStatus && okTag;
    });
  }, [q, status, tag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const current = useMemo(
    () => filtered.slice(start, start + PAGE_SIZE),
    [filtered, start],
  );

  // totalPages 変化時に page を妥当範囲へ補正
  useEffect(() => {
    setPage((p) => Math.min(Math.max(1, p), totalPages));
  }, [totalPages]);

  // ページ変更時にトップへ（見た目の“入れ替え”感が出る）
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const ORIGIN = import.meta.env.VITE_SITE_URL ?? window.location.origin;
  return (
    <>
      <title>Books / Works | はたなかいざーぶるわりー</title>
      <meta name="description" content="頒布物の一覧と検索" />
      <meta property="og:url" content={`${ORIGIN}/books`} />
      <main className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Books / Works</h1>
              <p className="text-sm text-slate-600 mt-1">頒布物の一覧と検索</p>
            </div>
            <Link
              to="/"
              className="rounded border px-3 py-1 text-sm text-blue-600 hover:bg-blue-50"
            >
              ← ホーム
            </Link>
          </div>

          {/* フィルタ行 */}
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            <input
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setPage(1);
              }}
              placeholder="タイトル・説明で検索"
              className="w-full md:w-1/2 rounded-lg border px-3 py-2 text-sm"
            />

            {/* 在庫/状態 */}
            <select
              value={status}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setStatus(e.target.value as SaleStatus | "all");
                setPage(1);
              }}
              className="rounded-lg border px-3 py-2 text-sm"
            >
              <option value="all">すべての状態</option>
              {Object.entries(STATUS_LABEL).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>

            {/* タグ */}
            <select
              value={tag}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setTag(e.target.value as string | "all");
                setPage(1);
              }}
              className="rounded-lg border px-3 py-2 text-sm"
            >
              <option value="all">すべてのタグ</option>
              {tags.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* 件数 */}
          <div className="mb-3 text-sm text-slate-600">
            全 {filtered.length} 件
          </div>

          {current.length === 0 ? (
            <div className="rounded-xl border p-6 text-center text-slate-600">
              条件に一致する本がありません。
            </div>
          ) : (
            <div key={currentPage} className="grid gap-6 md:grid-cols-3">
              {current.map((b: Book) => (
                <BookCard key={b.id ?? `${b.title}-${b.status}`} {...b} />
              ))}
            </div>
          )}

          {/* ページャ */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                type="button"
                className="rounded border px-3 py-1 text-sm disabled:opacity-50"
                onClick={() => setPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                前へ
              </button>
              <span className="text-sm">
                {currentPage} / {totalPages}
              </span>
              <button
                type="button"
                className="rounded border px-3 py-1 text-sm disabled:opacity-50"
                onClick={() => setPage(currentPage + 1)}
                disabled={currentPage === totalPages}
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
