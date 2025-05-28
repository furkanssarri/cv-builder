import { useState, useEffect } from "react";
import DynamicForm from "./DynamicForm.jsx";
import {
  personalInfoFields,
  educationInfoFields,
  workExperienceFields,
} from "../../assets/formConfig.js";

const FormContainer = ({
  setPersonalInfo,
  setEducationInfo,
  setWorkInfo,
  editingIndex,
}) => {
  const [openSections, setOpenSections] = useState(new Set());
  const formSections = [
    {
      id: 0,
      title: "Personal Info",
      fields: personalInfoFields,
      state: setPersonalInfo,
    },
    {
      id: 1,
      title: "Education Info",
      fields: educationInfoFields,
      state: setEducationInfo,
    },
    {
      id: 3,
      title: "Work Experience",
      fields: workExperienceFields,
      state: setWorkInfo,
    },
  ];

  useEffect(() => {
    formSections.forEach(({ title, state }) => {
      const stored = sessionStorage.getItem(title);
      if (stored) {
        state(JSON.parse(stored));
      }
    });
  }, []);

  useEffect(() => {
    console.log(editingIndex);
  }, [editingIndex]);

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
              editingIndex={
                editingIndex.section === formSection.title
                  ? editingIndex.data
                  : null
              }
            />
          )}
        </section>
      ))}
    </>
  );
};

export default FormContainer;
