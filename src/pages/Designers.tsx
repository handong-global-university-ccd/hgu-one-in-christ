import PageInfo from "../components/common/PageInfo";
import DesignerList from "../components/designers/DesignerList";
import { DESIGNERS } from "../constants/designers";

const Designers = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <PageInfo>DESIGNERS</PageInfo>
      <div className="w-full mt-[227px] lg:mb-[206px]">
        {DESIGNERS.map((designer) => (
          <DesignerList designer={designer} />
        ))}
      </div>
    </div>
  );
};

export default Designers;
