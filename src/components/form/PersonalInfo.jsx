import React, { forwardRef, useImperativeHandle } from "react";
import { FaAngleDown } from "react-icons/fa";
import useForm from "../../hooks/useForm";

const PersonalInfo = forwardRef(({ isOpen, toggleOpenClose }, ref) => {
  const { entries, handleChange, handleSubmit, handleEdit } =
    useForm("personal-info");

  useImperativeHandle(ref, () => ({
    handleEdit, // Exposes handleEdit to parent
  }));
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
        <form onSubmit={handleSubmit}>
          {entries.map((entry, index) => (
            <fieldset key={index} className="personal-info-entry">
              <label htmlFor="name">Name</label>
              <input
                autoComplete="off"
                id="name"
                name="nameValue"
                onChange={(e) => handleChange(index, e)}
                placeholder="Your name..."
                required
                type="text"
                value={entry.nameValue || ""}
              />
              <label htmlFor="surname">Surname</label>
              <input
                autoComplete="off"
                id="surname"
                name="surNameValue"
                onChange={(e) => handleChange(index, e)}
                placeholder="Your surname..."
                required
                type="text"
                value={entry.surNameValue || ""}
              />
              <label htmlFor="email">Email</label>
              <input
                autoComplete="off"
                id="email"
                name="emailValue"
                onChange={(e) => handleChange(index, e)}
                placeholder="Valid email address..."
                required
                type="email"
                value={entry.emailValue || ""}
              />
              <label htmlFor="phone">Phone</label>
              <input
                autoComplete="off"
                id="phone"
                name="phoneValue"
                onChange={(e) => handleChange(index, e)}
                placeholder="5XX XXX XX XX"
                required
                type="tel"
                value={entry.phoneValue || ""}
              />
            </fieldset>
          ))}
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
});

export default PersonalInfo;
