import React, { useImperativeHandle, forwardRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import useForm from "../../hooks/useForm";

const WorkXpInfo = forwardRef(({ isOpen, toggleOpenClose }, ref) => {
  const { entries, handleChange, handleAddEntry, handleSubmit, handleEdit } =
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
        <form onSubmit={handleSubmit}>
          {entries.map((entry, index) => (
            <fieldset key={index} className="work-xp-entry">
              <label htmlFor={`company-name-${index}`}>
                Name of the Company
              </label>
              <input
                name="companyName"
                id={`company-name-${index}`}
                placeholder="Company Name..."
                type="text"
                value={entry.companyName}
                onChange={(e) => handleChange(index, e)}
              />
              <label htmlFor={`position-${index}`}>Position</label>
              <input
                name="position"
                id={`position-${index}`}
                placeholder="Your position..."
                type="text"
                value={entry.position}
                onChange={(e) => handleChange(index, e)}
              />
              <label htmlFor={`responsibilities-${index}`}>
                Main Responsibilities
              </label>
              <textarea
                name="responsibilities"
                id={`responsibilities-${index}`}
                placeholder="Your responsibilities..."
                value={entry.responsibilities}
                onChange={(e) => handleChange(index, e)}
              />
              <label htmlFor={`work-start-${index}`}>Start Date</label>
              <input
                name="workStartDate"
                id={`work-start-${index}`}
                placeholder="Start Date..."
                type="text"
                value={entry.workStartDate}
                onChange={(e) => handleChange(index, e)}
              />
              <label htmlFor={`work-end-${index}`}>End Date</label>
              <input
                name="workEndDate"
                id={`work-end-${index}`}
                placeholder="End Date..."
                type="text"
                value={entry.workEndDate}
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
});

export default WorkXpInfo;
