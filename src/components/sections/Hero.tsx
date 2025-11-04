import { motion } from "framer-motion";
import { highlight } from "../../data/highlights";
import Reveal from "../motion/Reveal";
import { staggerContainer, slideUp, pop } from "../../lib/motion";
import visual from "../../assets/visual.webp";

export default function Hero() {
  return (
    <section className="relative overflow-visible" id="hero">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* バナー（最新刊 / 次回イベント） */}
        <div className="mb-6 grid gap-3 md:grid-cols-2">
          {/* 最新刊 */}
          <motion.div variants={pop} whileHover="hover" whileTap="tap">
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
          </motion.div>

          {/* 次回イベント */}
          <motion.div variants={pop} whileHover="hover" whileTap="tap">
            <a
              href={highlight.nextEvent.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border bg-white p-4 shadow-sm hover:shadow transition block"
            >
              <div className="text-xs font-medium text-indigo-700">
                次回参加
              </div>
              <div className="mt-1 text-lg font-semibold">
                {highlight.nextEvent.name}
              </div>
              <div className="text-slate-600 text-sm">
                {highlight.nextEvent.date} / {highlight.nextEvent.place}
              </div>
              <div className="mt-2 inline-block text-sm text-indigo-700 underline">
                詳細を見る →
              </div>
            </a>
          </motion.div>
        </div>

        {/* ヒーロー */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h1
              variants={slideUp}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            >
              A Laboratory for Making Stars.
            </motion.h1>
          </motion.div>
          <Reveal as="div" amount={0.3} className="md:justify-self-end">
            <div className="md:justify-self-end">
              <div className="aspect-video md:aspect-[1/1] rounded-2xl border bg-white shadow-sm overflow-hidden">
                <img
                  src={visual}
                  alt="サークルビジュアル"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
