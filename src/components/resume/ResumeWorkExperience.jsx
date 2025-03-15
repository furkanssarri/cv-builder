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

      {/* <div className="left-area">
        <span className="companyName">Milestone Software & Consultancy</span>
        <span className="position">Frontend Dev</span>
        <span className="responsibilities">Web Applications</span>
      </div>
      <div className="dates">
        <span className="work-start-date">2016</span>
        <span className="work-end-date">2019</span>
      </div> */}
    </div>
  );
};

export default ResumeWorkExperience;
