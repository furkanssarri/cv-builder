import "./App.css";
import { useState } from "react";
import Resume from "./components/output/Resume";
import FormContainer from "./components/form/FormContainer";
import { storeItem } from "./utils/storage";

function App() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);
  const [editingIndex, setEditingIndex] = useState({
    section: null,
    index: null,
    data: null,
  });

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
            <h1>Build CV</h1>
            <FormContainer
              setPersonalInfo={setPersonalInfo}
              setEducationInfo={setEducationInfo}
              setWorkInfo={setWorkInfo}
              editingIndex={editingIndex}
              setEditingIndex={setEditingIndex}
            />
          </div>
        </div>

        <div id="resume-area">
          <h1>Resume</h1>
          <Resume
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            workInfo={workInfo}
            handleEditEntry={handleEditEntry}
            handleDeleteEntry={handleDeleteEntry}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
