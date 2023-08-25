import VideoContext from "../context/VideosContext";
import { useContext } from "react";
function useVideos() {
  return useContext(VideoContext);
}

export default useVideos;
