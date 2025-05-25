import React from "react";

const OutputSection = ({ personalInfo, educationInfo, workInfo }) => {
  return (
    <div className="display-info">
      {personalInfo && (
        <>
          <div className="personal-data-row">
            <h4>{`${personalInfo[0].firstName} ${personalInfo[0].lastName}`}</h4>
            <span className="contact-info">
              <a href={`mailto:${personalInfo[0].email}`}>
                {personalInfo[0].email}
              </a>
            </span>
            <span className="contact-info">
              <a href={`tel:${personalInfo[0].phone}`}>
                {personalInfo[0].phone}
              </a>
            </span>
          </div>
          <hr />
        </>
      )}

      {Array.isArray(educationInfo) && educationInfo.length > 0 && (
        <>
          <h2>Education</h2>
          {educationInfo.map((edu, index) => (
            <div className="data-row" key={index}>
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
            </div>
          ))}
        </>
      )}

      {Array.isArray(workInfo) && workInfo.length > 0 && (
        <>
          <h2>Experience</h2>
          {workInfo.map((exp, index) => (
            <div className="data-row" key={index}>
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
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default OutputSection;
