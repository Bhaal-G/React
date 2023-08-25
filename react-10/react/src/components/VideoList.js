import Video from "./Video";
import PlayButton from "./PlayButton";
// import { useContext } from "react";
// import VideosContext from "../context/VideosContext";
import useVideos from "../hooks/Video";

function VideoList({ editVideo }) {
  // const videos = useContext(VideosContext);
  const videos = useVideos();
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
          // dispatch={dispatch}
        >
          <PlayButton
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  );
}
export default VideoList;
