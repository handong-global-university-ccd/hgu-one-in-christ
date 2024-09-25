import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { DesingerDetailInfo } from "../../models/designer.model";

interface Props {
  designer: DesingerDetailInfo;
}

const DesignerList = ({ designer }: Props) => {
  return (
    <Link to={`${PATHS.DESIGNERS}/${designer.id}`}>
      <div
        className="h-[69px] border-b
									flex items-center 
								text-primary-white text-[18px] 
								lg:px-6 lg:gap-[220px]
								hover:bg-primary-white hover:text-primary-black
									cursor-pointer
									group
									"
      >
        <p className="font-Pretendard_Regular">{designer.nameKo}</p>
        <p className="font-TT_Firs_Light">{designer.nameEng}</p>
        <div className="hidden w-[303px] h-[430px] group-hover:block absolute top-[393px] right-[400px] bg-primary-blue">
          {designer.nameKo}
        </div>
      </div>
    </Link>
  );
};

export default DesignerList;
