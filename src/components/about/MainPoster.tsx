import Title from "./Title";
import mainPoster from "../../assets/about/mainPoster.png"; //test

const MainPoster = () => {
  return (
    <div className={`w-full flex flex-col items-center mb-[219px]`}>
      <Title>MAIN POSTER</Title>
      <img src={mainPoster} className={`w-[500px]`} />
    </div>
  );
};

export default MainPoster;
