interface Props {
  nameKo: string;
  nameEng: string;
  img: string;
}

const Container = ({ nameKo, nameEng, img }: Props) => {
  return (
    <div
      className="h-[69px] border-b
									flex items-center 
								text-primary-white text-[18px] 
									xl:px-6 xl:gap-[220px]
								hover:bg-primary-white hover:text-primary-black
									cursor-pointer
									group
									"
    >
      <p className="font-Pretendard_Regular">{nameKo}</p>
      <p className="font-TT_Firs_Light">{nameEng}</p>
      <div className="hidden w-[303px] h-[430px] group-hover:block absolute top-[393px] right-[400px] bg-primary-blue">
        {nameKo}
      </div>
    </div>
  );
};

export default Container;
