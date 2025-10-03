import { IconType } from "react-icons";
import {
  HiOutlineSparkles,
  HiOutlineBeaker,
  HiOutlineCube,
  HiOutlineHeart,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineLifebuoy,
  HiOutlineArrowPathRoundedSquare
} from "react-icons/hi2";
import type { StepIcon } from "@data/content";

const iconMap: Record<StepIcon, IconType> = {
  insights: HiOutlineSparkles,
  design: HiOutlineBeaker,
  build: HiOutlineCube,
  care: HiOutlineHeart,
  logistics: HiOutlineTruck,
  quality: HiOutlineShieldCheck,
  support: HiOutlineLifebuoy
};

export const getProcessIcon = (type: StepIcon): IconType => iconMap[type] ?? HiOutlineArrowPathRoundedSquare;
