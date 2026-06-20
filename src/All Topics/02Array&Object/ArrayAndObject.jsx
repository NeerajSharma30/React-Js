import React from "react";

const ArrayAndObject = () => {
  const fruits = ["Apple", "Banana ", "Orange"];
  return (
    <div>
      <h1>ArrayAndObject</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li>
            {index} - {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayAndObject;
