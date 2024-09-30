import { DesingerDetailInfo } from "../../models/designer.model";
import designer_alone from "../../assets/works/project/test/designer_alone.png"; // test

interface Props {
  designer: DesingerDetailInfo | null;
}

const DesignerDetail = ({ designer }: Props) => {
  return (
    <div className={`flex flex-col items-start text-primary-white`}>
      <img
        src={designer_alone}
        className={`w-[262.59px] sm:w-[153px] mb-[50px]`}
      />
      <div
        className={`flex items-baseline gap-2.5 font-Pretendard_Bold mb-[8px]`}
      >
        <p className={`text-[28px]`}>{designer?.nameKo}</p>
        <p className={`text-[19px]`}>{designer?.nameEng}</p>
      </div>
      <p className={`font-Pretendard_Regular text-[17px] mb-[22px]`}>
        {designer?.email}
      </p>
      <p
        className={`w-[569px] leading-[37px] font-Pretendard_Regular text-[21px] sm:text-[16px]`}
      >
        {designer?.description}
      </p>
    </div>
  );
};

export default DesignerDetail;
