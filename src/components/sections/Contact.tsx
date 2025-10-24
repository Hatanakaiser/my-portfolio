import SocialCard from "../ui/SocialCard";
import { socials } from "../../data/socials";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact & Links</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {socials.map((s) => (
            <SocialCard key={s.href} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
