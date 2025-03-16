import "./styles/CvOutput.css";

import React from "react";
import ResumePersonalInfo from "./ResumePersonalInfo";
import ResumeEducationInfo from "./ResumeEducationInfo";
import ResumeWorkExperience from "./ResumeWorkExperience";

const CvOutput = () => {
  return (
    <>
      <div className="resume">
        <section id="personal-information">
          <ResumePersonalInfo />
        </section>
        <section id="education-information">
          <ResumeEducationInfo />
        </section>
        <section id="work-experience">
          <ResumeWorkExperience />
        </section>
      </div>
    </>
  );
};

export default CvOutput;
