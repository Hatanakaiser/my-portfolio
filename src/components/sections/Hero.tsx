import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="hero">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
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
            TypeScript × React
            を軸に、イラスト・同人誌・VR/ゲーム試作まで横断して制作しています。学び続け、新しい体験を創るのが好きです。
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#work"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              作品を見る
            </a>
            <a href="#profile" className="px-4 py-2 border rounded">
              プロフィール
            </a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="aspect-video md:aspect-[4/3] rounded-2xl border bg-white shadow-sm grid place-items-center">
            <span className="text-sm text-slate-500">
              Hero Visual / 作品サムネを配置
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
