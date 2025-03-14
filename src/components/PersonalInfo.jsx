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
  toggleOpenClose,
}) => {
  return (
    <section
      className={`accordion-content ${isOpen ? "open" : ""}`}
      id="personal-info"
      onClick={toggleOpenClose}
    >
      <FaAngleDown />

      {isOpen && (
        <form>
          <fieldset>
            <legend>General Information</legend>
            <label htmlFor="name">Name</label>
            <input
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Your name..."
              type="text"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
            <label htmlFor="surname">Surname</label>
            <input
              autoComplete="off"
              name="surname"
              id="surname"
              placeholder="Your surname..."
              type="text"
              value={surNameValue}
              onChange={(e) => setSurNameValue(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Valid email address..."
              type="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <label htmlFor="phone">Phone</label>
            <input
              autoComplete="off"
              name="phone"
              id="phone"
              placeholder="5XX XXX XX XX"
              type="tel"
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
            />
          </fieldset>
        </form>
      )}
    </section>
  );
};

export default PersonalInfo;
