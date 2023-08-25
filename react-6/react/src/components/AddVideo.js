import { useState } from "react";
import "./AddVideo.css";
const initialState = {
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: "",
};
function AddVideo({ addVideos }) {
  const [video, setVideo] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video);
    setVideo(initialState);
    // console.log(video);
  }
  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });

    // console.log(video);
  }

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
        Add Video
      </button>
    </form>
  );
}
export default AddVideo;
