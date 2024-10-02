import YouTube from "react-youtube";
import Title from "./Title";

const Interviews = () => {
  return (
    <div className={`w-full flex flex-col items-center mb-[300px]`}>
      <Title>INTERVIEWS</Title>
      <YouTube
        className={`w-full h-[661px] mb-[60px]`}
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
      <YouTube
        className={`w-full h-[661px]`}
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
  );
};

export default Interviews;
