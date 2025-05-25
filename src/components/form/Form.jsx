import React from "react";
import PersonalInfo from "./PersonalForm";
import EducationInfo from "./EducationForm";
import Experience from "./ExperienceForm";

const Form = () => {
  return (
    <>
      <section className="personal-info visible">
        <PersonalInfo />
      </section>
      <section className="education-info hidden">
        <EducationInfo />
      </section>
      <section className="experience-info hidden">
        <Experience />
      </section>
    </>
  );
};

export default Form;
