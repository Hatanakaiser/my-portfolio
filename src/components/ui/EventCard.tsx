import type { NewsItem } from "../../data/events";

const TypeStyle: Record<NewsItem["type"], string> = {
  event: "bg-indigo-600",
  release: "bg-emerald-600",
  restock: "bg-amber-600",
  notice: "bg-slate-700",
};

export default function EventCard({
  date,
  title,
  type,
  place,
  link,
  body,
  badge,
}: NewsItem) {
  return (
    <div className="relative rounded-2xl border bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span
          className={`inline-block rounded-full px-2 py-0.5 text-xs text-white ${TypeStyle[type]}`}
        >
          {type}
        </span>
        {badge && (
          <span className="inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs">
            {badge}
          </span>
        )}
        <time className="ml-auto text-xs text-slate-500">{date}</time>
      </div>

      <h3 className="mt-2 font-semibold">{title}</h3>

      {place && (
        <div className="mt-1 text-sm text-slate-600">場所：{place}</div>
      )}

      {body && (
        <p className="mt-2 text-sm text-slate-700 leading-relaxed">{body}</p>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block text-sm text-blue-600 hover:underline"
        >
          詳細・通販へ →
        </a>
      )}
    </div>
  );
}
