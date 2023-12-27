import React from "react";
import HOC from "./HOC";

const LikeImage = ({ likeCounter, likeHandle }) => {
  return (
    <div>
      <button onClick={likeHandle}>Like Image {likeCounter}</button>
    </div>
  );
};

export default HOC(LikeImage);
