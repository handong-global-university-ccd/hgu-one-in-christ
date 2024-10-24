import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const Title = ({ children }: Props) => {
  const { smallEnter, defaultEnter } = useMousePosition();

  return (
    <motion.div
      onMouseEnter={smallEnter}
      onMouseLeave={defaultEnter}
      className={`w-full font-Organetto_ExtBold text-25 sm:text-15 text-primary-white leading-[120px] text-center mb-50`}
    >
      {children}
    </motion.div>
  );
};

export default Title;
