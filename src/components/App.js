import video from "../data/video.js";
import {useState} from "react";
import Vote from "./Vote";
import Comments from "./Comments";

function App() {
  console.log("Here's your data:", video);
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [comments, setComments] = useState(video.comments);
  const [commentCount, setCommentCount] = useState(video.comments.length);
  const [toggleHide, setToggleHide] = useState(false);

  function handleUpvote() {
      setUpvotes(()=>upvotes+1);
  }

  function handleDownvote() {
      setDownvotes(()=>downvotes+1);
  }

  function handleHide() {
      setToggleHide(() => !toggleHide);
  }

  return (
      <div className="App">
          <iframe
            width="919"
            height="525"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
          />
          <h2>{video.title}</h2>
          <p>{video.views} Views | Uploaded {video.createdAt}</p>
          <Vote vote={upvotes} icon={"👍"} handleClick={handleUpvote} />
          <Vote vote={downvotes} icon={"👎"} handleClick={handleDownvote} />
          <p><button onClick={handleHide}>{toggleHide?"Show Comments":"Hide Comments"}</button></p>
          <hr></hr>
          {toggleHide ? null:
              <div>
                  <h2>{commentCount} Comments</h2>
                  {comments.map((comment, index) => <Comments key={index} comment={comment}/>)}
              </div>
          }
      </div>
  );
}

export default App; 