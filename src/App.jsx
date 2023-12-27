import "./App.css";
import LikeImage from "./components/LikeImage";
import LikePost from "./components/LikePost";
import PropPost from "./components/PropPost";

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className="buttons">
        <h1>Using Higher Order Component</h1>
        <LikePost />
        <br />
        <LikeImage />
        <h1>Using Render Props Method</h1>
        <PropPost />
        <br />
        <PropPost />
      </div>
    </div>
  );
}

export default App;
