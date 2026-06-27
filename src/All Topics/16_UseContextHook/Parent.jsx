import React, { createContext } from "react";
import Child from "./Child";

export const UserContext = createContext();

const Parent = () => {
  const name = "Neeraj Sharma";
  return (
    <>
      <h1>Parent</h1>
      <UserContext.Provider value={name}>
        <Child />
      </UserContext.Provider>
    </>
  );
};

export default Parent;
