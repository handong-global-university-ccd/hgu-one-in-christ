import PageInfo from "../components/common/PageInfo";
import Container from "../components/designers/Container";
import { DESIGNERS } from "../constants/designers";

const Designers = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <PageInfo>DESIGNERS</PageInfo>
      <div className="w-full mt-16">
        {DESIGNERS.map((designer) => (
          <Container
            nameKo={designer.nameKo}
            nameEng={designer.nameEng}
            img={designer.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Designers;
