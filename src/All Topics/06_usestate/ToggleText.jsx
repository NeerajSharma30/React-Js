import { useState } from "react";

const ToggleText = () => {
  const [Liked, setLike] = useState(false);

  return (
    <>
      <button onClick={() => setLike(!Liked)}>
        {Liked ? "🐣 Like" : " ❤️Liked"} 
      </button>

      
    </>
  );
};

export default ToggleText;
