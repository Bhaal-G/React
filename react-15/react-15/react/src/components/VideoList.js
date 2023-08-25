import Video from "./Video";
import PlayButton from "./PlayButton";
import axios from "axios";
// import { useContext } from "react";
// import VideosContext from "../context/VideosContext";
import useVideos from "../hooks/Video";
import {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useDeferredValue,
  useTransition,
} from "react";
import useVideoDispatch from "../hooks/VideoDispatch";
import moreVideos from "../data/moredata";

function VideoList({ editVideo }) {
  // const videos = useContext(VideosContext);

  // const url = "https://64d7f87f5f9bf5b879ce1570.mockapi.io/Getapi";
  const videos = useVideos();
  // const [videos, setVideos] = useState([]);

  // const defVideos = useDeferredValue(videos);

  const [isPending, startTransition] = useTransition();

  const dispatch = useVideoDispatch();

  // useEffect(() => {
  //   async function getVideos() {
  //     const res = await axios.get(url);
  //     console.log("getVideos", res.data);
  //     // setVideos(res.data);
  //     dispatch({ type: "LOAD", payload: res.data });
  //   }
  //   getVideos();
  // }, [dispatch]);
  const [Videos, setVideos] = useState([]);

  function getVideos() {
    // dispatch({ type: "LOAD", payload: moreVideos });
    startTransition(() => {
      setVideos(moreVideos);
    });
  }

  useEffect(() => {}, [dispatch]);

  const play = useCallback(() => console.log("Playing.."), []);
  const pause = useCallback(() => console.log("Playing.."), []);
  const memoButton = useMemo(
    () => (
      <PlayButton onPlay={play} onPause={pause}>
        Play
      </PlayButton>
    ),
    [pause, play]
  );
  return (
    <>
      {/* {defVideos.map((video) => ( */}
      {Videos.map((video) => (
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
          {memoButton}
        </Video>
      ))}
      {/* <button onClick={handleClick}>Get Videos</button> */}
      <button onClick={getVideos}>
        {isPending ? "Getting..." : "Get Videos"}
      </button>
    </>
  );
}
export default VideoList;

// hooks hmesha top level pr hi chalega
