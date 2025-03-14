import React from "react";
import { FaAngleDown } from "react-icons/fa";

const WorkExperience = ({
  companyName,
  position,
  responsibilities,
  workStartDate,
  workEndDate,
  isOpen,
  setCompanyName,
  setPosition,
  setResponsibilities,
  setWorkStartDate,
  setWorkEndDate,
  toggleOpenClose,
  handleSubmit,
}) => {
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
          <fieldset>
            <label htmlFor="companyName">Name of the Company</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <label htmlFor="responsibilities">Main Responsibilities</label>
            <textarea
              name="responsibilities"
              id="responsibilities"
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.target.value)}
            >
              Responsibilities
            </textarea>
            <label htmlFor="workStartDate">Start Date</label>
            <input
              type="text"
              name="workStartDate"
              id="workStartDate"
              value={workStartDate}
              onChange={(e) => setWorkStartDate(e.target.value)}
            />
            <label htmlFor="workEndDate">End Date</label>
            <input
              type="text"
              name="workEndDate"
              id="workEndDate"
              value={workEndDate}
              onChange={(e) => setWorkEndDate(e.target.value)}
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default WorkExperience;
