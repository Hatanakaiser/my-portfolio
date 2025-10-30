import type { ElementType, ReactNode } from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../lib/motion";

type Props = {
  as?: ElementType; // ← JSX.IntrinsicElements をやめて ElementType に
  children: ReactNode;
  amount?: number;
  className?: string;
};

export default function Reveal({
  as = "div",
  children,
  amount = 0.2,
  className,
}: Props) {
  const Comp = as as ElementType;
  const M = motion(Comp); // ← motion(Component) で動的タグを型安全に

  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={slideUp}
    >
      {children}
    </M>
  );
}
