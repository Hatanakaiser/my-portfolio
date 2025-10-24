import { useState } from "react";
import {
  Menu,
  X,
  Github,
  Twitter,
  Mail,
  Image as ImageIcon,
  BookOpen,
  UserRound,
} from "lucide-react";
import { motion } from "framer-motion";
import "./index.css";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-black tracking-tight text-xl md:text-2xl">
            Nova Hatanakaiser
          </a>
          <nav className="hidden md:flex items-center gap-2">
            <button onClick={() => scrollToId("#work")}>Work</button>
            <button onClick={() => scrollToId("#profile")}>Profile</button>
            <button onClick={() => scrollToId("#contact")}>Contact</button>
          </nav>
          <button className="md:hidden" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200">
            <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col">
              <button onClick={() => scrollToId("#work")}>Work</button>
              <button onClick={() => scrollToId("#profile")}>Profile</button>
              <button onClick={() => scrollToId("#contact")}>Contact</button>
            </div>
          </div>
        )}
      </header>

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
              を軸に、イラスト・同人誌・VR/ゲーム試作まで横断して制作しています。
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => scrollToId("#work")}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                作品を見る
              </button>
              <button
                onClick={() => scrollToId("#profile")}
                className="px-4 py-2 border rounded"
              >
                プロフィール
              </button>
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

      <section
        id="work"
        className="scroll-mt-24 border-t border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-6">
            <ImageIcon className="h-5 w-5" />
            <h2 className="text-2xl md:text-3xl font-bold">Work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold">イラスト作品集</h3>
              <p>CLIP STUDIO / Procreate などで制作したイラストを厳選。</p>
            </div>
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold">同人誌・書籍</h3>
              <p>ラブライブ！二次創作・技術同人などの頒布物まとめ。</p>
            </div>
            <div className="border rounded-xl p-4">
              <h3 className="font-semibold">VR/ゲーム試作</h3>
              <p>Unity / Web のプレイアブル・動画デモ。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="scroll-mt-24 border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-6">
            <UserRound className="h-5 w-5" />
            <h2 className="text-2xl md:text-3xl font-bold">Profile</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-square rounded-2xl border bg-slate-50 grid place-items-center">
              <span className="text-sm text-slate-500">プロフィール画像</span>
            </div>
            <div className="md:col-span-2">
              <h3 className="font-semibold mb-2">
                畑中 秀一郎 / Hatanaka Shuichiro
              </h3>
              <p>
                山形大学 工学部 情報・エレクトロニクス学科。ゲーム・VR/AI
                の研究/制作に取り組んでいます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-5 w-5" />
            <h2 className="text-2xl md:text-3xl font-bold">Contact & Links</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <a
              href="https://x.com/HataNaka_Empr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border rounded-xl p-4 hover:bg-slate-50"
            >
              <Twitter /> <span>X (Twitter)</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border rounded-xl p-4 hover:bg-slate-50"
            >
              <Github /> <span>GitHub</span>
            </a>
            <a
              href="mailto:t223301@st.yamagata-u.ac.jp"
              className="flex items-center gap-3 border rounded-xl p-4 hover:bg-slate-50"
            >
              <Mail /> <span>Mail</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 text-center py-6 text-sm text-slate-600">
        Nova Hatanakaiser © {new Date().getFullYear()} All rights reserved.
      </footer>
    </>
  );
}

export default App;
