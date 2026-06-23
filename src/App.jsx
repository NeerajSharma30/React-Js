import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
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
import First from "./All Topics/09_UseEffect/First";
import FetchingApi from "./All Topics/09_UseEffect/FetchingApi";
import Home from "./All Topics/10_Routs/Home";
import About from "./All Topics/10_Routs/About";
import Contect from "./All Topics/10_Routs/Contect";
import Timer from "./All Topics/12_UseEffectEvent/Timer";
import AutoSaveForm from "./All Topics/12_UseEffectEvent/AutoSaveForm";

const App = () => {
  {
    /* function User() {
    console.log(useParams());
    const { id } = useParams();
    return <h2>User Profile For ID: {id}</h2>;
  }

  function Notfound() {
    return <h1>404 Page Note Found</h1>;
  }*/
  }
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
      <AdvancedForm />
      <BasicValidationForms />

      <First />
      <FetchingApi />

      <BrowserRouter>
        <h1>React OUTER EXAMPLE </h1>
        <Link to="/">Home</Link>|<Link to="/about">About</Link>|
        <Link to="/contect">Contect Us</Link>
        <Link to="/user/10">User</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<User />} />
        </Routes>
      </BrowserRouter>

      <Timer />*/}
      <AutoSaveForm />
    </>
  );
};

export default App;
