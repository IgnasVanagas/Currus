import { HiOutlineSparkles, HiOutlineBeaker, HiOutlineCube, HiOutlineHeart, HiOutlineTruck, HiOutlineShieldCheck, HiOutlineLifebuoy, HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
const iconMap = {
    insights: HiOutlineSparkles,
    design: HiOutlineBeaker,
    build: HiOutlineCube,
    care: HiOutlineHeart,
    logistics: HiOutlineTruck,
    quality: HiOutlineShieldCheck,
    support: HiOutlineLifebuoy
};
export const getProcessIcon = (type) => iconMap[type] ?? HiOutlineArrowPathRoundedSquare;
