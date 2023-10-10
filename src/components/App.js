import video from "../data/video.js";
import Comment from "./Comment.jsx";
function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Comment />
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
  );
}

export default App;
