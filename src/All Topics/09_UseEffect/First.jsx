import React, { useEffect, useState } from "react";

const First = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
    console.log("Component Rerender");
  }, [count]);
  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default First;
