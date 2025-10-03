import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const StatsPanel = ({ stats }) => (_jsx("div", { className: "stats-panel", children: stats.map((item, index) => (_jsxs(motion.div, { className: "stat-card", initial: { opacity: 0, y: 12 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.08 }, viewport: { once: true, amount: 0.4 }, children: [_jsx("span", { className: "stat-value", children: item.value }), _jsx("span", { className: "stat-label", children: item.label })] }, item.label))) }));
