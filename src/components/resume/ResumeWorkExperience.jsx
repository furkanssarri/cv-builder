import React from "react";

const ResumeWorkExperience = () => {
  const data = JSON.parse(sessionStorage.getItem("work-xp")) || [];
  return (
    <div className="work-experience">
      {data.map((workExp, index) => (
        <div key={index} className="work-exp-entry">
          <div className="left-area">
            <span className="company-name">{data[index].companyName}</span>
            <span className="position">{data[index].position}</span>
            <span className="responsibilities">
              {data[index].responsibilities}
            </span>
          </div>
          <div className="dates">
            <span className="work-start-date">{data[index].workStartDate}</span>
            <span className="work-end-date">{data[index].workEndDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResumeWorkExperience;
