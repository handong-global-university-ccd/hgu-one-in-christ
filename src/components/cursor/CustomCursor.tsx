import { motion } from "framer-motion";
import { useMousePosition } from "./Context";

const CustomCursor = () => {
  const { hoverNav, variants } = useMousePosition();

  return (
    <>
      <motion.div
        className={`fixed left-0 top-0 w-[15px] h-[15px] p-[1.5vw] rounded-full bg-white z-20 pointer-events-none opacity-90`}
        animate={hoverNav}
        transition={{ ease: "linear", duration: 0.15 }}
        variants={variants}
      />
    </>
  );
};
export default CustomCursor;
