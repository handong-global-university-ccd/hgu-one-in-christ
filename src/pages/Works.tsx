import WorksCategoryButton from "../components/works/WorksCategoryButton";
import communication_icon from "../assets/works/icons/communication_icon.png";
import service_icon from "../assets/works/icons/service_icon.png";
import uxui_icon from "../assets/works/icons/uxui_icon.png";
import product_icon from "../assets/works/icons/product_icon.png";

const category_list = [
  {
    id: 1,
    name: "COMMUNICATION DESIGN",
    imgSrc: communication_icon,
    imgSize: "w-[35.27px] h-[30.23px]",
    color: "text-primary-orange",
  },
  {
    id: 2,
    name: "SERVICE DESIGN",
    imgSrc: service_icon,
    imgSize: "w-[36.17px] h-[36.17px]",
    color: "text-primary-red",
  },
  {
    id: 3,
    name: "UXUI DESIGN",
    imgSrc: uxui_icon,
    imgSize: "w-[41.69px] h-[26.8px]",
    color: "text-primary-purple",
  },
  {
    id: 4,
    name: "PRODUCT DESIGN",
    imgSrc: product_icon,
    imgSize: "w-[29px] h-[38px]",
    color: "text-primary-blue",
  },
];

const Works = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-white font-Organetto_ExtBold text-2xl py-9">WORKS</p>
      <div className="w-full flex justify-between">
        {category_list.map((category) => (
          <WorksCategoryButton
            color={category.color}
            imgSrc={category.imgSrc}
            imgSize={category.imgSize}
          >
            {category.name}
          </WorksCategoryButton>
        ))}
      </div>
    </div>
  );
};

export default Works;
