import React from "react";

const ResumeEducationInfo = () => {
  const educationData = JSON.parse(sessionStorage.getItem("edu-info")) || [];
  return (
    <>
      <div className="education-information">
        <h4>Education Information</h4>
        <hr />
        {educationData.map((edu, index) => (
          <div key={index} className="education-entry">
            <div className="program">
              <span className="school-name">{edu.schoolName}</span>
              <span className="deoartment">{edu.department}</span>
            </div>
            <div className="dates">
              <span className="education-start-date">
                {edu.educationStartDate}
              </span>
              <span className="education-end-date">{edu.educationEndDate}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResumeEducationInfo;
