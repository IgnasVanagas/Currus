import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";
const fallbackIcon = HiOutlineArrowUpRight;
export const IconBadge = ({ icon: Icon = fallbackIcon, children }) => (_jsxs(motion.div, { className: "icon-badge", initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.4 }, transition: { duration: 0.5 }, children: [_jsx("div", { className: "icon-circle", children: _jsx(Icon, { size: 22, strokeWidth: 1.4 }) }), _jsx("span", { children: children })] }));
