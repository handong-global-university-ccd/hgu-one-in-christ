import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import { DesingerDetailInfo } from "../../models/designer.model";
import designer_work from "../../assets/works/project/test/designer_work.png";

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
								lg:px-6 lg:gap-[184px]
								hover:bg-primary-white hover:text-primary-black
									cursor-pointer
									group
									"
      >
        <p className="font-Pretendard_Regular">{designer.nameKo}</p>
        <div className={`flex gap-[20px]`}>
          {designer.works.map((work) => (
            <p className="font-TT_Firs_Light">{work.category} Design</p>
          ))}
        </div>

        <img
          src={designer_work}
          className="hidden w-[416px] group-hover:block group-hover:fixed absolute top-[327px] right-[300px]"
        />
      </div>
    </Link>
  );
};

export default DesignerList;
