import React, { forwardRef, useImperativeHandle } from "react";
import { FaAngleDown } from "react-icons/fa";
import useForm from "../../hooks/useForm";

const EducationInfo = forwardRef(({ isOpen, toggleOpenClose }, ref) => {
  const { formData, handleChange, handleSubmit, handleEdit } =
    useForm("edu-info");

  useImperativeHandle(ref, () => ({
    handleEdit, // Exposes handleEdit to parent
  }));
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <fieldset>
            <label htmlFor="school">School</label>
            <input
              name="schoolName"
              id="school"
              placeholder="School Name..."
              type="text"
              value={formData.schoolName}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="department">Department</label>
            <input
              name="department"
              id="department"
              placeholder="Your Department..."
              type="text"
              value={formData.department}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="educationStartDate">Date Started</label>
            <input
              name="educationStartDate"
              id="educationStartDate"
              placeholder="Start Date..."
              type="text"
              value={formData.educationStartDate}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="educationEndDate">Date Graduated</label>
            <input
              name="educationEndDate"
              id="educationEndDate"
              placeholder="Graduation date..."
              type="text"
              value={formData.educationEndDate}
              onChange={(e) => handleChange(e)}
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
});

export default EducationInfo;
