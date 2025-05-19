import React from "react";
import OutputSection from "./OutputSection";

const Resume = ({ personalInfo, educationInfo, workExperience }) => {
  return (
    <>
      <h2>Personal Info</h2>
      <OutputSection personalInfo={personalInfo} />
      <h2>Education Info</h2>
      <OutputSection educationInfo={educationInfo} />
      <h2>Work Experience</h2>
      <OutputSection workExperience={workExperience} />
    </>
  );
};

export default Resume;
