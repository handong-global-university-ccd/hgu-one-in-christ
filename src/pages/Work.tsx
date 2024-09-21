import { useParams } from "react-router-dom";
import PageInfo from "../components/common/PageInfo";
import { WORKS } from "../constants/works";
import { WorkCategory } from "../models/category.model";
import WorkDesigner from "../components/works/WorkDesigner";
import WorkContents from "../components/works/WorkContents";

const Work = () => {
  const params = useParams();
  const category: WorkCategory = params.category as WorkCategory;
  const workId = params.workId;
  const work =
    category && workId ? WORKS[category][parseInt(workId) - 1] : null;

  return (
    <div className={`w-full flex flex-col items-center`}>
      <PageInfo>WORKS</PageInfo>
      <div className={`w-full flex justify-between mt-[281px] mb-[191px]`}>
        <WorkDesigner work={work} />
        <WorkContents category={category} work={work} />
      </div>
    </div>
  );
};

export default Work;
