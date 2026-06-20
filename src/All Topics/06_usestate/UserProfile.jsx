import { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(18);

  const newage = () => {
    setAge(age + 1);
  };
  return (
    <>
      <h2>Name : {name}</h2>
      <h3>Age : {age}</h3>
      <button onClick={() => setName("Yahubaba")}>Change Name </button>
      <button onClick={newage}>Change Age </button>
    </>
  );
};

export default UserProfile;
