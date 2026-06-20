import { useState } from "react";

const MultiInputForm = () => {
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>MultiInputForm Data</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MultiInputForm;
