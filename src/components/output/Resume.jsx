import React from "react";
import OutputPersonalInfo from "./OutputPersonalInfo";
import OutputEducationInfo from "./OutputEducationInfo";
import OutputWorkXp from "./OutputWorkXp";

const Resume = ({ personalInfo, educationInfo, workExperience }) => {
  return (
    <>
      <div>
        <h2 className="data-section">Personal Information</h2>
        <OutputPersonalInfo personalInfo={personalInfo} />
        <h2 className="data-section">Education Information</h2>
        <OutputEducationInfo educationInfo={educationInfo} />
        <h2 className="data-section">Work Experience</h2>
        <OutputWorkXp workExperience={workExperience} />
      </div>
    </>
  );
};

export default Resume;
