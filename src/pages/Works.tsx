import WorksCategoryButton from "../components/works/WorksCategoryButton";
import { useState } from "react";
import WorkList from "../components/works/WorkList";
import { WorkCategory } from "../models/category.model";
import PageInfo from "../components/common/PageInfo";

const Works = () => {
  const [category, setCategory] = useState<WorkCategory>("COMMUNICATION");

  return (
    <div className="flex flex-col items-center">
      <PageInfo>WORKS</PageInfo>
      <WorksCategoryButton category={category} setCategory={setCategory} />
      <WorkList category={category} />
    </div>
  );
};

export default Works;
