import { useLocation } from "react-router";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { useEffect, useRef, useState } from "react";
import { DOMAIN } from "../../constants/paths";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { smallEnter, defaultEnter } = useMousePosition();

  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const mainElement = ref.current;
    if (!mainElement) return;

    const mainTop = mainElement.getBoundingClientRect().top;

    if (mainTop < -200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleUp = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main ref={ref} className="w-full">
        {children}
        <motion.img
          onMouseEnter={smallEnter}
          onMouseLeave={defaultEnter}
          src={`${DOMAIN}images/icon/scrollButton.webp`}
          alt="up-button"
          className={`${
            isVisible ? "fixed" : "hidden"
          } w-50 lg:bottom-[30%] lg:right-150 bottom-[5%] right-[5%]`}
          onClick={handleUp}
        />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
