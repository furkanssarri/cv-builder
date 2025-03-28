import React from "react";

const ResumeEducationInfo = () => {
  const educationData = JSON.parse(sessionStorage.getItem("edu-info")) || [];
  const checkString = (text, searchTerm) =>
    text?.toLowerCase().includes(searchTerm.toLowerCase());
  return (
    <>
      <h4>Education Information</h4>
      {educationData.map((edu, index) => (
        <div key={index} className="entry">
          <div className="dates">
            <span className="education-start-date">
              {edu.educationStartDate}
            </span>
            <span>—</span>
            <span className="education-end-date">
              {checkString(edu.educationEndDate, "-") ? (
                <span className="present">Present</span>
              ) : (
                <span>{edu.educationEndDate}</span>
              )}
            </span>
          </div>
          <div className="program">
            <span className="school-name">{edu.schoolName}</span>
            <span className="department">{edu.department}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResumeEducationInfo;
