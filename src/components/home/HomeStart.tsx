import StartContent from "./StartContent";

const Texts = [
  {
    id: 1,
    engContent: "SYNERGIZE",
    korContent: "함께 일해 조화를 이루다",
  },
  {
    id: 2,
    engContent: "SYMPATHY",
    korContent: "마음을 함께하다",
  },
  {
    id: 1,
    engContent: "SYNOECISM",
    korContent: "하나의 공동체로 통합되다",
  },
];

const HomeStart = () => {
  return (
    <div className={`w-full mt-[142px] mb-[268px] flex justify-between`}>
      {Texts.map((text) => (
        <StartContent korContent={text.korContent}>
          {text.engContent}
        </StartContent>
      ))}
    </div>
  );
};

export default HomeStart;
