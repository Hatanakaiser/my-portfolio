export type EventType =
  | "event"
  | "release"
  | "restock"
  | "notice"
  | "join"
  | "progress"
  | "report";

export type NewsItem = {
  id: string; // 一意なID(年-季節-番号)
  date: string; // ISO形式 "2025-12-30"
  title: string;
  type: EventType; // 種別(event/release/notice/restock/etc)
  place?: string; // イベント会場 / 配置
  link?: string; // 詳細や通販リンク
  body?: string; // 補足テキスト
  badge?: string; // 任意のラベル（新刊/委託など）
};
// event	  イベント参加	同人イベントへのサークル参加（配置情報など）
// release	販売/配信	書籍やゲームの新規販売、デジタル配信開始
// restock	在庫補充	物理的な在庫の補充について（通販・店舗など）
// notice	  企画開始報告	制作企画の立ち上げに関する告知や、重大な発表
// join	    合同誌・寄稿	合同誌、アンソロジー、外部企画への参加・寄稿に関する告知
// progress	制作進捗報告	制作中の書籍やゲームの具体的な進捗状況の報告
// report	  活動報告/雑記	定期的な活動まとめ、サイト更新、その他広範な報告
export const newsItems: NewsItem[] = [
  {
    id: "2025s-01",
    date: "2025-06-26",
    title: "AqoursFinale のぼり企画参加",
    type: "join",
    badge: "参加予定",
    body: "レタス720さん主催：【Aqours Finale】Aqours「大集合」のぼり企画！【あなたのイラストをのぼりにします！】へ参加しました。",
  },
  {
    id: "2025s-02",
    date: "2025-07-22",
    title: "スクミュイラスト合同『MUSICAL FESTIVAL Ⅱ』へイラスト寄稿",
    type: "join",
    body: "レタス720さん主催：スクミュイラスト合同『MUSICAL FESTIVAL Ⅱ』【スクミュオンリー２】へ参加しました。僕ラブ47で頒布予定です。",
  },
  {
    id: "2025o-01",
    date: "2025-11-15",
    title: "Webゲーム制作企画始動",
    type: "notice",
    body: "新たなWebゲーム制作企画を始動しました。詳細は追ってお知らせします。",
  },
  {
    id: "2025o-02",
    date: "2025-11-28",
    title: "僕ラブ48 サークル参加申し込み",
    type: "event",
    badge: "予定",
    body: "僕らのラブライブ！48（僕ラブ48）へサークル参加申し込みを行いました。",
  },
];
