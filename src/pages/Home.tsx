import HomeLast from "../components/home/HomeLast";
import HomeMain from "../components/home/HomeMain";
import HomeStart from "../components/home/HomeStart";
import ShowDate from "../components/home/ShowDate";

const Home: React.FC = () => {
  return (
    <div className={`flex flex-col`}>
      <HomeStart />
      <HomeMain />
      <ShowDate />
      <HomeLast />
    </div>
  );
};

export default Home;
