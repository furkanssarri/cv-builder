import React from "react";

const OutputSection = ({ personalInfo, educationInfo, workExperience }) => {
  return (
    <div className="display-info">
      {personalInfo && (
        <div className="data-row">
          <h4>{`${personalInfo.name} ${personalInfo.surname}`}</h4>
          <p>
            <strong>Email: </strong>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </p>
          <p>
            <strong>Phone: </strong>
            <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
          </p>
        </div>
      )}

      {educationInfo && (
        <div className="data-row">
          <p>
            <strong>Institution: </strong>
            {educationInfo.institution}
          </p>
          <p>
            <strong>Degree: </strong>
            {educationInfo.degree}
          </p>
          <p>
            <strong>Years: </strong>
            {educationInfo.startYear} - {educationInfo.endYear}
          </p>
        </div>
      )}

      {workExperience && (
        <div className="data-row">
          <p>
            <strong>Company: </strong>
            {workExperience.company}
          </p>
          <p>
            <strong>Position: </strong>
            {workExperience.jobTitle}
          </p>
          <p>
            <strong>Job Description: </strong>
            {workExperience.description}
          </p>
          <p>
            <strong>Years: </strong>
            {workExperience.startYear} - {workExperience.endYear}
          </p>
        </div>
      )}
    </div>
  );
};

export default OutputSection;
