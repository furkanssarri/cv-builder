import ResumeMain from "./ResumeMain";
import ResumeAside from "./ResumeAside";

const Resume = ({
  personalInfo,
  educationInfo,
  workInfo,
  handleEditEntry,
  handleDeleteEntry,
}) => {
  return (
    <div className="resume-layout">
      <ResumeAside personalInfo={personalInfo} />
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
