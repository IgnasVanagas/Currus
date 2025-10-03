// import { ReactElement } from "react";

import { IconType } from "react-icons";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const fallbackIcon: IconType = HiOutlineArrowUpRight;

type IconBadgeProps = {
  icon?: IconType;
  children: string;
};

export const IconBadge = ({ icon: Icon = fallbackIcon, children }: IconBadgeProps) => (
  <motion.div
    className="icon-badge"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
  >
    <div className="icon-circle">
      <Icon size={22} strokeWidth={1.4} />
    </div>
    <span>{children}</span>
  </motion.div>
);
