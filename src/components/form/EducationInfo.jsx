import React from "react";
import { FaAngleDown } from "react-icons/fa";
import useForm from "../../hooks/useForm";

const EducationInfo = ({ isOpen, toggleOpenClose }) => {
  const { entries, handleChange, handleAddEntry, handleSubmit } =
    useForm("edu-info");
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
          {entries.map((entry, index) => (
            <fieldset key={index} className="edu-info-entry">
              <label htmlFor={`school-name-${index}`}>School Name</label>
              <input
                name="schoolName"
                id={`school-name-${index}`}
                placeholder="School Name..."
                type="text"
                value={entry.schoolName || ""}
                onChange={(e) => handleChange(index, e)}
              />
              <label htmlFor={`department-${index}`}>Department</label>
              <input
                name="department"
                id={`department-${index}`}
                placeholder="Your Department..."
                type="text"
                value={entry.department || ""}
                onChange={(e) => handleChange(index, e)}
              />
              <label htmlFor={`educationStartDate-${index}`}>
                Date Started
              </label>
              <input
                name="educationStartDate"
                id={`educationStartDate-${index}`}
                placeholder="Start Date..."
                type="text"
                value={entry.educationStartDate || ""}
                onChange={(e) => handleChange(index, e)}
              />
              <label htmlFor={`educationEndDate-${index}`}>
                Date Graduated
              </label>
              <input
                name="educationEndDate"
                id={`educationEndDate-${index}`}
                placeholder="Graduation date..."
                type="text"
                value={entry.educationEndDate || ""}
                onChange={(e) => handleChange(index, e)}
              />
            </fieldset>
          ))}
          <button type="button" onClick={handleAddEntry}>
            Add New Entry
          </button>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default EducationInfo;
