import "./App.css";
import { useState } from "react";
import Resume from "./components/output/Resume";
import FormContainer from "./components/form/FormContainer";

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
        : section === "Work Info"
        ? workInfo
        : section === "Personal Info"
        ? personalInfo
        : null;
    setEditingIndex({ section, index, data: targetArray[index] });
  };

  return (
    <div className="App">
      <h1>Build CV</h1>
      <FormContainer
        setPersonalInfo={setPersonalInfo}
        setEducationInfo={setEducationInfo}
        setWorkInfo={setWorkInfo}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
      />

      <h1>CV Output</h1>
      <Resume
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        workInfo={workInfo}
        handleEditEntry={handleEditEntry}
      />
    </div>
  );
}

export default App;
