export default function Profile() {
  return (
    <section
      id="profile"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Profile</h2>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* プロフィール画像 */}
          <div className="md:col-span-1">
            <div className="aspect-square rounded-2xl overflow-hidden border bg-slate-50 shadow-sm">
              <img
                src="/images/profile.webp"
                alt="ハタナカ（Hatanaka）のプロフィール写真"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* テキストエリア */}
          <div className="md:col-span-2">
            <h3 className="mb-2 font-semibold">ハタナカ/Hatanaka</h3>
            <p>
              山形大学 工学部
              情報・エレクトロニクス学科。ゲーム・VR/AIの研究/制作に取り組んでいます。
              <br />
              趣味はポケモン、マンガ、モンハン。
            </p>

            <ul className="list-disc pl-6 text-sm mt-3 space-y-1">
              <li>得意分野：TypeScript / React / Unity (C#) / C++</li>
              <li>関心領域：VR音声対話・Live2D・Webゲーム</li>
              <li>目標：ユーザーの心を動かす体験を作ること</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
