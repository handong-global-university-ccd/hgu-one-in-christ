import { Professor as IProfessor } from "../../models/professor.model";

interface Props {
  professor: IProfessor;
}

const Professor = ({ professor }: Props) => {
  return (
    <div
      key={professor.id}
      className={`sm:w-[30%] md:w-[30%] flex flex-col gap-[7px]`}
    >
      <img src={professor.imgSrc} className={`lg:w-[174px]`} alt="professor" />
      <p
        className={`font-Pretendard_Regular text-[20px] sm:text-[14px] text-primary-white`}
      >
        {professor.name}
      </p>
    </div>
  );
};

export default Professor;
