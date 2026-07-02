import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffect = () => {
  useEffect(() => {
    console.log("Useffect Message");
  }, []);

  useLayoutEffect(() => {
    console.log("UseLayoutffect Message");
  }, []);
  return(
    <h1>UseLayoutEffect</h1>
  )
};

export default UseLayoutEffect;
