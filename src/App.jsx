import "./App.css";
import Form from "./components/form/Form";
import Resume from "./components/output/Resume";
import {
  PERSONAL_INFO_DATA,
  EDUCATION_INFO_DATA,
  WORK_XP_DATA,
} from "./assets/data";

function App() {
  return (
    <div className="App">
      <h1>Build CV</h1>
      <Form />

      <h1>CV Output</h1>
      <Resume
        personalInfo={PERSONAL_INFO_DATA}
        educationInfo={EDUCATION_INFO_DATA}
        workExperience={WORK_XP_DATA}
      />
    </div>
  );
}

export default App;
