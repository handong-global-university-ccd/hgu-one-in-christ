import { motion } from "framer-motion";
import { DOMAIN } from "../../constants/paths";
import { useMousePosition } from "../cursor/Context";
import { useEffect, useRef, useState } from "react";

const AboutMain = () => {
  const { bigEnter, defaultEnter } = useMousePosition();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const fromtoDate = ref.current;
    if (!fromtoDate) return;

    const fromtoDateTop = fromtoDate.getBoundingClientRect().top;
    if (fromtoDateTop < 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.5, type: "spring", duration: 2 },
        opacity: { delay: i * 0.5, duration: 0.01 },
      },
    }),
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`w-full flex justify-center`}>
      <motion.div
        onMouseEnter={bigEnter}
        onMouseLeave={defaultEnter}
        className={`sm:hidden w-full lg:max-w-lg md:w-[90%] mt-163 flex flex-col items-center justify-center text-primary-white mb-176`}
      >
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={`${DOMAIN}images/about/aboutLogo.webp`}
          className={`w-774 mt-154`}
          alt="about_logo"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={`font-Menda_Medium text-17 md:text-14 sm:text-12 text-primary-white leading-30 sm:leading-14 mt-16 sm:mt-20`}
        >
          SO IN CHRIST WE, FORM ONE BODY, BELONGS TO ALL THE OTHERS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={`w-full mt-145 flex justify-between text-18 md:text-14 font-Pretendard_SemiBold`}
        >
          <div className={`w-300 flex flex-col items-center`}>
            <p>경북 포항시 북구 흥해읍 558</p>
            <p>한동대학교 김영길 그레이스스쿨</p>
          </div>
          <div className={`w-300 flex flex-col items-center`}>
            <p>한동대학교 콘텐츠융합디자인학부</p>
            <p>2024 졸업작품전</p>
          </div>
          <div className={`w-300 flex flex-col items-center`}>
            <p>2024.10.21 - 10.28</p>
            <p>09:00 - 18:00</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className={`flex flex-col items-center text-20 md:text-16 font-Pretendard_Light mt-300 tracking-[-1px]`}
        >
          <p>그리스도 안에서 한 몸이 되어 서로 지체가 되었느니라.</p>
          <p>So In Christ We, Form One Body, Belongs To All The Others.</p>
          <p>로마서 12:5</p>
        </motion.div>
        <motion.svg
          width="300"
          height="350"
          viewBox="250 0 100 350"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.line
            x1="300"
            y1="50"
            x2="300"
            y2="300"
            stroke="rgb(255, 255, 255)"
            variants={draw}
            custom={2}
          />
        </motion.svg>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className={`flex flex-col items-center font-Pretendard_SemiBold text-20 md:text-16 leading-33`}
        >
          <p>자신의 능력과 성취에만 집중하여 서로 경쟁하는 사고방식에서</p>
          <p>벗어나 하나님의 뜻을 깨닫는 것은 중요합니다.</p>
          <p>눈이 손이나 발의 역할을 평가하거나 비교하지 않는 것처럼,</p>
          <p>
            우리도 자신이 하는 일의 가치를 과소평가하거나 과대평가해서는
            안됩니다.
          </p>
          <p>
            우리는 각자 다른 역할을 가지고 있지만, 공동체 안에서는 모든 사람이
            서로 필요하고
          </p>
          <p>
            서로 돕는 관계에 있으며, 함께 일함으로 써 공동체는 그리스도 안에서
            하나가 됩니다.
          </p>
        </motion.div>
      </motion.div>
      {/* 모바일 버전 */}
      <div
        className={`hidden sm:flex mt-163 w-[90%] flex-col items-center text-primary-white mb-134`}
      >
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={`${DOMAIN}images/about/aboutMain.webp`}
          className={`hidden sm:block w-full top-[120px]`}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`flex flex-col items-center text-12 font-Pretendard_Regular mt-90`}
        >
          <p>그리스도 안에서 한 몸이 되어 서로 지체가 되었느니라.</p>
          <p>So In Christ We, Form One Body, Belongs To All The Others.</p>
          <p>로마서 12:5</p>
        </motion.div>

        <motion.svg
          width="300"
          height="200"
          viewBox="0 0 100 200"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.line
            x1="50"
            y1="25"
            x2="50"
            y2="175"
            stroke="rgb(255, 255, 255)"
            strokeWidth="0.5"
            variants={draw}
            custom={2}
          />
        </motion.svg>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className={`flex flex-col items-center font-Pretendard_Bold text-12`}
        >
          <p>자신의 능력과 성취에만 집중하여 서로 경쟁하는 사고방식에서</p>
          <p>벗어나 하나님의 뜻을 깨닫는 것은 중요합니다.</p>
          <p>눈이 손이나 발의 역할을 평가하거나 비교하지 않는 것처럼,</p>
          <p>우리도 자신이 하는 일의 가치를 과소평가하거나</p>
          <p>과대평가해서는 안됩니다.</p>
          <p>우리는 각자 다른 역할을 가지고 있지만,</p>
          <p>
            공동체 안에서는 모든 사람이 서로 필요하고 서로 돕는 관계에 있으며,
          </p>
          <p>함께 일함으로 써 공동체는 그리스도 안에서 하나가 됩니다.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMain;
