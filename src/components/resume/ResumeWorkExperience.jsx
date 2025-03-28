import React from "react";

const ResumeWorkExperience = () => {
  const data = JSON.parse(sessionStorage.getItem("work-xp")) || [];
  const checkString = (text, searchTerm) =>
    text?.toLowerCase().includes(searchTerm.toLowerCase());
  return (
    <>
      <h4>Work Experiences</h4>
      {data.map((workExp, index) => (
        <div key={index} className="entry">
          <div className="dates">
            <span className="work-start-date">{data[index].workStartDate}</span>
            <span>—</span>
            <span className="work-end-date">
              {checkString(data[index].workEndDate, "-") ? (
                <span className="present">Present</span>
              ) : (
                <span>{data[index].workEndDate}</span>
              )}
            </span>
          </div>
          <div className="details">
            <span className="company-name">{data[index].companyName}</span>
            <span className="position">{data[index].position}</span>
            <span className="responsibilities">
              {data[index].responsibilities}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResumeWorkExperience;
