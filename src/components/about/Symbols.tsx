import Title from "./Title";

import { DOMAIN } from "../../constants/paths";

const symbolInfo = [
  {
    id: 1,
    symbol: "(COMMUNICATION DESIGN)",
    imgSrc: "images/about/symbol/commSymbol.webp",
    imgSetting: {
      top: "47px",
      left: "620px",
      width: "273px",
    },
    fontSetting: {
      top: `46px`,
      left: `726px`,
    },
    info: "커뮤니케이션 디자인에서는 메시지가 명확하게 전달되야한다. 사각형은 형태적으로 단순하고 직관적이며, 복잡하지 않아 이해하기 쉽고, 구조적으로 안정적이라는 특성을 지니고 있다.",
  },
  {
    id: 2,
    symbol: "(SERVICE DESIGN)",
    imgSrc: "images/about/symbol/serviceSymbol.webp",
    imgSetting: {
      top: "193px",
      left: "325px",
      width: "270px",
    },
    fontSetting: {
      top: "185px",
      left: "202px",
    },
    info: "서비스 디자인은 다양한 사용자를 이해하고 여러 이해관계자와 상황을 고려하여 접근해야 한다. 삼각형은 세 변과 세 꼭짓점으로 구성되어 있어 다양한 방식으로 연결되고 변형될 수 있는 특성을 가지고 있다.",
  },
  {
    id: 3,
    symbol: "(UXUI DESIGN)",
    imgSrc: "images/about/symbol/UXSymbol.webp",
    imgSetting: {
      top: "435px",
      left: "354px",
      width: "356px",
    },
    fontSetting: {
      top: "661px",
      left: "420px",
    },
    info: "서비스 디자인은 다양한 사용자를 이해하고 여러 이해관계자와 상황을 고려하여 접근해야 한다. 삼각형은 세 변과 세 꼭짓점으로 구성되어 있어 다양한 방식으로 연결되고 변형될 수 있는 특성을 가지고 있다.",
  },
  {
    id: 4,
    symbol: "(PRODUCT DESIGN)",
    imgSrc: "images/about/symbol/productSymbol.webp",
    imgSetting: {
      top: "316px",
      left: "604px",
      width: "315px",
    },
    fontSetting: {
      top: "358px",
      left: "771px",
    },
    info: "제품 디자인은 새로운 아이디어와 기능을 통한 혁신적인 접근이 중요하다. 반원은 한쪽이 직선이고 다른 한쪽이 곡면으로 전통적인 원의 안정감을 유지하면서 새로운 접근과 가능성을 탐구할 수 있는 특성을 가지고 있다.",
  },
];

const Symbols = () => {
  return (
    <div className={`w-full mb-[374px]`}>
      <Title>SYMBOLS</Title>
      <div className={`relative`}>
        <img
          src={`${DOMAIN}${symbolInfo[0].imgSrc}`}
          className={`absolute top-[47px] left-[620px] w-[273px] hover:top-[77px]`}
        />
        <p
          className={`absolute top-[46px] left-[726px] text-primary-white font-Menda_Medium text-[20px] leading-[120px]`}
        >
          {symbolInfo[0].symbol}
        </p>
        <img
          src={`${DOMAIN}${symbolInfo[1].imgSrc}`}
          className={`absolute top-[193px] left-[325px] w-[270px] hover:top-[223px]`}
        />
        <p
          className={`absolute top-[185px] left-[202px] text-primary-white font-Menda_Medium text-[20px] leading-[120px]`}
        >
          {symbolInfo[1].symbol}
        </p>
        <img
          src={`${DOMAIN}${symbolInfo[2].imgSrc}`}
          className={`absolute top-[435px] left-[354px] w-[356px] hover:top-[465px]`}
        />
        <p
          className={`absolute top-[661px] left-[420px] text-primary-white font-Menda_Medium text-[20px] leading-[120px]`}
        >
          {symbolInfo[2].symbol}
        </p>
        <img
          src={`${DOMAIN}${symbolInfo[3].imgSrc}`}
          className={`absolute top-[316px] left-[604px] w-[315px] hover:top-[346px]`}
        />
        <p
          className={`absolute top-[358px] left-[771px] text-primary-white font-Menda_Medium text-[20px] leading-[120px]`}
        >
          {symbolInfo[3].symbol}
        </p>
      </div>

      <div className={`mt-[858px] flex justify-between`}>
        {symbolInfo.map((item) => (
          <div
            className={`w-[289px] flex flex-col gap-[10px] text-[16px] text-primary-white hover:text-primary-orange`}
          >
            <p className={`font-medium`}>{item.symbol}</p>
            <p className={`font-Pretendard_Regular`}>{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Symbols;
