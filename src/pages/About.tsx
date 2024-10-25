import AboutMain from "../components/about/AboutMain";
import ContactModal from "../components/about/contactModal";
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
      <ContactModal />
    </div>
  );
};

export default About;
