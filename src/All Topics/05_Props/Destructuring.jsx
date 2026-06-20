import React from "react";

const Destructuring = (props) => {
  const { age = "0", name = "Guest", city = "Non" } = props;
  return (
    <div>
      <h1>Destructuring</h1>
      <h2>name {name}</h2>
      <h2>age {age}</h2>
      <h2>city {city}</h2>
    </div>
  );
};

export default Destructuring;
