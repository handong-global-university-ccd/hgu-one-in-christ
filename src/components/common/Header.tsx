import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/header/logo.png";
import Button from "../header/Button";
import { PATHS } from "../../constants/paths";

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
    <header className="w-full h-16 flex items-center border-b">
      <div className="w-full m-0 mx-auto flex items-center justify-between xl:max-w-Xl">
        <div>
          <Link to={PATHS.HOME}>
            <img src={logo} alt="one in christ" className="w-[13.625rem]" />
          </Link>
        </div>
        <div className="flex items-center gap-x-12">
          {button_list.map((item) => (
            <Link key={item.id} to={item.link}>
              <Button focus={location.pathname === item.link}>
                {item.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
