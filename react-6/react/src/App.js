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

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  return (
    <div className="App" onClick={() => console.log("App")}>
      <AddVideo addVideos={addVideos}></AddVideo>
      <div>Videos</div>
      <div style={{ clear: "both" }}>
        {/* <PlayButton message="pause-message" onPause={() => alert("Pause")}>
          Pause
        </PlayButton> */}
        <VideoList videos={videos}></VideoList>
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;
