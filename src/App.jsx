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
        : section === "Work Info"
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
    } else if (section === "Work Info") {
      updatedData = workInfo.filter((_, i) => i !== index);
      setWorkInfo(updatedData);
      storeItem("Work Info", updatedData);
    } else if (section === "Personal Info") {
      updatedData = personalInfo.filter((_, i) => i !== index);
      setPersonalInfo(updatedData);
    }

    storeItem(section, updatedData);
    setEditingIndex({ section: null, index: null, data: null });
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
        handleDeleteEntry={handleDeleteEntry}
      />
    </div>
  );
}

export default App;
