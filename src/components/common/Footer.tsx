import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

const Footer = () => {
  const { middleEnter, defaultEnter } = useMousePosition();

  return (
    <motion.div
      onMouseEnter={middleEnter}
      onMouseLeave={defaultEnter}
      className={`w-full  border-t flex justify-center items-center py-35 sm:py-20 
				text-20 md:text-15 sm:text-10`}
    >
      <div
        className={`w-[90%] lg:w-full flex justify-between 
				text-primary-white 
			lg:max-w-lg`}
      >
        <div className={`flex flex-col font-Pretendard_SemiBold`}>
          <p>한동대학교 콘텐츠융합디자인학부</p>
          <p>제 26회 졸업전시</p>
          <p>2024 DEGREE SHOW</p>
        </div>
        <div className={`flex flex-col font-Pretendard_Light`}>
          <div className={`flex gap-17`}>
            <p className={`font-Pretendard_SemiBold`}>일시</p>
            <p>2024.10.21-2024.10.28</p>
          </div>
          <div className={`flex gap-17`}>
            <p className={`font-Pretendard_SemiBold`}>장소</p>
            <p>한동대학교 김영길 그레이스 스쿨</p>
          </div>
          <p
            className={`text-12 md:text-9 sm:text-6 text-primary-white/60 mt-6 lg:mt-9`}
          >
            ⓒ 2024. Handong Global University CCD. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
