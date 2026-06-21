import React, { useEffect, useState } from "react";

const FetchingApi = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <>
      <h2>User List</h2>
      {user.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </>
  );
};

export default FetchingApi;
