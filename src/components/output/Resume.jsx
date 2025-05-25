import React from "react";
import OutputSection from "./OutputSection";

const Resume = ({ personalInfo, educationInfo, workInfo }) => {
  return (
    <div className="container">
      <h2>Personal Info</h2>
      <OutputSection personalInfo={personalInfo} />
      <OutputSection educationInfo={educationInfo} />
      <OutputSection workInfo={workInfo} />
    </div>
  );
};

export default Resume;
