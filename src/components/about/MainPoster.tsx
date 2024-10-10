import Title from "./Title";
import { DOMAIN } from "../../constants/paths";

const MainPoster = () => {
  return (
    <div
      className={`w-full md:w-[90%] flex flex-col items-center mb-[219px] sm:mb-[144px]`}
    >
      <Title>MAIN POSTER</Title>
      <img
        src={`${DOMAIN}images/about/mainPoster.webp`}
        className={`w-[500px] sm:w-full`}
      />
    </div>
  );
};

export default MainPoster;
