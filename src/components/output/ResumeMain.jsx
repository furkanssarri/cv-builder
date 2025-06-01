import SectionHeader from "./SectionHeader";
import DataRow from "./DataRow";

const ResumeMain = ({
  personalInfo,
  educationInfo,
  workInfo,
  onEdit,
  onDelete,
}) => {
  if (
    !Array.isArray(personalInfo) ||
    personalInfo.length === 0 ||
    !Array.isArray(educationInfo) ||
    !Array.isArray(workInfo)
  )
    return null;

  const { firstName, lastName, title, about } = personalInfo[0];

  if (firstName === "undefined" || lastName === "undefined") {
    return null;
  }

  return (
    <main>
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{title}</h2> <p>{about}</p>
      {workInfo.length > 0 && (
        <>
          <SectionHeader title="Experience" />
          <section className="data-section">
            {workInfo.map((work, index) => (
              <DataRow
                key={work.id}
                data={work}
                index={index}
                section="Work Experience"
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </section>
        </>
      )}
      {educationInfo.length > 0 && (
        <>
          <SectionHeader title="Education" />
          <section className="data-section">
            {educationInfo.map((edu, index) => (
              <DataRow
                key={edu.id}
                data={edu}
                index={index}
                section="Education Info"
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default ResumeMain;
