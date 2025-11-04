import { motion } from "framer-motion";
import { pop } from "../../lib/motion";

type Props = {
  src: string;
  alt: string;
  onClick?: () => void;
};

export default function GalleryImage({ src, alt, onClick }: Props) {
  return (
    <motion.div
      variants={pop}
      whileHover="hover"
      whileTap="tap"
      className="relative"
    >
      <button
        type="button"
        onClick={onClick}
        className="group relative block overflow-hidden rounded-xl border bg-slate-50"
        aria-label={`拡大表示：${alt}`}
      >
        <img
          src={src}
          alt={alt}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="pointer-events-none absolute inset-0 ring-0 ring-blue-400/0 group-focus-visible:ring-4 rounded-xl transition" />
      </button>
    </motion.div>
  );
}
