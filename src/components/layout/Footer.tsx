export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <span className="font-semibold">はたなかいざー開発室</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:underline" href="#news">
            News
          </a>
          <a className="hover:underline" href="#books">
            Books
          </a>
          <a className="hover:underline" href="#gallery">
            Gallery
          </a>
          <a className="hover:underline" href="#work">
            Work
          </a>
          <a className="hover:underline" href="#profile">
            Profile
          </a>
          <a className="hover:underline" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
