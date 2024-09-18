const Footer = () => {
  return (
    <div
      className={`w-full border-t flex justify-center items-center lg:h-[172px]`}
    >
      <div
        className={`w-full flex justify-between 
				text-primary-white text-[20px]
			lg:max-w-lg`}
      >
        <div className={`flex flex-col font-Pretendard_Bold`}>
          <p>한동대학교 콘텐츠융합디자인학부</p>
          <p>제 26회 졸업전시</p>
          <p>2024 DEGREE SHOW</p>
        </div>
        <div className={`flex flex-col font-Pretendard_Regular`}>
          <div className={`flex gap-[17px] text-[20px]`}>
            <p className={`font-Pretendard_Bold`}>일시</p>
            <p>2024.10.21-2024.10.28</p>
          </div>
          <div className={`flex gap-[17px] text-[20px]`}>
            <p className={`font-Pretendard_Bold`}>장소</p>
            <p>한동대학교 김영길 그레이스 스쿨</p>
          </div>
          <p className={`text-[12px] text-primary-white/60 mt-[9px]`}>
            ⓒ 2024. Handong Global University CCD. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
