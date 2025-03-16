import "./App.css";
import React, { useState } from "react";
import PersonalInfo from "./components/form/PersonalInfo";
import EducationInfo from "./components/form/EducationInfo";
import WorkXpInfo from "./components/form/WorkXpInfo";
import CvOutput from "./components/resume/CvOutput";

import { saveToStorage, getFromStorage } from "./utils/storage";
import { getEditableEntry } from "./utils/formUtils";

function App() {
  // const [nameValue, setNameValue] = useState("");
  // const [surNameValue, setSurNameValue] = useState("");
  // const [emailValue, setEmailValue] = useState("");
  // const [phoneValue, setPhoneValue] = useState("");
  // Educational Info states
  const [schoolName, setSchoolName] = useState("");
  const [department, setDepartment] = useState("");
  const [educationStartDate, setEducationStartDate] = useState("");
  const [educationEndDate, setEducationEndDate] = useState("");

  // Work Experience Info states
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [workStartDate, setWorkStartDate] = useState("");
  const [workEndDate, setWorkEndDate] = useState("");

  // Accordion States
  const [openSections, setopenSections] = useState({
    "personal-info": false,
    "edu-info": false,
    "work-xp": false,
  });

  const toggleOpenClose = (section) => {
    setopenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSubmit = (e, formData, section) => {
    e.preventDefault();

    let existingData = getFromStorage(section);
    let updatedData = [...existingData, formData];

    saveToStorage(section, updatedData);
  };

  // const [, setSelectedEntryIndex] = useState(null);
  // const [, setEditSection] = useState(null);

  // const handleCvEdit = () => {
  //   const editableEntry = getEditableEntry("edu-info");
  //   if (!editableEntry) return;

  //   setFormData(editableEntry.entry);
  // };

  return (
    <>
      <div className="container">
        <div>
          <section id="form-area">
            <h1>Cv Form</h1>
            <PersonalInfo
              isOpen={openSections["personal-info"]}
              handleSubmit={(e) => handleSubmit(e, "personal-info")}
              toggleOpenClose={() => toggleOpenClose("personal-info")}
            />

            <EducationInfo
              schoolName={schoolName}
              department={department}
              educationStartDate={educationStartDate}
              educationEndDate={educationEndDate}
              isOpen={openSections["edu-info"]}
              setSchoolName={setSchoolName}
              setDepartment={setDepartment}
              setEducationStartDate={setEducationStartDate}
              setEducationEndDate={setEducationEndDate}
              handleSubmit={(e) => handleSubmit(e, "edu-info")}
              toggleOpenClose={() => toggleOpenClose("edu-info")}
            />

            <WorkXpInfo
              companyName={companyName}
              position={position}
              responsibilities={responsibilities}
              workStartDate={workStartDate}
              workEndDate={workEndDate}
              isOpen={openSections["work-xp"]}
              setCompanyName={setCompanyName}
              setPosition={setPosition}
              setResponsibilities={setResponsibilities}
              setWorkStartDate={setWorkStartDate}
              setWorkEndDate={setWorkEndDate}
              handleSubmit={(e) => handleSubmit(e, "work-xp")}
              toggleOpenClose={() => toggleOpenClose("work-xp")}
            />
          </section>
          <div className="btn-wrapper">
            <button
              className="btn"
              onClick={() => sessionStorage.clear()}
              type="button"
            >
              Clear Storage
            </button>
            <br />

            <div className="buttons-wrapper">
              <button
                className="btn"
                data-id="personal-information"
                id="editPersonalInfo"
                onClick={() => handleCvEdit("personal-info")}
                type="button"
              >
                Edit Personal Info
              </button>
              <button
                className="btn"
                data-id="education-information"
                id="editEducationInfo"
                onClick={() => handleCvEdit("edu-info")}
                type="button"
              >
                Edit Education Info
              </button>
              <button
                className="btn"
                data-id="work-xp"
                id="editWorkXp"
                onClick={() => handleCvEdit("work-xp")}
                type="button"
              >
                Edit Work Xp
              </button>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <CvOutput />
      </div>
    </>
  );
}

export default App;
