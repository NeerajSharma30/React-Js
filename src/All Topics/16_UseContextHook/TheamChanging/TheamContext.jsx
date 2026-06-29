import React, { createContext, useState } from "react";
import Parent1 from "./Parent1";

const TheamContexts = createContext();

const TheamContext = () => {
  const [theme, setThem] = useState("light");

  return(
    <>
    <TheamContexts.Provider value={{theme, setThem}}>
        <Parent1/>
    </TheamContexts.Provider>
    </>
  ) 
};

export default TheamContext;
