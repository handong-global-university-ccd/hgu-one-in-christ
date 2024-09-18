import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/header/logo.png";
import Button from "../header/Button";
import { PATHS } from "../../constants/paths";
import hamburger from "../../assets/header/hamburger.png";

const button_list = [
  {
    id: 1,
    name: "ABOUT",
    link: PATHS.HOME,
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
  const location = useLocation();

  return (
    <header className="sticky top-0 w-full h-16 flex justify-center items-center border-b backdrop-blur-sm">
      <div className="w-full flex items-center justify-between lg:max-w-lg md:w-[90%] sm:w-[90%]">
        <div>
          <Link to={PATHS.HOME}>
            <img
              src={logo}
              alt="one in christ"
              className="w-[13.625rem] sm:w-[157px]"
            />
          </Link>
        </div>
        <div className="md:hidden sm:hidden flex items-center gap-x-12">
          {button_list.map((item) => (
            <Link key={item.id} to={item.link}>
              <Button focus={location.pathname === item.link}>
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
        <div className="lg:hidden">
          <img src={hamburger} className={`w-[21px]`} />
        </div>
      </div>
    </header>
  );
};

export default Header;
