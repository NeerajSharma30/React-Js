import { useState } from "react";

const PassingObject = () => {
  const [student, SetStudent] = useState({
    name: "John",
    grade: "A",
    city: "Delhi",
  });

  const changeCity = () => {
    SetStudent({...student, city: Mumbai });
  };
  return (
    <>
      <h2>Name : {student.name}</h2>
      <p>Grade : {student.grade}</p>
      <p>City : {student.city}</p>
      <button onClick={changeCity}>Change City </button>
    </>
  );
};

export default PassingObject;
