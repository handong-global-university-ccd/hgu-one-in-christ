import YouTube from "react-youtube";
import Title from "./Title";

const Interviews = () => {
  return (
    <div
      className={`w-full lg:max-w-lg flex flex-col items-center mb-[300px] mb-[170px]`}
    >
      <Title>INTERVIEWS</Title>
      <div className={`w-[90%] relative pb-[56.25%] mb-[22px]`}>
        <YouTube
          className={`absolute w-full h-full`}
          videoId="2Id5kY0-PwE" //동영상 주소
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 0,
              modestbranding: 0, //컨트롤 바에 유튜브 로고 표시 여부
              loop: 1, //반복 재생
              playlist: "2Id5kY0-PwE", //반복 재생으로 재생할 플레이 리스트
            },
          }}
        />
      </div>
      <div className={`w-[90%] relative pb-[56.25%]`}>
        <YouTube
          className={`absolute w-full h-full`}
          videoId="2Id5kY0-PwE"
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 0,
              modestbranding: 0,
              loop: 1,
              playlist: "2Id5kY0-PwE",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Interviews;
