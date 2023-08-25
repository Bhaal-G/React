import VideoContext from "../context/VideosContext";
import { useContext, useDebugValue } from "react";
function useVideos() {
  useDebugValue(useContext(VideoContext).length);
  return useContext(VideoContext);
}

export default useVideos;
