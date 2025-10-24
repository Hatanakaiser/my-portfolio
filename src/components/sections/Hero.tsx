import { motion } from "framer-motion";
import { highlight } from "../../data/highlights";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="hero">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* バナー（最新刊 / 次回イベント） */}
        <div className="mb-6 grid gap-3 md:grid-cols-2">
          {/* 最新刊 */}
          <a
            href={highlight.latestBook.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border bg-white p-4 shadow-sm hover:shadow transition block"
          >
            <div className="text-xs font-medium text-emerald-700">最新刊</div>
            <div className="mt-1 text-lg font-semibold">
              {highlight.latestBook.title}
            </div>
            <div className="text-slate-600 text-sm">
              {highlight.latestBook.sub}
            </div>
            <div className="mt-2 inline-block text-sm text-emerald-700 underline">
              通販ページへ →
            </div>
          </a>

          {/* 次回イベント */}
          <a
            href={highlight.nextEvent.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border bg-white p-4 shadow-sm hover:shadow transition block"
          >
            <div className="text-xs font-medium text-indigo-700">次回参加</div>
            <div className="mt-1 text-lg font-semibold">
              {highlight.nextEvent.name}
            </div>
            <div className="text-slate-600 text-sm">
              {highlight.nextEvent.date} ／ {highlight.nextEvent.place}
            </div>
            <div className="mt-2 inline-block text-sm text-indigo-700 underline">
              詳細を見る →
            </div>
          </a>
        </div>

        {/* ヒーロー */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Make. Play. Repeat.
            </motion.h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              同人誌・イラスト・VR試作を中心に活動するサークル
              <span className="font-semibold"> Nova Hatanakaiser</span> です。
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#books"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                頒布物を見る
              </a>
              <a href="#news" className="px-4 py-2 border rounded">
                お知らせ
              </a>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="aspect-video md:aspect-[4/3] rounded-2xl border bg-white shadow-sm grid place-items-center">
              <span className="text-sm text-slate-500">
                表紙画像やサークルビジュアルを配置
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
