import "./App.css";
import React, { useState } from "react";
import PersonalInfo from "./components/form/PersonalInfo";
import EducationInfo from "./components/form/EducationInfo";
import WorkXpInfo from "./components/form/WorkXpInfo";
import CvOutput from "./components/resume/CvOutput";

function App() {
  // General Info states
  const [nameValue, setNameValue] = useState("");
  const [surNameValue, setSurNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

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

  const handleSubmit = (e, section) => {
    e.preventDefault();

    let newEntry, existingData, updatedData;
    switch (section) {
      case "personal-info":
        if (!nameValue || !surNameValue || !emailValue || !phoneValue) {
          console.log("Please fill out all fields in Personal Information.");
          return;
        }

        // Store to sessionStorage
        newEntry = { nameValue, surNameValue, emailValue, phoneValue };

        existingData =
          JSON.parse(sessionStorage.getItem("personal-info")) || [];

        if (selectedEntryIndex !== null) {
          existingData[selectedEntryIndex] = newEntry;
          updatedData = [...existingData];
        } else {
          updatedData = [...existingData, newEntry];
        }
        sessionStorage.setItem("personal-info", JSON.stringify(updatedData));

        // Clear input fields
        setNameValue("");
        setSurNameValue("");
        setEmailValue("");
        setPhoneValue("");
        break;

      case "edu-info":
        if (!schoolName || !department || !educationStartDate) {
          console.log("Please fill out all fields in Educational Information.");
          return;
        }

        // Store to sessionStorage
        newEntry = {
          schoolName,
          department,
          educationStartDate,
          educationEndDate,
        };

        existingData = JSON.parse(sessionStorage.getItem("edu-info")) || [];
        if (selectedEntryIndex !== null) {
          existingData[selectedEntryIndex] = newEntry;
          updatedData = [...existingData];
        } else {
          updatedData = [...existingData, newEntry];
        }
        sessionStorage.setItem("edu-info", JSON.stringify(updatedData));

        // Clear input fields
        setSchoolName("");
        setDepartment("");
        setEducationStartDate("");
        setEducationEndDate("");
        break;

      case "work-xp":
        if (!companyName || !position || !workStartDate) {
          console.log("Please fill out all fields in Work Experience.");
          return;
        }

        // Store to sessionStorage
        newEntry = {
          companyName,
          position,
          responsibilities,
          workStartDate,
          workEndDate,
        };

        existingData = JSON.parse(sessionStorage.getItem("work-xp")) || [];
        if (selectedEntryIndex !== null) {
          existingData[selectedEntryIndex] = newEntry;
          updatedData = [...existingData];
        } else {
          updatedData = [...existingData, newEntry];
        }
        sessionStorage.setItem("work-xp", JSON.stringify(updatedData));

        // Clear input fields
        setCompanyName("");
        setPosition("");
        setResponsibilities("");
        setWorkStartDate("");
        setWorkEndDate("");
        break;

      default:
        break;
    }
  };

  const [selectedEntryIndex, setSelectedEntryIndex] = useState(null);
  const [, setEditSection] = useState(null);

  const hanldeCvEdit = (key) => {
    const existingData = JSON.parse(sessionStorage.getItem(key)) || [];

    if (existingData.length === 0) {
      console.log("No data found for this section.");
      return;
    }
    let indexToEdit = 0;
    if (existingData.length > 1) {
      const userChoice = prompt(
        `Select entry index (0 ${existingData.length - 1})`,
      );
      if (userChoice === null || isNaN(userChoice)) return;
      indexToEdit = Number(userChoice);
    }

    const selectedData = existingData[indexToEdit];

    if (key === "edu-info") {
      setSchoolName(selectedData.schoolName || "");
      setDepartment(selectedData.department || "");
      setEducationStartDate(selectedData.educationStartDate || "");
      setEducationEndDate(selectedData.educationEndDate || "");
    } else if (key === "work-xp") {
      setCompanyName(selectedData.companyName || "");
      setPosition(selectedData.position || "");
      setResponsibilities(selectedData.responsibilities || "");
      setWorkStartDate(selectedData.workStartDate || "");
      setWorkEndDate(selectedData.workEndDate || "");
    } else if (key === "personal-info") {
      setNameValue(selectedData.nameValue || "");
      setSurNameValue(selectedData.surNameValue || "");
      setEmailValue(selectedData.emailValue || "");
      setPhoneValue(selectedData.phoneValue || "");
    }

    setSelectedEntryIndex(indexToEdit);
    setEditSection(key);
    toggleOpenClose(key);
  };

  return (
    <>
      <div className="container">
        <div>
          <section id="form-area">
            <h1>Cv Form</h1>
            <PersonalInfo
              nameValue={nameValue}
              surNameValue={surNameValue}
              emailValue={emailValue}
              phoneValue={phoneValue}
              isOpen={openSections["personal-info"]}
              setNameValue={setNameValue}
              setSurNameValue={setSurNameValue}
              setEmailValue={setEmailValue}
              setPhoneValue={setPhoneValue}
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
                onClick={() => hanldeCvEdit("personal-info")}
                type="button"
              >
                Edit Personal Info
              </button>
              <button
                className="btn"
                data-id="education-information"
                id="editEducationInfo"
                onClick={() => hanldeCvEdit("edu-info")}
                type="button"
              >
                Edit Education Info
              </button>
              <button
                className="btn"
                data-id="work-xp"
                id="editWorkXp"
                onClick={() => hanldeCvEdit("work-xp")}
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
