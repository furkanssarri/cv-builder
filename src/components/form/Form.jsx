import React from "react";
import PersonalInfo from "./PersonalForm";
import EducationInfo from "./EducationForm";
import Experience from "./ExperienceForm";

const Form = () => {
  return (
    <>
      <section className="personal-info">
        <PersonalInfo />
      </section>
      <section className="education-info">
        <EducationInfo />
      </section>
      <section>
        <Experience />
      </section>
    </>
  );
};

export default Form;
