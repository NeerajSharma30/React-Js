import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();

  const goToAbout = () => {
    Navigate("/about");
  };
  return (
    <>
      <h2>Welcome to home</h2>
      <button onClick={goToAbout}>Go to About</button>
    </>
  );
};

export default Home;
