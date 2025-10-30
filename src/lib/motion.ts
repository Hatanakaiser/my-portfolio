import type { Variants, Transition } from "framer-motion";

export const transitionFast: Transition = {
  duration: 0.35,
  ease: [0.22, 1, 0.36, 1],
};
export const transitionBase: Transition = {
  duration: 1.5,
  ease: [0.22, 1, 0.36, 1],
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: transitionBase },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: transitionBase },
};

export const staggerContainer = (
  delayChildren = 0.05,
  stagger = 0.06,
): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});
// 🧩 カード専用：出現＆ホバーの“気持ち良さ”
export const cardAppear: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: transitionBase },
};

export const pop: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.15, transition: transitionFast },
  tap: { scale: 0.98, transition: transitionFast },
};
