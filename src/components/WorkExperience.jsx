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
}) => {
  return (
    <section
      className={`accordion-content ${isOpen ? "open" : ""}`}
      id="work-xp"
      onClick={toggleOpenClose}
    >
      <FaAngleDown />

      {isOpen && (
        <form>
          <fieldset>
            <legend>Work Experience</legend>
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
              type="date"
              name="workStartDate"
              id="workStartDate"
              value={workStartDate}
              onChange={(e) => setWorkStartDate(e.target.value)}
            />
            <label htmlFor="workEndDate">End Date</label>
            <input
              type="date"
              name="workEndDate"
              id="workEndDate"
              value={workEndDate}
              onChange={(e) => setWorkEndDate(e.target.value)}
            />
          </fieldset>
        </form>
      )}
    </section>
  );
};

export default WorkExperience;
