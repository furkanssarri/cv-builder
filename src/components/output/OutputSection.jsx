import { Fragment } from "react";
import { LuTrash2, LuSquarePen } from "react-icons/lu";

const OutputSection = ({
  personalInfo,
  educationInfo,
  workInfo,
  handleEditEntry,
  handleDeleteEntry,
}) => {
  return (
    <div className="display-info">
      {Array.isArray(personalInfo) && personalInfo.length > 0 && (
        <>
          <h2>Personal Info</h2>
          {personalInfo.map((person, index) => (
            <Fragment key={person.id}>
              <div className="personal-data-row" id="0" key={index}>
                <p>{`${person.firstName} ${person.lastName}`}</p>
                <span className="contact-info">
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </span>
                <span className="contact-info">
                  <a href={`tel:${person.phone}`}>{person.phone}</a>
                </span>
              </div>
              <div className="buttons">
                <button
                  className="edit"
                  onClick={() => handleEditEntry("Personal Info", index)}
                >
                  <LuSquarePen className="icon edit" />
                </button>{" "}
                <button
                  className="remove"
                  onClick={() => handleDeleteEntry("Personal Info", index)}
                >
                  <LuTrash2 className="icon remove" />
                </button>
              </div>
            </Fragment>
          ))}
        </>
      )}

      {Array.isArray(educationInfo) && educationInfo.length > 0 && (
        <>
          <h2>Education</h2>
          {educationInfo.map((edu, index) => (
            <div className="data-row" id={index} key={edu.id}>
              <div className="entry">{edu.degree}</div>
              <div className="entry">{edu.institution}</div>
              <div className="entry years">
                {edu.startYear} - {edu.endYear}
              </div>
              <hr />
              <div className="buttons">
                <button
                  className="edit"
                  onClick={() => handleEditEntry("Education Info", index)}
                >
                  <LuSquarePen className="icon edit" />
                </button>{" "}
                <button
                  className="remove"
                  onClick={() => handleDeleteEntry("Education Info", index)}
                >
                  <LuTrash2 className="icon remove" />
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      {Array.isArray(workInfo) && workInfo.length > 0 && (
        <>
          <h2>Experience</h2>
          {workInfo.map((exp, index) => (
            <div className="data-row" id={index} key={exp.id}>
              <div className="entry">{exp.company}</div>
              <div className="entry">{exp.position}</div>
              <div className="entry">{exp.description}</div>
              <div className="entry years">
                {exp.startYear} - {exp.endYear}
              </div>
              <hr />
              <div className="buttons">
                <button
                  className="edit"
                  onClick={() => handleEditEntry("Work Experience", index)}
                >
                  <LuSquarePen className="icon edit" />
                </button>{" "}
                <button
                  className="remove"
                  onClick={() => handleDeleteEntry("Work Experience", index)}
                >
                  <LuTrash2 className="icon" />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default OutputSection;
