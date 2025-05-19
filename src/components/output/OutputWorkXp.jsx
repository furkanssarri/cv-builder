import React from "react";

const OutputWorkXp = ({ workExperience }) => {
  return (
    <div className="display-info">
      {workExperience.jobtitle && (
        <p>
          <strong>Job Title:</strong> {workExperience.jobtitle}
        </p>
      )}
      {workExperience.company && (
        <p>
          <strong>Company:</strong> {workExperience.company}
        </p>
      )}
      {workExperience.startYear && workExperience.endYear && (
        <p>
          <strong>Years: </strong> {workExperience.startYear} -{" "}
          {workExperience.endYear}
        </p>
      )}
    </div>
  );
};

export default OutputWorkXp;
