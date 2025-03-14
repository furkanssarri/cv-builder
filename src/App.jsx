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

  const handleSubmit = (e) => {
    e.preventDefault;

    if (nameValue || surNameValue || emailValue || phoneValue) {
      const PersonalInfo = { nameValue, surNameValue, emailValue, phoneValue };
      console.log(PersonalInfo);
    }
  };

  const toggleOpenClose = (section) => {
    setopenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="container">
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
        onSubmit={handleSubmit}
        toggleOpenClose={() => toggleOpenClose("personal-info")}
      />

      <EducationalInfo
        schoolName={schoolName}
        department={department}
        startDate={educationStartDate}
        endDate={educationEndDate}
        isOpen={openSections["edu-info"]}
        setSchoolName={setSchoolName}
        setDepartment={setDepartment}
        setStartDate={setEducationStartDate}
        setEndDate={setEducationEndDate}
        onSubmit={handleSubmit}
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
        onSubmit={handleSubmit}
        toggleOpenClose={() => toggleOpenClose("work-xp")}
      />
    </div>
  );
}

export default App;
