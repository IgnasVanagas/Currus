import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useReducedMotion } from "framer-motion";
const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};
export const AnimatedSection = ({ id, children, className }) => {
    const reduceMotion = useReducedMotion();
    return (_jsx("section", { id: id, className: className, children: _jsx(motion.div, { className: "container", initial: "hidden", whileInView: "visible", viewport: { margin: "-120px 0px", once: false, amount: 0.3 }, transition: { duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }, variants: variants, children: children }) }));
};
