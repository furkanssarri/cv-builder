import { useState, useEffect } from "react";
import DynamicForm from "./DynamicForm.jsx";
import {
  personalInfoFields,
  educationInfoFields,
  workExperienceFields,
  skillInfoFields,
  languageInfoFields,
  hobbyInfoFields,
} from "../../assets/formConfig.js";

const FormContainer = ({
  setPersonalInfo,
  setEducationInfo,
  setWorkInfo,
  editingIndex,
  setEditingIndex,
  liveFormData,
  setLiveFormData,
  setSkillInfo,
  setLanguageInfo,
  setHobbyInfo,
}) => {
  const [openSections, setOpenSections] = useState(new Set());
  const formSections = [
    {
      id: 0,
      sectionKey: "personalInfo",
      title: "Personal Info",
      fields: personalInfoFields,
      state: setPersonalInfo,
    },
    {
      id: 1,
      sectionKey: "workInfo",
      title: "Experience",
      fields: workExperienceFields,
      state: setWorkInfo,
    },
    {
      id: 2,
      sectionKey: "educationInfo",
      title: "Education",
      fields: educationInfoFields,
      state: setEducationInfo,
    },
    {
      id: 3,
      sectionKey: "miscInfo",
      title: "Skills, Languages & Hobbies",
      fields: [...skillInfoFields, ...languageInfoFields, ...hobbyInfoFields],
      state: (updated) => {
        if (updated && typeof updated === "object") {
          const skills = Array.isArray(updated.skills) ? updated.skills : [];
          const languages = Array.isArray(updated.languages)
            ? updated.languages
            : [];
          const hobbies = Array.isArray(updated.hobbies) ? updated.hobbies : [];

          setSkillInfo(skills);
          setLanguageInfo(languages);
          setHobbyInfo(hobbies);
          setLiveFormData((prev) => ({
            ...prev,
            miscInfo: {
              skills,
              languages,
              hobbies,
            },
          }));
        }
      },
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
              formData={liveFormData[formSection.sectionKey]}
              setFormData={(newData) =>
                setLiveFormData((prev) => ({
                  ...prev,
                  [formSection.sectionKey]: newData,
                }))
              }
            />
          )}
        </section>
      ))}
    </>
  );
};

export default FormContainer;
