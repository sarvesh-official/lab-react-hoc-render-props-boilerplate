import React from "react";
import RenderLike from "./RenderLike";

export default function PropImage() {
  return (
    <RenderLike>
      {({ likeCounter, handleClick }) => {
        return (
          <div>
            <button onClick={handleClick}>Like Image {likeCounter}</button>
          </div>
        );
      }}
    </RenderLike>
  );
}
