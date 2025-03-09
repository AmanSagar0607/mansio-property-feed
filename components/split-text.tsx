"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  animationFrom: { opacity: number; transform: string };
  animationTo: { opacity: number; transform: string };
  delay: number;
  easing: number[];
}

const SplitText: React.FC<SplitTextProps> = ({ text, className, animationFrom, animationTo, delay, easing }) => {
  return (
    <motion.span
      className={className}
      initial={animationFrom}
      animate={animationTo}
      transition={{ delay: delay / 1000, ease: easing }}
    >
      {text}
    </motion.span>
  );
};

export default SplitText;