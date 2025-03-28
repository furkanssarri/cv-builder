import "./App.css";
import React, { useState, useRef } from "react";
import PersonalInfo from "./components/form/PersonalInfo";
import EducationInfo from "./components/form/EducationInfo";
import WorkXpInfo from "./components/form/WorkXpInfo";
import CvOutput from "./components/resume/CvOutput";

function App() {
  // Accordion States
  const [openSections, setOpenSections] = useState({
    "personal-info": false,
    "edu-info": false,
    "work-xp": false,
  });

  const toggleOpenClose = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Refs to child components
  const personalInfoRef = useRef(null);
  const educationInfoRef = useRef(null);
  const workXpRef = useRef(null);

  const handleCvEdit = (section) => {
    const refMap = {
      "personal-info": personalInfoRef,
      "edu-info": educationInfoRef,
      "work-xp": workXpRef,
    };
    if (refMap[section] && refMap[section].current) {
      refMap[section].current.handleEdit(); // Calls handleEdit inside child component
    }
    toggleOpenClose(section);
  };

  return (
    <>
      <div className="container">
        <div className="form-wrapper">
          <section id="form-area">
            <h1>Cv Form</h1>

            <PersonalInfo
              ref={personalInfoRef}
              isOpen={openSections["personal-info"]}
              toggleOpenClose={() => toggleOpenClose("personal-info")}
            />
            <EducationInfo
              ref={educationInfoRef}
              isOpen={openSections["edu-info"]}
              toggleOpenClose={() => toggleOpenClose("edu-info")}
            />
            <WorkXpInfo
              ref={workXpRef}
              isOpen={openSections["work-xp"]}
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
                id="editPersonalInfo"
                onClick={() => handleCvEdit("personal-info")}
                type="button"
              >
                Edit Personal Info
              </button>
              <button
                className="btn"
                id="editEducationInfo"
                onClick={() => handleCvEdit("edu-info")}
                type="button"
              >
                Edit Education Info
              </button>
              <button
                className="btn"
                id="editWorkXp"
                onClick={() => handleCvEdit("work-xp")}
                type="button"
              >
                Edit Work Xp
              </button>
            </div>
          </div>
        </div>
        <CvOutput />
      </div>
    </>
  );
}

export default App;
