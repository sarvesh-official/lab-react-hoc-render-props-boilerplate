import React from "react";
import HOC from "./HOC";

const LikePost = ({ likeCounter, likeHandle }) => {
  return (
    <div>
      <button onClick={likeHandle}>Like Post {likeCounter}</button>
    </div>
  );
};

export default HOC(LikePost);
