import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const scrollToId = (id: string): void => {
    const el = document.querySelector<HTMLElement>(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-black tracking-tight text-xl md:text-2xl">
          Nova Hatanakaiser
        </a>

        <nav className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollToId("#work")}
            className="px-3 py-1.5 rounded hover:bg-slate-100"
          >
            Work
          </button>
          <button
            onClick={() => scrollToId("#profile")}
            className="px-3 py-1.5 rounded hover:bg-slate-100"
          >
            Profile
          </button>
          <button
            onClick={() => scrollToId("#contact")}
            className="px-3 py-1.5 rounded hover:bg-slate-100"
          >
            Contact
          </button>
        </nav>

        <button
          className="md:hidden p-2 rounded hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="mx-auto max-w-6xl px-4 py-2 flex flex-col">
            <button
              onClick={() => {
                setOpen(false);
                scrollToId("#work");
              }}
              className="px-3 py-2 text-left hover:bg-slate-50"
            >
              Work
            </button>
            <button
              onClick={() => {
                setOpen(false);
                scrollToId("#profile");
              }}
              className="px-3 py-2 text-left hover:bg-slate-50"
            >
              Profile
            </button>
            <button
              onClick={() => {
                setOpen(false);
                scrollToId("#contact");
              }}
              className="px-3 py-2 text-left hover:bg-slate-50"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
