import React, { useContext } from "react";
import GrandChild1 from "./GrandChild1";

const Child1 = () => {
  const [theme, setThem] = useContext(TheamContexts);
  return (
    <>
      <h1>Child1</h1>
      <GrandChild1 />
      <button
      onClick={()=>{
        setThem(theme === "light" ? "dark" : "light")
      }}
      style={{
        backgroundColor : Theme === "light" ? "#fff" : "#333",
        color :Theme === "light" ? "#000" : "#fff"
      }}
      >Curren Theme : {theme}</button>
    </>
  );
};

export default Child1;
