export default function Profile() {
  return (
    <section id="profile" className="scroll-mt-24 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Profile</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="aspect-square rounded-2xl border bg-slate-50 grid place-items-center">
              <span className="text-sm text-slate-500">プロフィール画像</span>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-2 font-semibold">
              畑中 秀一郎 / Hatanaka Shuichiro
            </h3>
            <p>
              山形大学 工学部 情報・エレクトロニクス学科。ゲーム・VR/AI
              の研究/制作に取り組んでいます。趣味はポケモン、マンガ、モンハン。クラブではスキー副部長・学習支援にも所属。
            </p>
            <ul className="list-disc pl-6 text-sm mt-3">
              <li>得意: TypeScript / React / Unity (C#) / C++</li>
              <li>興味: VR音声対話、Live2D、Web ゲーム</li>
              <li>目標: ユーザーの心が動く体験を作ること</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
