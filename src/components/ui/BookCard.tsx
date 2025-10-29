// BookCard.tsx
export type SaleStatus =
  | "coming_soon" // 準備中（委託予定）
  | "event_only" // イベント頒布のみ
  | "booth" // Booth 通販中
  | "melonbooks" // メロンブックス委託中
  | "toranoana" // とらのあな委託中
  | "sold_out"; // 完売

export type Channel =
  | { type: "event"; place?: string; date?: string }
  | { type: "booth"; url: string }
  | { type: "melonbooks"; url: string }
  | { type: "toranoana"; url: string };

export type Book = {
  title: string;
  desc: string;
  image: string;
  status: SaleStatus;
  channels?: Channel[]; // 販売チャネルの配列（URLは後で入れる）
  tag?: string;
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
  title,
  desc,
  image,
  status,
  channels,
  tag,
}: Book) {
  const link = primaryLink(channels);

  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow transition">
      <div className="aspect-[3/4] w-full overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        {/* ステータスバッジ */}
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
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">{desc}</p>

        {/* アクション */}
        <div className="mt-3">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-sm text-blue-600 hover:underline"
            >
              通販ページへ →
            </a>
          ) : status === "event_only" ? (
            <span className="inline-block text-sm text-slate-600">
              次回イベントで頒布予定
            </span>
          ) : status === "coming_soon" ? (
            <span className="inline-block text-sm text-slate-600">
              委託準備中（公開までお待ちください）
            </span>
          ) : status === "sold_out" ? (
            <span className="inline-block text-sm text-slate-500">
              再版検討中
            </span>
          ) : (
            <span className="inline-block text-sm text-slate-500">
              情報未設定
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
