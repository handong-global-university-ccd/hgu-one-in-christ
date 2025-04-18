import Title from "./Title";
import { DOMAIN } from "../../constants/paths";
import { motion } from "framer-motion";
import { useMousePosition } from "../cursor/Context";

const MainPoster = () => {
  const { bigEnter, defaultEnter } = useMousePosition();

  return (
    <motion.div
      onMouseEnter={bigEnter}
      onMouseLeave={defaultEnter}
      className={`w-full md:w-[90%] flex flex-col items-center mb-219 sm:mb-144`}
    >
      <Title>MAIN POSTER</Title>
      <img
        src={`${DOMAIN}images/about/mainPoster.webp`}
        className={`w-500 sm:w-full`}
      />
    </motion.div>
  );
};

export default MainPoster;
