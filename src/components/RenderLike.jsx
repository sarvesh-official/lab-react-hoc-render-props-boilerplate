import { useState } from "react";

const RenderLike = ({ children }) => {
  const [likeCounter, setLike] = useState(0);

  const handleClick = () => {
    setLike((prevCounter) => prevCounter + 1);
  };
  return children({ likeCounter, handleClick });
};

export default RenderLike;
