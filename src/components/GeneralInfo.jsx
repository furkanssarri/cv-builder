import React from "react";

const GeneralInfo = ({
  nameValue,
  surNameValue,
  emailValue,
  phoneValue,
  setNameValue,
  setSurNameValue,
  setEmailValue,
  setPhoneValue,
}) => {
  return (
    <fieldset>
      <legend>General Information</legend>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        placeholder="Your name..."
        type="text"
        value={nameValue}
        onChange={(e) => setNameValue(e.target.value)}
      />
      <label htmlFor="surname">Surname</label>
      <input
        name="surname"
        id="surname"
        placeholder="Your surname..."
        type="text"
        value={surNameValue}
        onChange={(e) => setSurNameValue(e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        placeholder="Valid email address..."
        type="email"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <label htmlFor="phone">Phone</label>
      <input
        name="phone"
        id="phone"
        placeholder="5XX XXX XX XX"
        type="tel"
        value={phoneValue}
        onChange={(e) => setPhoneValue(e.target.value)}
      />
    </fieldset>
  );
};

export default GeneralInfo;
