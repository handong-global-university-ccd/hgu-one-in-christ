import { DOMAIN } from "../../constants/paths";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

const HomeMain = () => {
  const { bigEnter, defaultEnter } = useMousePosition();

  return (
    <motion.div
      onMouseEnter={bigEnter}
      onMouseLeave={defaultEnter}
      className={`w-full flex flex-col items-center gap-[24px] mb-[358px]`}
    >
      <img
        src={`${DOMAIN}images/home/mainLogo.webp`}
        className={`w-full`}
        alt="logo"
      />
      <div
        className={`flex flex-col items-center text-primary-white font-Pretendard_Regular text-[22px] leading-0`}
      >
        {/* 폰트 변경하지 말것 */}
        <p>2024 HANDONG GLOBAL UNIVERSITY</p>
        <p>CONTENTS CONVERGENCE DESIGN GRADUATION EXHIBITION</p>
      </div>
    </motion.div>
  );
};

export default HomeMain;
