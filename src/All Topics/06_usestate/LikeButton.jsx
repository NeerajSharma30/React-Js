import { useState } from "react";

const LikeButton = () => {
  const [isvisibl, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(!isvisibl)}>
        {isvisibl ? "Hide" : "Show"} Text
      </button>

      {isvisibl && <p>This is secret message</p>}
    </>
  );
};

export default LikeButton;
