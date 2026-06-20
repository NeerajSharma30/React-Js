import React from "react";

const ArrayPractice1 = () => {
  const users = [
    { firstname: "John", lastname: "Doe", age: 25 },
    { firstname: "Jane", lastname: "Smith", age: 30 },
    { firstname: "Michael", lastname: "Johnson", age: 22 },
    { firstname: "Emily", lastname: "Brown", age: 28 },
  ];

  console.log(users);

  const fullname = (user) => {
    return `${user.firstname }  ${user.lastname} `;
  };

  return (
    <>
      <h1>ArrayPractice1</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{fullname(user)}</li>
        ))}
      </ul>
    </>
  );
};

export default ArrayPractice1;
