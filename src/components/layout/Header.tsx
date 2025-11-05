import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [open, setOpen] = useState(false);
  // const { pathname } = useLocation();

  // HashLink は ルートを跨いでも /#id に遷移＆スクロールしてくれる
  const NavLink = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => (
    <HashLink
      smooth
      to={to}
      className="px-3 py-1.5 rounded hover:bg-slate-100"
      onClick={() => setOpen(false)}
    >
      {children}
    </HashLink>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <nav className="font-black tracking-tight text-xl md:text-2xl">
          <NavLink to="/#top">はたなかいざー醸造所</NavLink>
        </nav>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/#news">News</NavLink>
          <NavLink to="/#books">Books</NavLink>
          <NavLink to="/#gallery">Gallery</NavLink>
          <NavLink to="/#work">Work</NavLink>
          <NavLink to="/#profile">Profile</NavLink>
          <NavLink to="/#contact">Contact</NavLink>
          {/* 一覧ページへは通常のLinkでOK */}
          {/* <Link to="/all-news" className="px-3 py-1.5 rounded hover:bg-slate-100">News一覧</Link> */}
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
            <NavLink to="/#news">News</NavLink>
            <NavLink to="/#books">Books</NavLink>
            <NavLink to="/#gallery">Gallery</NavLink>
            <NavLink to="/#work">Work</NavLink>
            <NavLink to="/#profile">Profile</NavLink>
            <NavLink to="/#contact">Contact</NavLink>
            {/* <Link to="/all-news" className="px-3 py-2 text-left hover:bg-slate-50" onClick={() => setOpen(false)}>
              News一覧
            </Link> */}
          </div>
        </div>
      )}
    </header>
  );
}
