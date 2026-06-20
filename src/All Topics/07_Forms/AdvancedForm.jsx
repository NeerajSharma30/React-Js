import { useState } from "react";

const AdvancedForm = () => {
  const [formData, setFormdata] = useState({
    gender: "",
    agree: false,
    country: "UK",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (prev) => {
    const { name, type, value, checked } = prev.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <h2>Form With Checkbox , Radio & Select</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>

        <br />

        <label>
          Country:
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree to terms and conditions
        </label>

        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AdvancedForm;
