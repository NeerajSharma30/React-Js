import { useState, useEffect, useEffectEvent } from "react";

const AutoSaveForm = () => {
  const [formData, SetFormData] = useState({ name: " ", email: "" });
  return (
    <>
      <h1>Hello</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => SetFormData({ ...formData, name: e.target.value })}
        />
        <br />
        <br />
        <input
          type="email "
          placeholder="Email"
          value={formData.email}
          onChange={(e) => SetFormData({ ...formData, email: e.target.value })}
        />
      </form>
    </>
  );
};

export default AutoSaveForm;
