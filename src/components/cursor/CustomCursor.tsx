import styled from "styled-components";
import { motion } from "framer-motion";
import { useMousePosition } from "./Context";

const CustomCursor = () => {
  const { hoverNav, variants } = useMousePosition();

  return (
    <>
      <CursorContain
        animate={hoverNav}
        transition={{ ease: "linear", duration: 0.15 }}
        variants={variants}
      />
    </>
  );
};
export default CustomCursor;

const CursorContain = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 15px;
  height: 15px;
  padding: 1.5vw;
  border-radius: 100%100%;
  background-color: white;
  z-index: 20;
  pointer-events: none;
  opacity: 0.9;
`;
