import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useScroll } from "framer-motion";
export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    return (_jsx(motion.div, { className: "scroll-progress", style: { scaleX: scrollYProgress }, role: "presentation", "aria-hidden": "true" }));
};
