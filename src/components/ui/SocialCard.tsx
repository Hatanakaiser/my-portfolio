import {
  Github,
  Twitter,
  Mail,
  ShoppingBag,
  Image,
  FileText,
} from "lucide-react";

export type Social = {
  label: string;
  href: string;
  icon: "twitter" | "github" | "mail" | "booth" | "pixiv" | "form";
};

const IconMap = {
  twitter: Twitter,
  github: Github,
  mail: Mail,
  booth: ShoppingBag, // Boothは買い物袋アイコンで表現
  pixiv: Image, // Pixivは画像アイコンで表現
  form: FileText, // 依頼フォーム等
} as const;

export default function SocialCard({ label, href, icon }: Social) {
  const Icon = IconMap[icon];
  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      <div className="rounded-2xl border h-full transition hover:translate-y-[-2px] bg-white">
        <div className="p-4 flex items-center gap-3">
          <Icon className="h-5 w-5" />
          <span className="font-medium">{label}</span>
        </div>
      </div>
    </a>
  );
}
