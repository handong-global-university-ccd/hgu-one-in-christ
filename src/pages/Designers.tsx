import PageInfo from "../components/common/PageInfo";
import DesignerList from "../components/designers/DesignerList";
import { DESIGNERS } from "../constants/designers";

const Designers = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <PageInfo>DESIGNERS</PageInfo>
      <div className="w-full lg:max-w-lg mt-227 sm:mt-170 mb-206 sm:mb-122">
        {DESIGNERS.map((designer, idx) => (
          <DesignerList key={idx} designer={designer} />
        ))}
      </div>
    </div>
  );
};

export default Designers;
