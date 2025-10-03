import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

type AnimatedSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export const AnimatedSection = ({ id, children, className }: AnimatedSectionProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={className}>
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-120px 0px", once: false, amount: 0.3 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }}
        variants={variants}
      >
        {children}
      </motion.div>
    </section>
  );
};
