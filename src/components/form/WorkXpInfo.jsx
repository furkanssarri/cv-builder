import React, { forwardRef, useImperativeHandle } from "react";
import { FaAngleDown } from "react-icons/fa";
import useForm from "../../hooks/useForm";

const WorkXpInfo = forwardRef(({ isOpen, toggleOpenClose }, ref) => {
  const { formData, handleChange, handleSubmit, handleEdit } =
    useForm("work-xp");

  useImperativeHandle(ref, () => ({
    handleEdit, // Exposes handleEdit to parent
  }));

  return (
    <section
      className={`accordion-content ${isOpen ? "open" : ""}`}
      id="work-xp"
    >
      <div className="accordion-header" onClick={toggleOpenClose}>
        <h2>Work Experience</h2>
        <FaAngleDown className={`icon ${isOpen ? "rotate" : ""}`} />
      </div>
      {isOpen && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <fieldset>
            <label htmlFor="companyName">Name of the Company</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName || ""}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              id="position"
              value={formData.position || ""}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="responsibilities">Main Responsibilities</label>
            <textarea
              name="responsibilities"
              id="responsibilities"
              value={formData.responsibilities || ""}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="workStartDate">Start Date</label>
            <input
              type="text"
              name="workStartDate"
              id="workStartDate"
              value={formData.workStartDate || ""}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="workEndDate">End Date</label>
            <input
              type="text"
              name="workEndDate"
              id="workEndDate"
              value={formData.workEndDate || ""}
              onChange={(e) => handleChange(e)}
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
});

export default WorkXpInfo;
