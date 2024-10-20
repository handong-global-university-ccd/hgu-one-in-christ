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
		w-screen h-99 lg:fixed md:absolute sm:absolute z-50 top-64 bg-primary-white 
		sm:w-[90%] sm:h-63 sm:mt-19`}
    >
      <p
        className={`text-center text-primary-black font-Organetto_ExtBold text-24 sm:text-15`}
      >
        {children}
      </p>
    </motion.div>
  );
};

export default PageInfo;
