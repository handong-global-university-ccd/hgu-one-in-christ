import { DOMAIN } from "../../constants/paths";
import Title from "./Title";
import { motion } from "framer-motion";

const Developer = () => {
  return (
    <div className={`flex flex-col items-center mb-[309px]`}>
      <Title>DEVELOPER</Title>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`flex md:flex-col sm:flex-col gap-[72px] md:gap-[20px] sm:gap-[6px] justify-center items-center mt-[21px]`}
      >
        <img
          src={`${DOMAIN}images/about/pardLogo.webp`}
          alt="pard-logo"
          className={`w-[96px] h-auto`}
        />
        <p
          className={`font-Pretendard_Light text-primary-white text-[22px] md:text-[18px] sm:text-[14px] leading-[30px] tracking-[-1px] `}
        >
          박민지
        </p>
      </motion.div>
    </div>
  );
};

export default Developer;
