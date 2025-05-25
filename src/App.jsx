import "./App.css";
import { useState } from "react";
import Resume from "./components/output/Resume";
import FormContainer from "./components/form/FormContainer";

function App() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);

  return (
    <div className="App">
      <h1>Build CV</h1>
      <FormContainer
        setPersonalInfo={setPersonalInfo}
        setEducationInfo={setEducationInfo}
        setWorkInfo={setWorkInfo}
      />

      <h1>CV Output</h1>
      <Resume
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        workInfo={workInfo}
      />
    </div>
  );
}

export default App;
