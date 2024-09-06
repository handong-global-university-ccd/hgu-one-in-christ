import { WorkCategory } from "../../models/category.model";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  categoryName: string;
  color: string;
  imgSrc: string;
  imgSize: string;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<WorkCategory>>;
}

const WorksCategoryButton = ({
  categoryName,
  color,
  imgSrc,
  imgSize,
  category,
  setCategory,
}: Props) => {
  return (
    <button
      className={
        "w-[288px] h-[48px] relative flex items-center justify-center overflow-hidden duration-300 transition-all group"
      }
      onClick={() => setCategory(categoryName as WorkCategory)}
    >
      <div
        className={`absolute w-[288px] h-[48px] flex justify-center items-center 
				bg-primary-white
				font-Organetto_ExtBold text-[15px] ${color}
				duration-300 transition-all transform ${
          category === categoryName ? "opacity-100" : "opacity-0"
        }
				group-hover:opacity-100
				group-focus:opacity-100`}
      >
        <p
          className={`duration-500 transition-all transform -translate-y-full ${
            category === categoryName
              ? "opacity-100 translate-y-0"
              : "opacity-0"
          } 
					group-hover:translate-y-0 group-hover:opacity-100
					group-focus:translate-y-0 group-focus:opacity-100`}
        >
          {categoryName}
        </p>
      </div>
      <div
        className={`absolute w-[288px] h-[48px] flex justify-center items-center duration-300 transition-all transform translate-y-0 ${
          category === categoryName
            ? "opacity-0 translate-y-full"
            : "opacity-100"
        } group-hover:translate-y-full group-hover:opacity-0 group-focus:translate-y-full group-focus:opacity-0`}
      >
        <img src={imgSrc} alt="category_icon" className={`${imgSize}`} />
      </div>
    </button>
  );
};

export default WorksCategoryButton;
