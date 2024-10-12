import { WorkCategory } from "../../models/category.model";
import { useEffect, useState } from "react";
import { DOMAIN } from "../../constants/paths";
import { useMousePosition } from "../cursor/Context";
import { motion } from "framer-motion";

const category_list = [
  {
    id: 1,
    name: "COMMUNICATION DESIGN",
    work: "COMMUNICATION" as WorkCategory,
    imgSrc: `${DOMAIN}images/icon/communication_icon.webp`,
    imgSize: "w-[35.27px] h-[30.23px]",
    color: "text-primary-orange",
  },
  {
    id: 2,
    name: "SERVICE DESIGN",
    work: "SERVICE" as WorkCategory,
    imgSrc: `${DOMAIN}images/icon/service_icon.webp`,
    imgSize: "w-[36.17px] h-[36.17px]",
    color: "text-primary-red",
  },
  {
    id: 3,
    name: "UXUI DESIGN",
    work: "UXUI" as WorkCategory,
    imgSrc: `${DOMAIN}images/icon/uxui_icon.webp`,
    imgSize: "w-[41.69px] h-[26.8px]",
    color: "text-primary-purple",
  },
  {
    id: 4,
    name: "PRODUCT DESIGN",
    work: "PRODUCT" as WorkCategory,
    imgSrc: `${DOMAIN}images/icon/product_icon.webp`,
    imgSize: "w-[29px] h-[38px]",
    color: "text-primary-blue",
  },
];

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<WorkCategory>>;
}

const WorksCategoryButton = ({ category, setCategory }: Props) => {
  const { smallEnter, defaultEnter } = useMousePosition();
  const [currItem, setCurrItem] = useState("0");
  const sessionCategory = sessionStorage.getItem("category");

  useEffect(() => {
    if (!sessionCategory) {
      sessionStorage.setItem("category", "0");
    } else {
      setCurrItem(sessionCategory);
      setCategory(category_list[parseInt(sessionCategory)].work);
    }
  }, []);

  const handleButton = (changeCategory: number) => {
    setCurrItem(changeCategory.toString());
    sessionStorage.setItem("category", changeCategory.toString());
    setCategory(category_list[changeCategory].work);
  };

  const handleButtonMob = (sign: number) => {
    const result = parseInt(currItem) + sign;
    if (result >= 0 && result < category_list.length) {
      console.log(result);
      setCurrItem(result.toString());
      sessionStorage.setItem("category", result.toString());
      setCategory(category_list[result].work);
    }
  };

  return (
    <>
      {/* lg 데스크탑 뷰 카테고리 메뉴 */}
      <motion.div
        onMouseEnter={smallEnter}
        onMouseLeave={defaultEnter}
        className={`md:hidden sm:hidden fixed z-50 top-[177px] flex items-center`}
      >
        <div className={`flex justify-between gap-[22px]`}>
          {category_list.map((item) => (
            <button
              key={item.id}
              className={
                "w-[288px] h-[48px] relative flex items-center justify-center overflow-hidden duration-300 transition-all group"
              }
              onClick={() => handleButton(item.id - 1)}
            >
              <div
                className={`absolute w-[288px] h-[48px] flex justify-center items-center 
							bg-primary-white
							font-Organetto_ExtBold text-[15px] ${item.color}
							duration-300 transition-all transform ${
                category === item.work ? "opacity-100" : "opacity-0"
              }
							group-hover:opacity-100
							group-focus:opacity-100`}
              >
                <p
                  className={`duration-500 transition-all transform -translate-y-full ${
                    category === item.work
                      ? "opacity-100 translate-y-0"
                      : "opacity-0"
                  } 
								group-hover:translate-y-0 group-hover:opacity-100
								group-focus:translate-y-0 group-focus:opacity-100`}
                >
                  {item.work}
                </p>
              </div>
              <div
                className={`absolute w-[288px] h-[48px] flex justify-center items-center duration-300 transition-all transform translate-y-0 ${
                  category === item.work
                    ? "opacity-0 translate-y-full"
                    : "opacity-100"
                } group-hover:translate-y-full group-hover:opacity-0 group-focus:translate-y-full group-focus:opacity-0`}
              >
                <img
                  src={item.imgSrc}
                  alt="category_icon"
                  className={`${item.imgSize}`}
                />
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* md, sm 태블릿 모바일 뷰 카테고리 메뉴 */}
      <div
        className={`lg:hidden sm:mt-[166px] md:mt-[190px] w-[90%] flex justify-between`}
      >
        <img
          src={`${DOMAIN}images/icon/prevIcon.webp`}
          className={`w-[7px] md:w-[10px] ${
            parseInt(currItem) > 0 && "block"
          } ${parseInt(currItem) === 0 && "hidden"}`}
          alt="prevIcon"
          onClick={() => handleButtonMob(-1)}
        />
        <div
          className={`w-[7px] md:w-[10px] ${
            parseInt(currItem) > 0 && "hidden"
          } ${parseInt(currItem) === 0 && "block"}`}
        ></div>
        <p
          className={`font-Organetto_ExtBold text-[13px] ${
            category_list[parseInt(currItem)].work === "COMMUNICATION"
              ? "text-primary-orange"
              : category_list[parseInt(currItem)].work === "SERVICE"
                ? "text-primary-red"
                : category_list[parseInt(currItem)].work === "UXUI"
                  ? "text-primary-purple"
                  : "text-primary-blue"
          }`}
        >
          {category_list[parseInt(currItem)].name}
        </p>
        <img
          src={`${DOMAIN}images/icon/nextIcon.webp`}
          className={`w-[7px] md:w-[10px] ${
            parseInt(currItem) < category_list.length - 1 && "block"
          } ${parseInt(currItem) === category_list.length - 1 && "hidden"}`}
          alt="nextIcon"
          onClick={() => handleButtonMob(1)}
        />
        <div
          className={`w-[7px] md:w-[10px] ${
            parseInt(currItem) < category_list.length - 1 && "hidden"
          }  ${parseInt(currItem) === category_list.length - 1 && "block"}`}
        ></div>
      </div>
    </>
  );
};

export default WorksCategoryButton;
