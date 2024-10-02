import { PROFESSOR } from "../../constants/professor";
import Professor from "./Professor";
import Title from "./Title";

const ThanksTo = () => {
  return (
    <div className={`flex flex-col items-center mb-[344px]`}>
      <Title>THANKS TO</Title>
      <div className={`flex gap-[24px] mb-[47px]`}>
        {PROFESSOR.slice(0, 4).map((professor) => (
          <Professor professor={professor} />
        ))}
      </div>
      <div className={`flex gap-[24px]`}>
        {PROFESSOR.slice(4).map((professor) => (
          <Professor professor={professor} />
        ))}
      </div>
    </div>
  );
};

export default ThanksTo;
