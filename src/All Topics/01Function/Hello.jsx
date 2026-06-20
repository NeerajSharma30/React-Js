import React from "react";

const Hello = () => {
  const getName = (yourname) => {
    return yourname;
  };

  const handleClick = () => {
    alert("Button Was Clicked");
  };

  const handleInput = (event) => {
    console.clear();
    console.log(event.target.value);
  };
  const name = "YahooBaba";
  const name1 = "sachin";

  const handleMouseOver = () => console.log("Mouse is over the text");
  const handleDoubleClick = () => console.log("Mouse is DoubleClicked on text");
  return (
    <>
      <h1> Hello {getName(name)}</h1>
      <h1> Hello {getName(name1)}</h1>
      <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>
        Lorem ipsum dolor sit amet.
      </p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("Hello from alert inline function")}>
        Say Hello
      </button>
      <br />
      <input type="text" onChange={handleInput} placeholder="type" />
    </>
  );
};

export default Hello;
