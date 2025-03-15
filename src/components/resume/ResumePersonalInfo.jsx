import React from "react";

const ResumePersonalInfo = () => {
  const data = JSON.parse(sessionStorage.getItem("personal-info"));
  return (
    <>
      <div className="personal-info">
        {data && (
          <div className="personal-info-entry">
            <span id="full-name">
              <h3>{`${data[0].nameValue} ${data[0].surNameValue}`}</h3>
            </span>
            <div className="contact-info">
              <span id="email">
                <a href={`mailto:${data[0].emailValue}`}>
                  {data[0].emailValue}
                </a>
              </span>
              •
              <span id="phone">
                <a href={`tel:${data[0].phoneValue}`}>{data[0].phoneValue}</a>
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ResumePersonalInfo;
