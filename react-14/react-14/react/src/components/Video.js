import { useContext, useEffect, memo, useRef, useLayoutEffect } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";
// import VideoDispatchContext from "../context/VideoDispatchContext";
import useVideoDispatch from "../hooks/VideoDispatch";
// import "./VideoList";
const Video = memo(function Video({
  title,
  id,
  channel = "Coder Dost",
  views,
  time,
  verified,
  children,
  // dispatch,
  editVideo,
}) {
  console.log("render video", id);

  const theme = useContext(ThemeContext);
  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();

  const ref = useRef(null);

  // useEffect(() => {
  //   const idx = setInterval(() => {
  //     console.log("video playing", id);
  //   }, 3000);
  //   return () => {
  //     clearInterval(idx);
  //   };
  // }, [id]);

  // useLayoutEffect(() => {
  //   const { height } = ref.current.getBoundingClientRect();
  //   console.log(height);
  // }, []);

  return (
    <>
      <div ref={ref} className={`container ${theme}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}{" "}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        {children}
      </div>
    </>
  );
});

export default Video;
