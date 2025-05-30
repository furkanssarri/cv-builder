import blankPP from "../../assets/img/blankPP.webp";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";

const ResumeAside = ({ personalInfo }) => {
  if (!Array.isArray(personalInfo) || personalInfo.length === 0) return null;

  const { email, phone } = personalInfo[0]; // only one entry
  return (
    <aside>
      <div className="photo">
        <img src={blankPP} alt="Profile-Photo" className="profile-photo" />
      </div>
      <div className="contact-info">
        <a href={`mailto:${email}`}>
          {" "}
          <LuMail className="contact-icon" /> {email}
        </a>
        <a href={`tel:${phone}`}>
          <LuPhone className="contact-icon" /> {phone}
        </a>
      </div>
      {/* other sections will appear here in the future */}
    </aside>
  );
};

export default ResumeAside;
