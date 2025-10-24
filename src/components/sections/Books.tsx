// src/components/sections/Books.tsx
import BookCard from "../ui/BookCard";
import { books } from "../../data/books";

export default function Books() {
  return (
    <section
      id="books"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Books / Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {books.map((b) => (
            <BookCard key={b.title} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}
