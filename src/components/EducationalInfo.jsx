import React from "react";
import { FaAngleDown } from "react-icons/fa";

const EducationalInfo = ({
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
}) => {
  return (
    <section
      className={`accordion-content ${isOpen ? "open" : ""}`}
      id="edu-info"
      onClick={toggleOpenClose}
    >
      <FaAngleDown />

      {isOpen && (
        <form>
          <fieldset>
            <legend>Educational Information</legend>
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
            <label htmlFor="startDate">Date Started</label>
            <input
              name="startDate"
              id="startDate"
              placeholder="Start Date..."
              type="date"
              value={educationStartDate}
              onChange={(e) => setEducationStartDate(e.target.value)}
            />
            <label htmlFor="gradDate">Date Graduated</label>
            <input
              name="gradDate"
              id="gradDate"
              placeholder="Graduation date..."
              type="date"
              value={educationEndDate}
              onChange={(e) => setEducationEndDate(e.target.value)}
            />
          </fieldset>
        </form>
      )}
    </section>
  );
};

export default EducationalInfo;
