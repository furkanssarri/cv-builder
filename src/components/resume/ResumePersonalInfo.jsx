import React from "react";

const ResumePersonalInfo = () => {
  return (
    <>
      <div className="personal-info">
        <span id="full-name">
          <h3>Furkan Sarı</h3>
        </span>
        <div className="contact-info">
          <span id="email">
            <a href="mailto:nowhere@nowhere.com">aaa@bbb.ccc</a>
          </span>
          •
          <span id="phone">
            <a href="tel:5554443322">5554443322</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default ResumePersonalInfo;
