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
  setEditingIndex,
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
      id: 2,
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
    if (editingIndex && editingIndex.section) {
      toggleSection(editingIndex.section);
    }
  }, [editingIndex]);

  const toggleSection = (title) => {
    const index = formSections.findIndex((section) => section.title === title);
    if (index !== -1) {
      setOpenSections((prev) => {
        const newSet = new Set(prev);
        newSet.has(index) ? newSet.delete(index) : newSet.add(index);
        return newSet;
      });
    }
  };

  return (
    <>
      {formSections.map((formSection, index) => (
        <section key={index} className="form-section">
          <button
            className="accordion-toggle"
            onClick={() => toggleSection(formSection.title)}
          >
            <h3>{formSection.title}</h3>
          </button>
          {openSections.has(index) && (
            <DynamicForm
              fields={formSection.fields}
              storageKey={formSection.title}
              onSubmitData={formSection.state}
              editingIndex={
                editingIndex.section === formSection.title ? editingIndex : null
              }
              setEditingIndex={setEditingIndex}
              toggleSection={toggleSection}
              formSectionIndex={index}
            />
          )}
        </section>
      ))}
    </>
  );
};

export default FormContainer;
