import React, { useContext } from "react";
import { UserContext } from "./Parent";

const GrandChild = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h1>{user} GrandChild</h1>
    </>
  );
};

export default GrandChild;
