import { Link, useLocation } from "react-router-dom";
import Button from "../header/Button";
import { DOMAIN, PATHS } from "../../constants/paths";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    setToggleOpen(false);
  }, [location]);

  const handleToggle = () => {
    setToggleOpen(!toggleOpen);
  };

  const handleSessionStorage = () => {
    setToggleOpen(!toggleOpen);
    sessionStorage.clear();
  };

  return (
    <>
      <motion.header
        onMouseEnter={smallEnter}
        onMouseLeave={defaultEnter}
        className={`z-[100] fixed top-0 w-full h-64 flex justify-center items-center ${
          toggleOpen ? "" : "md:border-b sm:border-b"
        } lg:backdrop-blur-sm md:bg-primary-black sm:bg-primary-black`}
      >
        <div className="w-full flex items-center justify-between lg:max-w-lg md:w-[90%] sm:w-[90%]">
          <Link
            to={PATHS.HOME}
            onClick={() => {
              sessionStorage.clear();
            }}
          >
            <img
              src={`${DOMAIN}images/header/logo.webp`}
              alt="one in christ"
              className="w-218 sm:w-157"
            />
          </Link>
          <div className="md:hidden sm:hidden flex items-center gap-x-48">
            {button_list.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                onClick={() => sessionStorage.clear()}
              >
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
                className={`w-16`}
                onClick={handleToggle}
              />
            ) : (
              <img
                src={`${DOMAIN}images/header/hamburger.webp`}
                className={`w-21`}
                onClick={handleToggle}
              />
            )}
          </div>
        </div>
      </motion.header>
      {toggleOpen && (
        <div
          className={`lg:hidden fixed z-[100] w-full top-64 bg-primary-black border-b pb-10`}
        >
          {button_list.map((item) => (
            <div key={item.id}>
              <Link key={item.id} to={item.link} onClick={handleSessionStorage}>
                <NavButtonMobile focus={location.pathname.includes(item.link)}>
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
