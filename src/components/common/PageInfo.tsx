import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const PageInfo = ({ children }: Props) => {
  const { bigEnter, defaultEnter } = useMousePosition();

  return (
    <motion.div
      onMouseEnter={bigEnter}
      onMouseLeave={defaultEnter}
      className={`flex justify-center items-center
		w-screen h-[99px] lg:fixed md:absolute sm:absolute z-50 top-[64px] bg-primary-white 
		sm:w-[90%] sm:h-[63px] sm:mt-[19px]`}
    >
      <p
        className={`text-center text-primary-black font-Organetto_ExtBold text-[24px] sm:text-[15px]`}
      >
        {children}
      </p>
    </motion.div>
  );
};

export default PageInfo;
