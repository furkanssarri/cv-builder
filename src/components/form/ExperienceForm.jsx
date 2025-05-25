import React from "react";

const Experience = () => {
  return (
    <div>
      <h2>Experience Information</h2>
      <form>
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" id="jobTitle" name="jobTitle" required />
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" name="company" required />
        </div>
        <div>
          <label htmlFor="years">Years of Experience:</label>
          <input type="number" id="years" name="years" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Experience;
