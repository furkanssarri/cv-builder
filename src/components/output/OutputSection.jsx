import React from "react";

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
            <div className="personal-data-row" id="0" key={index}>
              <h4>{`${person.firstName} ${person.lastName}`}</h4>
              <span className="contact-info">
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </span>
              <span className="contact-info">
                <a href={`tel:${person.phone}`}>{person.phone}</a>
              </span>
              <button
                id="edit"
                onClick={() => handleEditEntry("Personal Info", index)}
              >
                Edit
              </button>{" "}
              <button
                id="remove"
                onClick={() => handleDeleteEntry("Personal Info", index)}
              >
                Remove
              </button>
            </div>
          ))}
        </>
      )}

      {Array.isArray(educationInfo) && educationInfo.length > 0 && (
        <>
          <h2>Education</h2>
          {educationInfo.map((edu, index) => (
            <div className="data-row" id={index} key={index}>
              <div className="entry">
                <strong>Institution: </strong>
                {edu.institution}
              </div>
              <div className="entry">
                <strong>Degree: </strong>
                {edu.degree}
              </div>
              <div className="entry">
                <strong>Years: </strong>
                {edu.startYear} - {edu.endYear}
              </div>
              <hr />
              <button
                id="edit"
                onClick={() => handleEditEntry("Education Info", index)}
              >
                Edit
              </button>{" "}
              <button
                id="remove"
                onClick={() => handleDeleteEntry("Education Info", index)}
              >
                Remove
              </button>
            </div>
          ))}
        </>
      )}

      {Array.isArray(workInfo) && workInfo.length > 0 && (
        <>
          <h2>Experience</h2>
          {workInfo.map((exp, index) => (
            <div className="data-row" id={index} key={index}>
              <div className="entry">
                <strong>Company: </strong>
                {exp.company}
              </div>
              <div className="entry">
                <strong>Position: </strong>
                {exp.position}
              </div>
              <div className="entry">
                <strong>Job Description: </strong>
                {exp.description}
              </div>
              <div className="entry">
                <strong>Years: </strong>
                {exp.startYear} - {exp.endYear}
              </div>
              <hr />
              <button
                id="edit"
                onClick={() => handleEditEntry("Work Experience", index)}
              >
                Edit
              </button>{" "}
              <button
                id="remove"
                onClick={() => handleDeleteEntry("Work Experience", index)}
              >
                Remove
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default OutputSection;
