import React from "react";
import { FaAngleDown } from "react-icons/fa";

const PersonalInfo = ({
  nameValue,
  surNameValue,
  emailValue,
  phoneValue,
  isOpen,
  setNameValue,
  setSurNameValue,
  setEmailValue,
  setPhoneValue,
  handleSubmit,
  toggleOpenClose,
}) => {
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
          <fieldset>
            <label htmlFor="name">Name</label>
            <input
              autoComplete="off"
              id="name"
              name="name"
              onChange={(e) => setNameValue(e.target.value)}
              placeholder="Your name..."
              required
              type="text"
              value={nameValue}
            />
            <label htmlFor="surname">Surname</label>
            <input
              autoComplete="off"
              id="surname"
              name="surname"
              onChange={(e) => setSurNameValue(e.target.value)}
              placeholder="Your surname..."
              required
              type="text"
              value={surNameValue}
            />
            <label htmlFor="email">Email</label>
            <input
              autoComplete="off"
              id="email"
              name="email"
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="Valid email address..."
              required
              type="email"
              value={emailValue}
            />
            <label htmlFor="phone">Phone</label>
            <input
              autoComplete="off"
              id="phone"
              name="phone"
              onChange={(e) => setPhoneValue(e.target.value)}
              placeholder="5XX XXX XX XX"
              required
              type="tel"
              value={phoneValue}
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default PersonalInfo;
