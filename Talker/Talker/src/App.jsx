import "./App.css";
import Controls from "./components/Controls";
import VideoScreen from "./components/VideoScreen";

function App() {
  return (
    <div>
      <h1>Talker</h1>
      <VideoScreen />
      <Controls />
    </div>
  );
}

export default App;
