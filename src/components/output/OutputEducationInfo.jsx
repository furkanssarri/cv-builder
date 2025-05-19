import React from "react";

const OutputEducationInfo = ({ educationInfo }) => {
  return (
    <div className="display-info">
      {educationInfo.degree && (
        <p>
          <strong>Degree:</strong> {educationInfo.degree}
        </p>
      )}

      {educationInfo.institution && (
        <p>
          <strong>Institution: </strong> {educationInfo.institution}
        </p>
      )}

      {educationInfo.startYear && educationInfo.endYear && (
        <p>
          <strong>Years: </strong> {educationInfo.startYear} -{" "}
          {educationInfo.endYear}
        </p>
      )}
    </div>
  );
};

export default OutputEducationInfo;
