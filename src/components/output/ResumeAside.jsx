import blankPP from "../../assets/img/blankPP.webp";
import { LuPhone, LuMail } from "react-icons/lu";
import { FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const ResumeAside = ({ personalInfo }) => {
  if (!Array.isArray(personalInfo) || personalInfo.length === 0) return null;

  const { email, phone, portfolio, shortAddress } = personalInfo[0]; // only one entry
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
        <p>
          <FaMapMarkerAlt className="contact-icon" /> {shortAddress}
        </p>
        {portfolio && (
          <a
            href={`https://www.${portfolio}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" /> {portfolio}
          </a>
        )}
      </div>
      {/* other sections will appear here in the future */}
    </aside>
  );
};

export default ResumeAside;
