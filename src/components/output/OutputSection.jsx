import React from "react";

const OutputSection = ({ personalInfo, educationInfo, workInfo }) => {
  return (
    <div className="display-info">
      {personalInfo && (
        <>
          <div className="personal-data-row">
            <h4>{`${personalInfo.firstName} ${personalInfo.lastName}`}</h4>
            <span className="contact-info">
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </span>
            <span className="contact-info">
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </span>
          </div>
          <hr />
        </>
      )}

      {educationInfo && (
        <>
          <div className="data-row">
            <div className="entry">
              <strong>Institution: </strong>
              {educationInfo.institution}
            </div>
            <div className="entry">
              <strong>Degree: </strong>
              {educationInfo.degree}
            </div>
            <div className="entry">
              <strong>Years: </strong>
              {educationInfo.startYear} - {educationInfo.endYear}
            </div>
          </div>
          <hr />
        </>
      )}

      {workInfo && (
        <>
          <div className="data-row">
            <div className="entry">
              <strong>Company: </strong>
              {workInfo.company}
            </div>
            <div className="entry">
              <strong>Position: </strong>
              {workInfo.position}
            </div>
            <div className="entry">
              <strong>Job Description: </strong>
              {workInfo.description}
            </div>
            <div className="entry">
              <strong>Years: </strong>
              {workInfo.startYear} - {workInfo.endYear}
            </div>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default OutputSection;
