import "./App.css";
import React, { useEffect, useState } from "react";
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
    setopenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSubmit = (e, section) => {
    e.preventDefault(); // Prevent default form submission

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
        updatedData = [...existingData, newEntry];
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
        updatedData = [...existingData, newEntry];
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
        updatedData = [...existingData, newEntry];
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

  useEffect(() => {
    const personalInfo = sessionStorage.getItem("personal-info");
    if (personalInfo) {
      const { nameValue, surNameValue, emailValue, phoneValue } =
        JSON.parse(personalInfo);
      // console.log("Personal Information: ", {
      //   nameValue,
      //   surNameValue,
      //   emailValue,
      //   phoneValue,
      // });
    }

    const eduInfo = sessionStorage.getItem("edu-info");
    if (eduInfo) {
      const { schoolName, department, educationStartDate, educationEndDate } =
        JSON.parse(eduInfo);
      // console.log("Educational Information: ", {
      //   schoolName,
      //   department,
      //   educationStartDate,
      //   educationEndDate,
      // });
    }

    const workXp = sessionStorage.getItem("work-xp");
    if (workXp) {
      const {
        companyName,
        position,
        responsibilities,
        workStartDate,
        workEndDate,
      } = JSON.parse(workXp);
      // console.log("Work Experience: ", {
      //   companyName,
      //   position,
      //   responsibilities,
      //   workStartDate,
      //   workEndDate,
      // });
    }
  }, []);

  return (
    <>
      <div className="container">
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

          <button type="button" onClick={() => sessionStorage.clear()}>
            Clear Storage
          </button>
        </section>

        <hr />
        <CvOutput />
      </div>
    </>
  );
}

export default App;
