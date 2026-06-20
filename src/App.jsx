import React from "react";
import ArrayPractice1 from "./All Topics/03Objects/ArrayPractice1";
import Pros1 from "./All Topics/05_Props/Pros1";
import States from "./All Topics/06_usestate/States";
import Counter from "./All Topics/06_usestate/Counter";
import ToggleText from "./All Topics/06_usestate/ToggleText";
import LikeButton from "./All Topics/06_usestate/LikeButton";
import UserProfile from "./All Topics/06_usestate/UserProfile";
import PassingObject from "./All Topics/06_usestate/PassingObject";
import SimpleForms from "./All Topics/07_Forms/SimpleForms";
import MultiInputForm from "./All Topics/07_Forms/MultiInputForm";
import AdvancedForm from "./All Topics/07_Forms/AdvancedForm";
import BasicValidationForms from "./All Topics/07_Forms/BasicValidationForms";

const App = () => {
  return (
    <>
      {/* <ArrayPractice1 /> 
       <Pros1 name="yahubaba" age={25} city="delhi" />
      <Pros1 name="yahubaba" age={25} city="bihar" />
      

      <Destructuring name="yahubaba" age={25} city="bihar" />
      <Destructuring />

      <States />
      <Counter />
      <ToggleText />
      <LikeButton />
      <UserProfile />
      <PassingObject />

     <SimpleForms/>
      <MultiInputForm />
      <AdvancedForm />*/}
      <BasicValidationForms />
    </>
  );
};

export default App;
