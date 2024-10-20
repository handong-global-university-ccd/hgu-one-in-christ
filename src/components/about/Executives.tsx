import { EXECUTIVES } from "../../constants/executives";
import ExecutiveHeader from "./ExecutiveHeader";
import ExecutiveTeam from "./ExecutiveTeam";
import Title from "./Title";

const Executives = () => {
  return (
    <div
      className={`lg:w-full w-[90%] flex flex-col items-center mb-317 sm:mb-165`}
    >
      <Title>EXECUTIVES</Title>
      <div
        className="hidden lg:grid mt-63 gap-y-66 gap-x-120"
        style={{ gridTemplateColumns: "185px 1fr 1fr" }}
      >
        {EXECUTIVES.map((item) =>
          item.group === "header" ? (
            <ExecutiveHeader key={item.id} header={item} />
          ) : (
            <ExecutiveTeam key={item.id} team={item} />
          )
        )}
      </div>
      <div className={`lg:hidden flex flex-col items-center gap-30 md:gap-50`}>
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
