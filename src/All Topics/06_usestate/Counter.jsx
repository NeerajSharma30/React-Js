import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increas = () => {
    setCount(count + 10);
  };
  return (
    <div>
      <h1>count {count}</h1>
      <button onClick={increas}>Increas</button>
    </div>
  );
};

export default Counter;
