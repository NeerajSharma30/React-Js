import React from "react";

const Object1 = () => {
  const users = [
    { firstName: "John", lastName: "Deo", Age: 25 },
    { firstName: "Akee", lastName: "Kumar", Age: 26 },
    { firstName: "Joo", lastName: "omm", Age: 24 },
  ];

  const userDetails = (user) => {
    return user.firstName + " " + user.lastName;
  };
  return (
    <div>
      <h1>Person Data</h1>
      <ul>
        {users.map((user, index) => (
          <li>full name : {userDetails(user)}</li>
        ))}
      </ul>

      <p>Age : {users.Age}</p>
    </div>
  );
};

export default Object1;
