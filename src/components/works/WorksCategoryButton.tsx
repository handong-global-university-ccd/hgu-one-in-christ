import { WorkCategory } from "../../models/category.model";
import communication_icon from "../../assets/works/icons/communication_icon.png";
import service_icon from "../../assets/works/icons/service_icon.png";
import uxui_icon from "../../assets/works/icons/uxui_icon.png";
import product_icon from "../../assets/works/icons/product_icon.png";
import prevIcon from "../../assets/works/icons/prevIcon.png";
import nextIcon from "../../assets/works/icons/nextIcon.png";
import { useEffect, useState } from "react";

const category_list = [
  {
    id: 1,
    name: "COMMUNICATION DESIGN",
    work: "COMMUNICATION" as WorkCategory,
    imgSrc: communication_icon,
    imgSize: "w-[35.27px] h-[30.23px]",
    color: "text-primary-orange",
  },
  {
    id: 2,
    name: "SERVICE DESIGN",
    work: "SERVICE" as WorkCategory,
    imgSrc: service_icon,
    imgSize: "w-[36.17px] h-[36.17px]",
    color: "text-primary-red",
  },
  {
    id: 3,
    name: "UXUI DESIGN",
    work: "UXUI" as WorkCategory,
    imgSrc: uxui_icon,
    imgSize: "w-[41.69px] h-[26.8px]",
    color: "text-primary-purple",
  },
  {
    id: 4,
    name: "PRODUCT DESIGN",
    work: "PRODUCT" as WorkCategory,
    imgSrc: product_icon,
    imgSize: "w-[29px] h-[38px]",
    color: "text-primary-blue",
  },
];

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<WorkCategory>>;
}

const WorksCategoryButton = ({ category, setCategory }: Props) => {
  const [currItem, setCurrItem] = useState(0);

  const handleButton = (sign: number) => {
    const result = currItem + sign;
    if (result >= 0 && result < category_list.length) {
      setCurrItem(result);
      setCategory(category_list[result].work);
    }
  };

  useEffect(() => {
    category_list.forEach((item, index) =>
      item.work === category ? setCurrItem(index) : null
    );
  }, [category]);

  return (
    <>
      {/* lg 데스크탑 뷰 카테고리 메뉴 */}
      <div
        className={`md:hidden sm:hidden fixed z-50 top-[177px] flex items-center`}
      >
        <div className={`flex justify-between gap-[22px]`}>
          {category_list.map((item) => (
            <button
              key={item.id}
              className={
                "w-[288px] h-[48px] relative flex items-center justify-center overflow-hidden duration-300 transition-all group"
              }
              onClick={() => setCategory(item.work as WorkCategory)}
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
      </div>

      {/* md, sm 태블릿 모바일 뷰 카테고리 메뉴 */}
      <div
        className={`lg:hidden sm:mt-[102px] md:mt-[190px] w-[90%] flex justify-between`}
      >
        <img
          src={prevIcon}
          className={`w-[7px] md:w-[10px] ${currItem > 0 && "block"} ${
            currItem === 0 && "hidden"
          }`}
          alt="prevIcon"
          onClick={() => handleButton(-1)}
        />
        <div
          className={`w-[7px] md:w-[10px] ${currItem > 0 && "hidden"} ${
            currItem === 0 && "block"
          }`}
        ></div>
        <p
          className={`font-Organetto_ExtBold text-[13px] ${
            category_list[currItem].work === "COMMUNICATION"
              ? "text-primary-orange"
              : category_list[currItem].work === "SERVICE"
                ? "text-primary-red"
                : category_list[currItem].work === "UXUI"
                  ? "text-primary-purple"
                  : "text-primary-blue"
          }`}
        >
          {category_list[currItem].name}
        </p>
        <img
          src={nextIcon}
          className={`w-[7px] md:w-[10px] ${
            currItem < category_list.length - 1 && "block"
          } ${currItem === category_list.length - 1 && "hidden"}`}
          alt="nextIcon"
          onClick={() => handleButton(1)}
        />
        <div
          className={`w-[7px] md:w-[10px] ${
            currItem < category_list.length - 1 && "hidden"
          }  ${currItem === category_list.length - 1 && "block"}`}
        ></div>
      </div>
    </>
  );
};

export default WorksCategoryButton;
