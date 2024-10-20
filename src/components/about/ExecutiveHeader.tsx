import { Header } from "../../models/executives.model";
import { motion } from "framer-motion";

interface Props {
  header: Header;
}

const ExecutiveHeader = ({ header }: Props) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`hidden lg:flex flex-col gap-12 w-185 text-22 text-primary-white leading-[30px] tracking-[-1px]`}
      >
        {header.position?.map((item) => (
          <div key={item.id} className={`flex justify-between`}>
            <p className={`font-Pretendard_Regular w-100`}>{item.role}</p>
            <p className={`font-Pretendard_Light`}>{item.name}</p>
          </div>
        ))}
      </motion.div>
      {/* 모바일 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`lg:hidden flex flex-col w-full text-14 md:text-18 text-primary-white leading-[30px] tracking-[-1px]`}
      >
        {header.position?.map((item) => (
          <div key={item.id} className={`flex gap-17`}>
            <p
              className={`text-right sm:w-100 md:w-200 font-Pretendard_Regular`}
            >
              {item.role}
            </p>
            <p className={`sm:w-100 md:w-200  font-Pretendard_Light`}>
              {item.name}
            </p>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default ExecutiveHeader;
