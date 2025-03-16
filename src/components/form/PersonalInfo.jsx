import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import {
  initializeFormState,
  resetFormState,
  saveFormData,
} from "../../utils/formUtils";

const PersonalInfo = ({ isOpen, toggleOpenClose }) => {
  const [formData, setFormData] = useState(() =>
    initializeFormState("personal-info"),
  );

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveFormData("personal-info", formData),
      resetFormState("personal-info", setFormData);
  };

  return (
    <section
      className={`accordion-content ${isOpen ? "open" : ""}`}
      id="personal-info"
    >
      <div className="accordion-header" onClick={toggleOpenClose}>
        <h2>General Information</h2>
        <FaAngleDown className={`icon ${isOpen ? "rotate" : ""}`} />
      </div>

      {isOpen && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <fieldset>
            <label htmlFor="name">Name</label>
            <input
              autoComplete="off"
              id="name"
              name="nameValue"
              onChange={(e) => handleChange(e)}
              placeholder="Your name..."
              required
              type="text"
              value={formData.nameValue}
            />
            <label htmlFor="surname">Surname</label>
            <input
              autoComplete="off"
              id="surname"
              name="surNameValue"
              onChange={(e) => handleChange(e)}
              placeholder="Your surname..."
              required
              type="text"
              value={formData.surNameValue}
            />
            <label htmlFor="email">Email</label>
            <input
              autoComplete="off"
              id="email"
              name="emailValue"
              onChange={(e) => handleChange(e)}
              placeholder="Valid email address..."
              required
              type="email"
              value={formData.emailValue}
            />
            <label htmlFor="phone">Phone</label>
            <input
              autoComplete="off"
              id="phone"
              name="phoneValue"
              onChange={(e) => handleChange(e)}
              placeholder="5XX XXX XX XX"
              required
              type="tel"
              value={formData.phoneValue}
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default PersonalInfo;
