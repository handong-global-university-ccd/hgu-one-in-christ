import { DOMAIN } from "../../constants/paths";
import { useMousePosition } from "../cursor/Context";
import Title from "./Title";
import { motion } from "framer-motion";

const Developer = () => {
  const { smallEnter, defaultEnter } = useMousePosition();

  return (
    <motion.div
      onMouseEnter={smallEnter}
      onMouseLeave={defaultEnter}
      className={`flex flex-col items-center mb-309`}
    >
      <Title>DEVELOPER</Title>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`flex md:flex-col sm:flex-col gap-72 md:gap-20 sm:gap-6 justify-center items-center mt-21`}
      >
        <img
          src={`${DOMAIN}images/about/pardLogo.webp`}
          alt="pard-logo"
          className={`w-90 h-auto`}
        />
        <p
          className={`font-Pretendard_Light text-primary-white text-22 md:text-18 sm:text-14 leading-[30px] tracking-[-1px] `}
        >
          박민지
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Developer;
