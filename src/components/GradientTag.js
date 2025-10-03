import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const GradientTag = ({ children }) => (_jsx(motion.span, { className: "gradient-tag", initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 }, children: children }));
