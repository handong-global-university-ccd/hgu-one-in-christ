import { EXECUTIVES } from "../../constants/executives";
import ExecutiveHeader from "./ExecutiveHeader";
import ExecutiveTeam from "./ExecutiveTeam";
import Title from "./Title";

const Executives = () => {
  return (
    <div
      className={`lg:w-full w-[90%] flex flex-col items-center mb-[317px] sm:mb-[165px]`}
    >
      <Title>EXECUTIVES</Title>
      <div
        className="hidden lg:grid mt-[63px] gap-y-[66px] gap-x-[120px]"
        style={{ gridTemplateColumns: "185px 1fr 1fr" }}
      >
        {EXECUTIVES.map((item) =>
          item.group === "header" ? (
            <ExecutiveHeader header={item} />
          ) : (
            <ExecutiveTeam team={item} />
          )
        )}
      </div>
      <div
        className={`lg:hidden flex flex-col items-center gap-[30px] md:gap-[50px]`}
      >
        <div>
          <ExecutiveHeader header={EXECUTIVES[0]} />
          <ExecutiveHeader header={EXECUTIVES[3]} />
        </div>
        <ExecutiveTeam team={EXECUTIVES[1]} />
        <ExecutiveTeam team={EXECUTIVES[2]} />
        <ExecutiveTeam team={EXECUTIVES[4]} />
        <ExecutiveTeam team={EXECUTIVES[5]} />
      </div>
    </div>
  );
};

export default Executives;
