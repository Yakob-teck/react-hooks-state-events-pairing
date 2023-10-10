import React, { useState } from "react";

function Comment({ text }) {
  const [votes, setVotes] = useState(0);

  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleUpvote}>Upvote</button>
      <span>{votes}</span>
      <button onClick={handleDownvote}>Downvote</button>
    </div>
  );
}

export default Comment;
