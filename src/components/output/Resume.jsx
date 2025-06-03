import ResumeMain from "./ResumeMain";
import ResumeAside from "./ResumeAside";

const Resume = ({
  personalInfo,
  educationInfo,
  workInfo,
  skillInfo,
  languageInfo,
  hobbyInfo,
  handleEditEntry,
  handleDeleteEntry,
}) => {
  return (
    <div className="resume-layout">
      <ResumeAside
        personalInfo={personalInfo}
        skillInfo={skillInfo}
        languageInfo={languageInfo}
        hobbyInfo={hobbyInfo}
      />
      <ResumeMain
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        workInfo={workInfo}
        onEdit={handleEditEntry}
        onDelete={handleDeleteEntry}
      />
    </div>
  );
};

export default Resume;
