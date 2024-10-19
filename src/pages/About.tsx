import AboutMain from "../components/about/AboutMain";
import Developer from "../components/about/Developer";
import Executives from "../components/about/Executives";
import Interviews from "../components/about/Interviews";
import MainPoster from "../components/about/MainPoster";
import Symbols from "../components/about/Symbols";
import ThanksTo from "../components/about/ThanksTo";
import PageInfo from "../components/common/PageInfo";

const About = () => {
  return (
    <div className={`w-full flex flex-col items-center scrollbar-hide`}>
      <PageInfo>ABOUT</PageInfo>
      <AboutMain />
      <MainPoster />
      <Symbols />
      <Interviews />
      <ThanksTo />
      <Executives />
      <Developer />
    </div>
  );
};

export default About;
