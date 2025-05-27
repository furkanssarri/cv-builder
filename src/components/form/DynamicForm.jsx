import React, { useState, useEffect } from "react";
import { storeItem } from "../../utils/storage";

const DynamicForm = ({ fields, storageKey, onSubmitData }) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    const stored = sessionStorage.getItem(storageKey);
    if (stored) {
      // setFormData(JSON.parse(stored));
      // onSubmitData(JSON.parse(stored)); // Load array to Resume
      // setFormData(initialState);
    }
  }, [/*storageKey,*/ initialState /* onSubmitData */]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(sessionStorage.getItem(storageKey)) || [];
    const updatedData = [...existingData, formData];
    storeItem(storageKey, updatedData);
    onSubmitData(updatedData);
    setFormData(initialState); // reset forms
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(({ name, label, type }) => (
        <div key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
