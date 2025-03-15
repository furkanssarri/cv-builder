import React from "react";
import { FaAngleDown } from "react-icons/fa";

const EducationInfo = ({
  schoolName,
  department,
  educationStartDate,
  educationEndDate,
  isOpen,
  setSchoolName,
  setDepartment,
  setEducationStartDate,
  setEducationEndDate,
  toggleOpenClose,
  handleSubmit,
}) => {
  return (
    <section
      className={`accordion-content ${isOpen ? "open" : ""}`}
      id="edu-info"
    >
      <div className="accordion-header" onClick={toggleOpenClose}>
        <h2>Education Information</h2>
        <FaAngleDown className={`icon ${isOpen ? "rotate" : ""}`} />
      </div>

      {isOpen && (
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="school">School</label>
            <input
              name="school"
              id="school"
              placeholder="School Name..."
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
            <label htmlFor="department">Department</label>
            <input
              name="department"
              id="department"
              placeholder="Your Department..."
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            <label htmlFor="educationStartDate">Date Started</label>
            <input
              name="educationStartDate"
              id="educationStartDate"
              placeholder="Start Date..."
              type="text"
              value={educationStartDate}
              onChange={(e) => setEducationStartDate(e.target.value)}
            />
            <label htmlFor="educationEndDate">Date Graduated</label>
            <input
              name="gradDate"
              id="educationEndDate"
              placeholder="Graduation date..."
              type="text"
              value={educationEndDate}
              onChange={(e) => setEducationEndDate(e.target.value)}
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default EducationInfo;
