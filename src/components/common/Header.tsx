import { Link, useLocation } from "react-router-dom";
import Button from "../header/Button";
import { DOMAIN, PATHS } from "../../constants/paths";
import { useState } from "react";
import NavButtonMobile from "../header/NavButtonMobile";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

const button_list = [
  {
    id: 1,
    name: "ABOUT",
    link: PATHS.ABOUT,
  },
  {
    id: 2,
    name: "WORKS",
    link: PATHS.WORKS,
  },
  {
    id: 3,
    name: "DESIGNERS",
    link: PATHS.DESIGNERS,
  },
];

const Header = () => {
  const { smallEnter, defaultEnter } = useMousePosition();
  const location = useLocation();
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleToggle = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <>
      <motion.header
        onMouseEnter={smallEnter}
        onMouseLeave={defaultEnter}
        className={`z-[100] fixed top-0 w-full h-16 flex justify-center items-center ${
          toggleOpen ? "" : "md:border-b sm:border-b"
        } lg:backdrop-blur-sm md:bg-primary-black sm:bg-primary-black`}
      >
        <div className="w-full flex items-center justify-between lg:max-w-lg md:w-[90%] sm:w-[90%]">
          <Link to={PATHS.HOME}>
            <img
              src={`${DOMAIN}images/header/logo.webp`}
              alt="one in christ"
              className="w-[13.625rem] sm:w-[157px]"
            />
          </Link>
          <div className="md:hidden sm:hidden flex items-center gap-x-12">
            {button_list.map((item) => (
              <Link key={item.id} to={item.link}>
                <Button focus={location.pathname.includes(item.link)}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
          <div className="lg:hidden">
            {toggleOpen ? (
              <img
                src={`${DOMAIN}images/header/closeIcon.webp`}
                className={`w-[16px]`}
                onClick={handleToggle}
              />
            ) : (
              <img
                src={`${DOMAIN}images/header/hamburger.webp`}
                className={`w-[21px]`}
                onClick={handleToggle}
              />
            )}
          </div>
        </div>
      </motion.header>
      {toggleOpen && (
        <div
          className={`lg:hidden fixed z-[100] w-full top-16 bg-primary-black border-b pb-2.5`}
        >
          {button_list.map((item) => (
            <div>
              <Link key={item.id} to={item.link} onClick={handleToggle}>
                <NavButtonMobile focus={location.pathname === item.link}>
                  {item.name}
                </NavButtonMobile>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
