import { WORKS } from "../../constants/works";
import { WorkCategory } from "../../models/category.model";
import { Work } from "../../models/work.model";

interface Props {
  category: WorkCategory;
}

const WorkList = ({ category }: Props) => {
  const works: Work[] = WORKS[category] || [];

  return (
    <div className="w-full grid grid-cols-4 gap-0 mt-[42px]">
      {works.map((item) => (
        <div
          className={`flex flex-col m-[0.5px] outline outline-1 outline-solid outline-primary-white
					`}
          key={item.id}
        >
          <div className={`w-[288px] h-[216px]`}></div>
          <p className="text-primary-white ">{item.title}</p>
          {item.designer.map((item) => (
            <p className="text-primary-white ">{item.name}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkList;
