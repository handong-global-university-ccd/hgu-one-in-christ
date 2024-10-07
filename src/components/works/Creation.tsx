import YouTube from "react-youtube";
import { Creation as ICreation } from "../../models/work.model";
import { DOMAIN } from "../../constants/paths";

interface Props {
  creation: ICreation[] | undefined;
}

const Creation = ({ creation }: Props) => {
  return (
    <div className={`w-full flex flex-col`}>
      {creation?.map((item) =>
        item.extension === "youtube" ? (
          <YouTube
            className={`w-full h-[661px]`}
            videoId={item.src} //동영상 주소
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                modestbranding: 0, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
                playlist: `${item.src}`, //반복 재생으로 재생할 플레이 리스트
              },
            }}
          />
        ) : (
          <img
            src={`${DOMAIN}${item.src}`}
            className={`w-full`}
            alt="creation"
          />
        )
      )}
    </div>
  );
};

export default Creation;
