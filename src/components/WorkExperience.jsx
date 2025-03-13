import React from "react";

const WorkExperience = ({
  companyName,
  position,
  responsibilities,
  workStartDate,
  workEndDate,
  setCompanyName,
  setPosition,
  setResponsibilities,
  setWorkStartDate,
  setWorkEndDate,
}) => {
  return (
    <fieldset>
      <legend>Work Experience</legend>
      <label htmlFor="companyName">Name of the Company</label>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <label htmlFor="position">Position</label>
      <input
        type="text"
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
        value={workStartDate}
        onChange={(e) => setWorkStartDate(e.target.value)}
      />
      <label htmlFor="workEndDate">End Date</label>
      <input
        type="date"
        value={workEndDate}
        onChange={(e) => setWorkEndDate(e.target.value)}
      />
    </fieldset>
  );
};

export default WorkExperience;
