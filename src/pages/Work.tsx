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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={`flex justify-center`}
      >
        <PageInfo>WORKS</PageInfo>
      </motion.div>
      <div
        className={`w-[90%] lg:w-full lg:max-w-lg flex sm:flex-col justify-between sm:gap-[34px] mt-[281px] md:mt-[230px] sm:mt-[165px] mb-[191px]`}
      >
        <WorkDesigner work={work} />
        <WorkContents category={category} work={work} />
      </div>
      <Creation creation={work?.creation} />
    </div>
  );
};

export default Work;
