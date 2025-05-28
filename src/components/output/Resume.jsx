import React from "react";
import OutputSection from "./OutputSection";

const Resume = ({
  personalInfo,
  educationInfo,
  workInfo,
  handleEditEntry,
  handleDeleteEntry,
}) => {
  return (
    <div className="container">
      <h2>Personal Info</h2>
      <OutputSection
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        workInfo={workInfo}
        handleEditEntry={handleEditEntry}
        handleDeleteEntry={handleDeleteEntry}
      />
    </div>
  );
};

export default Resume;
