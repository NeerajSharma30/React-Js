import { useState, useEffect, useEffectEvent } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const OnTick = useEffectEvent(() => {
    console.log(`Count : ${count}`);

    setCount((c) => c + 1);
  });
  useEffect(() => {
    const id = setInterval(() => {
      OnTick();
    }, 1000);

    return () => clearInterval(id);
  }, []);
  return (
    <>
      <h2>Count : {count}</h2>
    </>
  );
};

export default Timer;
