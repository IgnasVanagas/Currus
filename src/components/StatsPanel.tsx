import { motion } from "framer-motion";
import { Stat } from "@data/content";

type StatsPanelProps = {
  stats: Stat[];
};

export const StatsPanel = ({ stats }: StatsPanelProps) => (
  <div className="stats-panel">
    {stats.map((item, index) => (
      <motion.div
        key={item.label}
        className="stat-card"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <span className="stat-value">{item.value}</span>
        <span className="stat-label">{item.label}</span>
      </motion.div>
    ))}
  </div>
);
