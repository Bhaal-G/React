import "./App.css";
import AddVideo from "./components/AddVideo";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoDB from "./data/data";
import Counter from "./components/Counter";
import { useState } from "react";
import VideoList from "./components/VideoList";
function App() {
  console.log("render app");
  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    setVideos(videos.filter((video) => video.id !== id));
    console.log(id);
  }
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
  }
  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo
        addVideos={addVideos}
        updateVideo={updateVideo}
        editableVideo={editableVideo}
      ></AddVideo>
      {/* <div>Videos</div> */}
      {/* <div style={{ clear: "both" }}> */}
      {/* <PlayButton message="pause-message" onPause={() => alert("Pause")}>
          Pause
        </PlayButton> */}
      <VideoList
        deleteVideo={deleteVideo}
        editVideo={editVideo}
        videos={videos}
      ></VideoList>
      {/* </div> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

//jb bhi state update hoti hai coponent mai to return ke andar wala part wapas se chal jata hai component mai matlab ek tarike se rendering hoti hai
//rendering hoti hai to matlab editableVideo var mai editable video ki new value jo sbse latest value jo update ho chuki hai chali jati hai {editableVideo }mai
export default App;
