import "./App.css";
import Video from "./components/Video";
import videos from "./data/data";
import List from "./components/List";
function App() {
  return (
    <div className="App">
      <div>Videos</div>
      {/* {
        videos.map(video=><Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>)
      } */}
      {
        <div>
          <List layout="numbered" items={videos} />
          <List layout="alpha" items={videos} />
          <List layout="bullet" items={videos} />
        </div>
      }
    </div>
  );
}

export default App;
