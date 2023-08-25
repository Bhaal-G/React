import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videoDB from "./data/data";
import Counter from "./components/Counter";
import { useState } from "react";
function App() {
  console.log("render app");
  const [videos, setVideos] = useState(videoDB);
  return (
    <div className="App" onClick={() => console.log("App")}>
      <div>
        <button
          onClick={() => {
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                title: "Demo Js tutorial",
                views: "1M",
                time: "1 month ago",
                channel: "Coder Dost",
                verified: true,
              },
            ]);
          }}
        >
          Add Video
        </button>
      </div>
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log("Playing..", video.title)}
            onPause={() => console.log("Paused..", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: "both" }}>
        {/* <PlayButton message="pause-message" onPause={() => alert("Pause")}>
          Pause
        </PlayButton> */}
      </div>
      <Counter></Counter>
    </div>
  );
}

export default App;
