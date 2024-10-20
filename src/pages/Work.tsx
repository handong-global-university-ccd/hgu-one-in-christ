import { useParams } from "react-router-dom";
import PageInfo from "../components/common/PageInfo";
import { WORKS } from "../constants/works";
import { WorkCategory } from "../models/category.model";
import WorkDesigner from "../components/works/WorkDesigner";
import WorkContents from "../components/works/WorkContents";
import Creation from "../components/works/Creation";
import { motion } from "framer-motion";

const Work = () => {
  const params = useParams();
  const category: WorkCategory = params.category as WorkCategory;
  const workId = params.workId;
  const work =
    category && workId ? WORKS[category][parseInt(workId) - 1] : null;

  return (
    <div className={`w-full  flex flex-col items-center`}>
      <div className={`hidden lg:block`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`flex justify-center`}
        >
          <PageInfo>WORKS</PageInfo>
        </motion.div>
      </div>
      <div className={`w-[90%] lg:hidden`}>
        <PageInfo>WORKS</PageInfo>
      </div>
      <div
        className={`w-[90%] lg:w-full lg:max-w-lg flex sm:flex-col justify-between sm:gap-34 mt-281 md:mt-230 sm:mt-165 mb-191`}
      >
        <WorkDesigner work={work} />
        <WorkContents category={category} work={work} />
      </div>
      <Creation creation={work?.creation} />
    </div>
  );
};

export default Work;
