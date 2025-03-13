import "./App.css";
import React, { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Work Experience Info states
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [workStartDate, setWorkStartDate] = useState("");
  const [workEndDate, setWorkEndDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault;

    if (nameValue || surNameValue || emailValue || phoneValue) {
      const generalInfo = { nameValue, surNameValue, emailValue, phoneValue };
      console.log(generalInfo);
    }
  };

  return (
    <div className="container">
      <h1>Cv Form</h1>
      <form onSubmit={handleSubmit}>
        <GeneralInfo
          nameValue={nameValue}
          surNameValue={surNameValue}
          emailValue={emailValue}
          phoneValue={phoneValue}
          setNameValue={setNameValue}
          setSurNameValue={setSurNameValue}
          setEmailValue={setEmailValue}
          setPhoneValue={setPhoneValue}
        />

        <EducationalInfo
          schoolName={schoolName}
          department={department}
          startDate={startDate}
          endDate={endDate}
          setSchoolName={setSchoolName}
          setDepartment={setDepartment}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />

        <WorkExperience
          companyName={companyName}
          position={position}
          responsibilities={responsibilities}
          workStartDate={workStartDate}
          workEndDate={workEndDate}
          setCompanyName={setCompanyName}
          setPosition={setPosition}
          setResponsibilities={setResponsibilities}
          setWorkStartDate={setWorkStartDate}
          setWorkEndDate={setWorkEndDate}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
