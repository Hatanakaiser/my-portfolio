// --- 置換 or 拡張 ---
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pop } from "../../lib/motion";

export type SaleStatus =
  | "coming_soon"
  | "event_only"
  | "booth"
  | "melonbooks"
  | "toranoana"
  | "sold_out";

export type Channel =
  | { type: "event"; place?: string; date?: string }
  | { type: "booth"; url: string }
  | { type: "melonbooks"; url: string }
  | { type: "toranoana"; url: string };

export type Book = {
  slug: string; // ← 追加：URL用スラッグ
  title: string;
  desc: string;
  image: string;
  status: SaleStatus;
  channels?: Channel[];
  tag?: string;

  // 詳細用（任意）
  pages?: number;
  size?: string; // 例: "B5", "A5"
  price?: number; // 税込円
  samples?: string[]; // サンプル画像
  specs?: string[]; // 箇条書き仕様
  id?: number; // 一意識別子
};

const statusBadge: Record<SaleStatus, { label: string; cls: string }> = {
  coming_soon: { label: "準備中", cls: "bg-amber-500 text-white" },
  event_only: { label: "イベント頒布", cls: "bg-indigo-600 text-white" },
  booth: { label: "Booth 通販中", cls: "bg-emerald-600 text-white" },
  melonbooks: { label: "メロン委託", cls: "bg-green-600 text-white" },
  toranoana: { label: "とらのあな委託", cls: "bg-orange-600 text-white" },
  sold_out: { label: "完売", cls: "bg-slate-400 text-white" },
};

function primaryLink(channels?: Channel[]) {
  if (!channels) return undefined;
  const prio = ["booth", "melonbooks", "toranoana"] as const;
  for (const p of prio) {
    const ch = channels.find((c) => c.type === p);
    if (ch && "url" in ch) return ch.url;
  }
  return undefined;
}

export default function BookCard({
  slug,
  title,
  desc,
  image,
  status,
  channels,
  tag,
}: Book) {
  const link = primaryLink(channels);

  return (
    <motion.div
      variants={pop}
      whileHover="hover"
      whileTap="tap"
      className="relative p-4"
    >
      <div className="border rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow transition">
        <Link
          to={`/books/${slug}`}
          className="aspect-[3/4] w-full overflow-hidden relative block"
        >
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
            loading="lazy"
          />
          <span
            className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-xs font-medium ${statusBadge[status].cls}`}
          >
            {statusBadge[status].label}
          </span>
          {tag && (
            <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-xs border">
              {tag}
            </span>
          )}
        </Link>

        <div className="p-4">
          <Link
            to={`/books/${slug}`}
            className="font-semibold text-lg hover:underline"
          >
            {title}
          </Link>
          <p className="text-sm text-slate-600 mt-1 line-clamp-2">{desc}</p>

          <div className="mt-3 flex items-center gap-4">
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                通販ページへ →
              </a>
            ) : status === "event_only" ? (
              <span className="text-sm text-slate-600">イベント頒布のみ</span>
            ) : status === "coming_soon" ? (
              <span className="text-sm text-slate-600">委託準備中</span>
            ) : status === "sold_out" ? (
              <span className="text-sm text-slate-500">完売</span>
            ) : (
              <span className="text-sm text-slate-500">詳細</span>
            )}

            <Link
              to={`/books/${slug}`}
              className="text-sm text-slate-900 underline-offset-2 hover:underline"
            >
              詳細を見る
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
