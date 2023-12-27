import React, { useState } from "react";

const HOC = (WrappedComponent) => {
  return (props) => {
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLike = () => {
      setLikeCounter((prevCounter) => prevCounter + 1);
    };

    return (
      <WrappedComponent
        {...props}
        likeHandle={handleLike}
        likeCounter={likeCounter}
      />
    );
  };
};

export default HOC;
