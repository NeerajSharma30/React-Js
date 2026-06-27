import React, { createContext } from "react";
import Child from "./Child";

export const UserContext = createContext();

const Parent = () => {
  //const name = "Neeraj Sharma";

  //! sending multipal values
  const user = { name: "Yahuu", role: "Admit" };
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
