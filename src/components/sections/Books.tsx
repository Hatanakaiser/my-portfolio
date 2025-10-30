import { Link } from "react-router-dom";
import BookCard from "../ui/BookCard";
import { books } from "../../data/books";
import { motion } from "framer-motion";
import { staggerContainer, cardAppear } from "@/lib/motion";

export default function Books() {
  return (
    <section
      id="books"
      className="scroll-mt-24 border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Books</h2>
          <Link to="/books" className="text-sm text-blue-600 hover:underline">
            すべて見る →
          </Link>
        </div>
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {books.map((b) => (
            <motion.div
              key={b.id ?? `${b.title}-${b.status}`}
              variants={cardAppear}
            >
              <BookCard {...b} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
