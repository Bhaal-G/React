import { useEffect, useState } from "react";
import "./AddVideo.css";
// import VideoDispatchContext from "../context/VideoDispatchContext";
import useVideoDispatch from "../hooks/VideoDispatch";
const initialState = {
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};
function AddVideo({ editableVideo }) {
  const [video, setVideo] = useState(initialState);
  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }
    setVideo(initialState);
    // console.log(video);
  }
  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });

    // console.log(video);
  }
  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);
  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      {video.title}
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />

      <button
        onClick={handleSubmit}
        // onClick={() => {
        //   setVideos([
        //     ...videos,
        //     {
        //       id: videos.length + 1,
        //       title: "Demo Js tutorial",
        //       views: "1M",
        //       time: "1 month ago",
        //       channel: "Coder Dost",
        //       verified: true,
        //     },
        //   ]);
        // }}
      >
        {editableVideo ? "Edit" : "Add"}Video
      </button>
    </form>
  );
}
export default AddVideo;
