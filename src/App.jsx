import "./App.css";
import { useState } from "react";
import Resume from "./components/output/Resume";
import FormContainer from "./components/form/FormContainer";
import { storeItem, getItem } from "./utils/storage";
import Footer from "./components/Footer";
import { defaults } from "./assets/defaultFormData";
// import normalizeEntry from "./utils/entryNormalizer";

function App() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);
  const [skillInfo, setSkillInfo] = useState({});
  const [languageInfo, setLanguageInfo] = useState([]);
  const [hobbyInfo, setHobbyInfo] = useState([]);
  const [showDefaults, setSetshowDefaults] = useState(false);
  const [editingIndex, setEditingIndex] = useState({
    section: null,
    index: null,
    data: null,
  });

  const [liveFormData, setLiveFormData] = useState({
    personalInfo: {},
    educationInfo: [],
    workInfo: [],
    miscInfo: {
      skills: [""],
      languages: [""],
      hobbies: [""],
    },
  });

  const toggleDefaultData = () => {
    if (!showDefaults) {
      setPersonalInfo([defaults.personalInformation]);
      setEducationInfo(defaults.educationInformation);
      setWorkInfo(defaults.experienceInformation);
    } else {
      setPersonalInfo(getItem("Personal Info"));
      setEducationInfo(getItem("Education"));
      setWorkInfo(getItem("Experience"));
    }

    setSetshowDefaults((prev) => !prev);
  };

  const handleEditEntry = (section, index) => {
    const targetArray =
      section === "Education"
        ? educationInfo
        : section === "Experience"
        ? workInfo
        : section === "Personal Info"
        ? personalInfo
        : null;
    setEditingIndex({ section, index, data: targetArray[index] });
  };

  const handleDeleteEntry = (section, index) => {
    let updatedData;
    if (section === "Education") {
      updatedData = educationInfo.filter((_, i) => i !== index);
      setEducationInfo(updatedData);
      storeItem("Education", JSON.stringify(updatedData));
    } else if (section === "Experience") {
      updatedData = workInfo.filter((_, i) => i !== index);
      setWorkInfo(updatedData);
      storeItem("Experience", updatedData);
    } else if (section === "Personal Info") {
      updatedData = personalInfo.filter((_, i) => i !== index);
      setPersonalInfo(updatedData);
    }

    storeItem(section, updatedData);
    setEditingIndex({ section: null, index: null, data: null });
  };

  function mergeWithLive(savedArray, liveDraft, title) {
    if (
      editingIndex.section === title ||
      !liveDraft ||
      Object.keys(liveDraft).length === 0
    )
      return savedArray; // Don't merge live data
    return [...savedArray, { ...liveDraft, id: "live-preview" }];
  }

  function mergeSingleWithLive(savedArray, liveDraft, title) {
    if (
      editingIndex.section === title ||
      !liveDraft ||
      Object.keys(liveDraft).length === 0
    )
      return savedArray;
    return [liveDraft]; // personalInfo is always one entry
  }

  function mergeArrayWithLive(savedArray, liveDraft, title) {
    const arrayToUse = Array.isArray(savedArray) ? savedArray : [];

    if (
      editingIndex.section === title ||
      // !liveDraft ||
      !Array.isArray(liveDraft) ||
      liveDraft.every((item) => item === "")
    )
      return arrayToUse;

    const uniqueLive = liveDraft.filter(
      (str) => str.trim() && !arrayToUse.includes(str.trim()),
    );
    // Merge strings into one array, remove empties
    return [...arrayToUse, ...uniqueLive];
  }

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
              liveFormData={liveFormData}
              setLiveFormData={setLiveFormData}
              setSkillInfo={setSkillInfo}
              setLanguageInfo={setLanguageInfo}
              setHobbyInfo={setHobbyInfo}
            />
          </div>
          <button className="toggle-default-btn" onClick={toggleDefaultData}>
            {showDefaults ? "Hide Sample CV" : "Load Sample CV"}
          </button>
        </div>

        <div id="resume-area">
          <Resume
            personalInfo={mergeSingleWithLive(
              personalInfo,
              liveFormData.personalInfo,
              "Personal Info",
            )}
            educationInfo={mergeWithLive(
              educationInfo,
              liveFormData.educationInfo,
              "Education",
            )}
            workInfo={mergeWithLive(
              workInfo,
              liveFormData.workInfo,
              "Experience",
            )}
            skillInfo={mergeArrayWithLive(
              skillInfo,
              liveFormData.miscInfo.skills,
              "Skills, Languages & Hobbies",
            )}
            languageInfo={mergeArrayWithLive(
              languageInfo,
              liveFormData.miscInfo.languages,
              "Skills, Languages & Hobbies",
            )}
            hobbyInfo={mergeArrayWithLive(
              hobbyInfo,
              liveFormData.miscInfo.hobbies,
              "Skills, Languages & Hobbies",
            )}
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
