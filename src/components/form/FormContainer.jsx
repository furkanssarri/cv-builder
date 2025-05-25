import { useState } from "react";
import DynamicForm from "./DynamicForm.jsx";
import {
  personalInfoFields,
  educationInfoFields,
  workExperienceFields,
} from "../../assets/formConfig.js";

const FormContainer = ({ setPersonalInfo, setEducationInfo, setWorkInfo }) => {
  const [openSections, setOpenSections] = useState(new Set());
  const formSections = [
    {
      title: "Personal Info",
      fields: personalInfoFields,
      state: setPersonalInfo,
    },
    {
      title: "Education Info",
      fields: educationInfoFields,
      state: setEducationInfo,
    },
    {
      title: "Work Experience",
      fields: workExperienceFields,
      state: setWorkInfo,
    },
  ];

  const toggleSection = (index) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      newSet.has(index) ? newSet.delete(index) : newSet.add(index);
      return newSet;
    });
  };
  return (
    <>
      {formSections.map((formSection, index) => (
        <section key={index} className="form-section">
          <button
            className="accordion-toggle"
            onClick={() => toggleSection(index)}
          >
            <h3>{formSection.title}</h3>
          </button>
          {openSections.has(index) && (
            <DynamicForm
              fields={formSection.fields}
              storageKey={formSection.title}
              onSubmitData={formSection.state}
            />
          )}
        </section>
      ))}
    </>
  );
};

export default FormContainer;
