import React from "react";
import RenderLike from "./RenderLike";

export default function PropPost() {
  return (
    <RenderLike>
      {({ likeCounter, handleClick }) => {
        return (
          <div>
            <button onClick={handleClick}>Like Post{likeCounter}</button>
          </div>
        );
      }}
    </RenderLike>
  );
}
