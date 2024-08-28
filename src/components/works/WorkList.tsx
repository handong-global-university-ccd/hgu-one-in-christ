import { WORKS } from "../../constants/works";
import { WorkCategory } from "../../models/category.model";
import { Work } from "../../models/work.model";

interface Props {
  category: WorkCategory;
}

const WorkList = ({ category }: Props) => {
  const works: Work[] = WORKS[category] || [];

  return (
    <div>
      {works.map((item) => (
        <div className="text-white" key={item.id}>
          {item.id}
        </div>
      ))}
    </div>
  );
};

export default WorkList;
