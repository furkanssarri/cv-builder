import React from "react";

const EducationalInfo = ({
  schoolName,
  department,
  startDate,
  endDate,
  setSchoolName,
  setDepartment,
  setStartDate,
  setEndDate,
}) => {
  return (
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
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label htmlFor="gradDate">Date Graduated</label>
      <input
        name="gradDate"
        id="gradDate"
        placeholder="Graduation date..."
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </fieldset>
  );
};

export default EducationalInfo;
