import { useMemo } from "react";
import EventCard from "../ui/EventCard";
import { newsItems } from "../../data/events";
import { motion } from "framer-motion";
import { staggerContainer, cardAppear } from "../../lib/motion";
import { Link } from "react-router-dom";

export default function News() {
  // 日付降順で並べ替えし、最新3件だけ表示
  const latest = useMemo(() => {
    return [...newsItems]
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, 3);
  }, []);

  return (
    <section
      id="news"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-6"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">News</h2>
              <p className="text-sm text-slate-600 mt-1">
                直近の参加予定・新刊情報・お知らせ
              </p>
            </div>

            {/*「すべて見る」*/}
            <Link
              to="/all-news"
              className="text-sm text-blue-600 hover:underline"
            >
              すべて見る →
            </Link>
          </div>

          {/* 最新3件だけをタイムライン表示 */}
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-slate-200 md:left-1/2" />
            <div className="space-y-6">
              {latest.map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={cardAppear}
                  className={`relative md:grid md:grid-cols-2 md:gap-6 ${i % 2 === 0 ? "md:pl-0 md:pr-8" : "md:pl-8 md:pr-0"}`}
                >
                  <div
                    className={`absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-slate-400 md:left-1/2`}
                  />
                  <div
                    className={`${i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}
                  >
                    <EventCard {...item} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
