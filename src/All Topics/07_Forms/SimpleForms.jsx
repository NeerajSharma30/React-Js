import React, { useState } from "react";

const SimpleForms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name :", { name });
    console.log("Email :", { email });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form Handiling</h1>

        <label> Enter Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <label for="namess"> Enter Your Email</label>
        <input
          id="namess"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SimpleForms;
