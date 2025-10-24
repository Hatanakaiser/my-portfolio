import WorkCard from "../ui/WorkCard";
import { works } from "../../data/works";

export default function Work() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {works.map((w) => (
            <WorkCard key={w.title} {...w} />
          ))}
        </div>
      </div>
    </section>
  );
}
