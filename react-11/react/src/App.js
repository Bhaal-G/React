import "./App.css";
import AddVideo from "./components/AddVideo";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoDB from "./data/data";
import Counter from "./components/Counter";
import { useContext, useReducer, useState } from "react";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
function App() {
  console.log("render app");
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState("darkMode");

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  // const themeContext = useContext(ThemeContext);

  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  // const [videos, setVideos] = useState(videoDB);

  // function addVideos(video) {
  //   //action :{type 'ADD',payload:video}
  //   // setVideos([...videos, { ...video, id: videos.length + 1 }]);
  // }

  // function deleteVideo(id) {
  //   // setVideos(videos.filter((video) => video.id !== id));
  //   console.log(id);
  // }
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  // function updateVideo(video) {
  //   // const index = videos.findIndex((v) => v.id === video.id);
  //   // const newVideos = [...videos];
  //   // newVideos.splice(index, 1, video);
  //   // setVideos(newVideos);
  // }
  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`} onClick={() => console.log("App")}>
            <Counter></Counter>
            <button
              onClick={() =>
                setMode(mode === "darkMode" ? "lightMode" : "darkMode")
              }
            >
              Mode
            </button>
            <AddVideo
              // dispatch={dispatch}
              editableVideo={editableVideo}
            ></AddVideo>
            {/* <div>Videos</div> */}
            {/* <div style={{ clear: "both" }}> */}
            {/* <PlayButton message="pause-message" onPause={() => alert("Pause")}>
          Pause
        </PlayButton> */}
            <VideoList
              // dispatch={dispatch}
              editVideo={editVideo}
              // videos={videos}
            ></VideoList>
            {/* </div> */}
            {/* <Counter></Counter> */}
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

//jb bhi state update hoti hai coponent mai to return ke andar wala part wapas se chal jata hai component mai matlab ek tarike se rendering hoti hai
//rendering hoti hai to matlab editableVideo var mai editable video ki new value jo sbse latest value jo update ho chuki hai chali jati hai {editableVideo }mai
export default App;
