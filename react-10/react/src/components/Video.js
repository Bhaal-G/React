import { useContext } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";
// import VideoDispatchContext from "../context/VideoDispatchContext";
import useVideoDispatch from "../hooks/VideoDispatch";
// import "./VideoList";
function Video({
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
  console.log("render video");

  const theme = useContext(ThemeContext);
  // const dispatch = useContext(VideoDispatchContext);
  const dispatch = useVideoDispatch();
  return (
    <>
      <div className={`container ${theme}`}>
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
}

export default Video;
