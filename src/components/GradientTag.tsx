import { ReactNode } from "react";
import { motion } from "framer-motion";

type GradientTagProps = {
  children: ReactNode;
};

export const GradientTag = ({ children }: GradientTagProps) => (
  <motion.span
    className="gradient-tag"
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
  >
    {children}
  </motion.span>
);
