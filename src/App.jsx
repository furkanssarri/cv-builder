import "./App.css";
import { useState } from "react";
import Resume from "./components/output/Resume";
import FormContainer from "./components/form/FormContainer";
import { storeItem } from "./utils/storage";
import Footer from "./components/Footer";
import { defaults } from "./assets/defaultFormData";

function App() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);
  const [showDefaults, setSetshowDefaults] = useState(false);
  const [editingIndex, setEditingIndex] = useState({
    section: null,
    index: null,
    data: null,
  });

  const toggleDefaultData = () => {
    if (!showDefaults) {
      setPersonalInfo([defaults.personalInformation]);
      setEducationInfo(defaults.educationInformation);
      setWorkInfo(defaults.experienceInformation);
    } else {
      setPersonalInfo([]);
      setEducationInfo([]);
      setWorkInfo([]);
    }
    setSetshowDefaults((prev) => !prev);
  };

  const handleEditEntry = (section, index) => {
    const targetArray =
      section === "Education Info"
        ? educationInfo
        : section === "Work Experience"
        ? workInfo
        : section === "Personal Info"
        ? personalInfo
        : null;
    setEditingIndex({ section, index, data: targetArray[index] });
  };

  const handleDeleteEntry = (section, index) => {
    let updatedData;
    if (section === "Education Info") {
      updatedData = educationInfo.filter((_, i) => i !== index);
      setEducationInfo(updatedData);
      storeItem("Education Info", JSON.stringify(updatedData));
    } else if (section === "Work Experience") {
      updatedData = workInfo.filter((_, i) => i !== index);
      setWorkInfo(updatedData);
      storeItem("Work Experience", updatedData);
    } else if (section === "Personal Info") {
      updatedData = personalInfo.filter((_, i) => i !== index);
      setPersonalInfo(updatedData);
    }

    storeItem(section, updatedData);
    setEditingIndex({ section: null, index: null, data: null });
  };

  return (
    <div className="App">
      <div className="container">
        <div id="form-area">
          <div className="form-wrapper">
            <FormContainer
              setPersonalInfo={setPersonalInfo}
              setEducationInfo={setEducationInfo}
              setWorkInfo={setWorkInfo}
              editingIndex={editingIndex}
              setEditingIndex={setEditingIndex}
            />
          </div>
          <button className="toggle-default-btn" onClick={toggleDefaultData}>
            {showDefaults ? "Hide Sample CV" : "Load Sample CV"}
          </button>
        </div>

        <div id="resume-area">
          <Resume
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            workInfo={workInfo}
            handleEditEntry={handleEditEntry}
            handleDeleteEntry={handleDeleteEntry}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
