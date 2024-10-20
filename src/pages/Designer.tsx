import { useParams } from "react-router-dom";
import PageInfo from "../components/common/PageInfo";
import DesignerDetail from "../components/designers/DesignerDetail";
import DesignerWorks from "../components/designers/DesignerWorks";
import { DESIGNERS } from "../constants/designers";

const Designer = () => {
  const params = useParams();
  const designerId = params.designerId;
  const designer = designerId ? DESIGNERS[parseInt(designerId) - 1] : null;

  return (
    <div className={`w-full flex flex-col items-center`}>
      <PageInfo>DESIGNERS</PageInfo>
      <div
        className={`w-[90%] lg:w-full lg:max-w-lg flex sm:flex-col justify-between mt-262 md:mt-220 sm:mt-170 lg:mb-206 mb-68`}
      >
        <DesignerDetail designer={designer} />
        <DesignerWorks designer={designer} />
      </div>
    </div>
  );
};

export default Designer;
