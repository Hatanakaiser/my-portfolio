export type Work = { title: string; desc: string; tag: string };

export default function WorkCard({ title, desc, tag }: Work) {
  return (
    <div className="rounded-2xl border p-4">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-xs font-medium text-slate-500 border px-2 py-0.5 rounded-full">
          {tag}
        </span>
      </div>
      <div className="aspect-video rounded-xl border bg-slate-50 grid place-items-center mt-3">
        <span className="text-xs text-slate-500">サムネイル</span>
      </div>
      <p className="mt-3 text-sm text-slate-600">{desc}</p>
      <div className="mt-3">
        <button className="text-sm border rounded px-3 py-1 hover:bg-slate-50">
          詳しく
        </button>
      </div>
    </div>
  );
}
