import { DesingerDetailInfo } from "../../models/designer.model";

interface Props {
  designer: DesingerDetailInfo | null;
}

const DesignerDetail = ({ designer }: Props) => {
  return (
    <div className={`flex flex-col items-start text-primary-white`}>
      {/* 디자이너 이미지 */}
      <div
        className={`w-[262.59px] h-[372px] border border-primary-white mb-[50px]`}
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
        className={`w-[569px] leading-[37px] font-Pretendard_Regular text-[21px]`}
      >
        {designer?.description}
      </p>
    </div>
  );
};

export default DesignerDetail;
