import AboutMain from "../components/about/AboutMain";
import PageInfo from "../components/common/PageInfo";

const About = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <PageInfo>ABOUT</PageInfo>
      <AboutMain />
    </div>
  );
};

export default About;
