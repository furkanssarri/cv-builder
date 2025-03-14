import "./App.css";
import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationalInfo from "./components/EducationalInfo";
import WorkExperience from "./components/WorkExperience";

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

  const handleSubmit = (e, section) => {
    e.preventDefault(); // Prevent default form submission

    switch (section) {
      case "personal-info":
        if (!nameValue || !surNameValue || !emailValue || !phoneValue) {
          console.log("Please fill out all fields in Personal Information.");
          return;
        }
        console.log("Personal Info:", {
          nameValue,
          surNameValue,
          emailValue,
          phoneValue,
        });

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
        console.log("Educational Info:", {
          schoolName,
          department,
          educationStartDate,
          educationEndDate,
        });

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
        console.log("Work Experience:", {
          companyName,
          position,
          responsibilities,
          workStartDate,
          workEndDate,
        });

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

  const toggleOpenClose = (section) => {
    setopenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <h1>Cv Form</h1>
      <div className="container">
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

        <EducationalInfo
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

        <WorkExperience
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
      </div>
    </>
  );
}

export default App;
