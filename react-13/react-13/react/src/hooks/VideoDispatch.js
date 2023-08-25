import VideoDispatchContext from "../context/VideoDispatchContext";
import { useContext } from "react";
function useVideoDispatch() {
  return useContext(VideoDispatchContext);
}

export default useVideoDispatch;
