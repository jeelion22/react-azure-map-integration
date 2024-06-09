import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" name="" id="" ref={inputRef} />
      <button onClick={handleClick}>Focus on Input</button>
    </div>
  );
};

export default UseRef;
