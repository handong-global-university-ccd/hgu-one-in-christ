import { motion } from "framer-motion";
import { Team } from "../../models/executives.model";

interface Props {
  team: Team;
}

const ExecutiveTeam = ({ team }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`hidden lg:flex gap-[34px] text-[22px] text-primary-white leading-[30px] tracking-[-1px]`}
      >
        <p className={`font-Pretendard_Regular w-[100px]`}>{team.teamName}</p>
        <div className={`flex flex-col gap-[10px]`}>
          <div className={`flex gap-[39px]`}>
            <p className={`font-Pretendard_Regular`}>팀장</p>
            <div className={`flex gap-[11px]`}>
              {team.leader?.map((item) => (
                <p key={item.id} className={`font-Pretendard_Light`}>
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className={`flex gap-[39px]`}>
            <p className={`font-Pretendard_Regular`}>팀원</p>
            <div className={`grid grid-cols-2 gap-[11px] gap-y-0`}>
              {team.member?.map((item) => (
                <p key={item.id} className={`font-Pretendard_Light`}>
                  {item.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      {/* 모바일 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`lg:hidden flex flex-col w-full text-[14px] md:text-[18px] text-primary-white leading-[30px] tracking-[-1px]`}
      >
        <div className={`flex gap-[17px]`}>
          <p
            className={`text-right sm:w-[100px] md:w-[200px] font-Pretendard_Regular`}
          >
            {team.teamName} 팀장
          </p>
          <div
            className={`flex gap-[6px] sm:w-[100px] md:w-[200px] font-Pretendard_Light`}
          >
            {team.leader?.map((item) => <p key={item.id}>{item.name}</p>)}
          </div>
        </div>
        <div className={`flex gap-[17px]`}>
          <p
            className={`text-right sm:w-[100px] md:w-[200px] font-Pretendard_Regular`}
          >
            팀원
          </p>
          <div
            className={`grid grid-cols-2 gap-[6px] gap-y-0 font-Pretendard_Light`}
          >
            {team.member?.map((item) => <p key={item.id}>{item.name}</p>)}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ExecutiveTeam;
