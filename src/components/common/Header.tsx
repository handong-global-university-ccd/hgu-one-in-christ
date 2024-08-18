import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/header/logo.png";
import Button from "../header/Button";

const Header = () => {
  const button_list = [
    {
      id: 1,
      name: "ABOUT",
      link: "/",
    },
    {
      id: 2,
      name: "WORKS",
      link: "/works",
    },
    {
      id: 3,
      name: "DESIGNERS",
      link: "/designers",
    },
  ];

  const location = useLocation();

  return (
    <header className="w-full h-16 flex items-center bg-primary-myBlack ">
      <div className="w-full m-0 mx-auto flex items-center justify-between xl:max-w-myXl">
        <div>
          <Link to="/">
            <img src={logo} alt="one in christ" className="w-logo" />
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
