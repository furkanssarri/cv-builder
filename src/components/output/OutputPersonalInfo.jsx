import React from "react";

const OutputPersonalInfo = ({ personalInfo }) => {
  return (
    <div className="display-info">
      {personalInfo.name && (
        <h4>{`${personalInfo.name} ${personalInfo.surname}`}</h4>
      )}
      {personalInfo.email && (
        <span>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        </span>
      )}{" "}
      {personalInfo.phone && (
        <span>
          <strong>Phone:</strong>{" "}
          <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
        </span>
      )}
    </div>
  );
};

export default OutputPersonalInfo;
