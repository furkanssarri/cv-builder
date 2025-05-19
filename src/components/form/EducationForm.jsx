import React from "react";

const EducationInfo = () => {
  return (
    <div>
      <h2>Education Information</h2>
      <form>
        <div>
          <label htmlFor="degree">Degree:</label>
          <input type="text" id="degree" name="degree" required />
        </div>
        <div>
          <label htmlFor="institution">Institution:</label>
          <input type="text" id="institution" name="institution" required />
        </div>
        <div>
          <label htmlFor="year">Year of Graduation:</label>
          <input type="number" id="year" name="year" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EducationInfo;
