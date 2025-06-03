import blankPP from "../../assets/img/blankPP.webp";
import { LuPhone, LuMail } from "react-icons/lu";
import { FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const ResumeAside = ({ personalInfo, skillInfo, languageInfo, hobbyInfo }) => {
  if (!Array.isArray(personalInfo) || personalInfo.length === 0) return null;

  const { email, phone, portfolio, shortAddress } = personalInfo[0]; // only one entry

  if (
    email === "undefined" ||
    phone === "undefined" ||
    portfolio === "undefined" ||
    shortAddress === "undefined"
  ) {
    return null;
  }

  return (
    <aside>
      <div className="photo">
        <img
          src={personalInfo[0].photo || blankPP}
          alt="Profile-Photo"
          className="profile-photo"
        />
      </div>
      <div className="contact-info">
        {email && (
          <a href={`mailto:${email}`}>
            {" "}
            <LuMail className="contact-icon" /> {email}
          </a>
        )}
        {phone && (
          <a href={`tel:${phone}`}>
            <LuPhone className="contact-icon" /> {phone}
          </a>
        )}
        {portfolio && (
          <a
            href={`https://www.${portfolio}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" /> {portfolio}
          </a>
        )}
        {shortAddress && (
          <p>
            <FaMapMarkerAlt className="contact-icon" /> {shortAddress}
          </p>
        )}
      </div>
      {/* other sections will appear here in the future */}
      <div className="section">
        {skillInfo?.length > 0 && (
          <>
            <h4>Skills</h4>
            <ul>
              {skillInfo.map((skill, i) => (
                <li key={`skill-${i}`}>{skill}</li>
              ))}
            </ul>
          </>
        )}
        {languageInfo?.length > 0 && (
          <>
            <h4>Languages</h4>
            <ul>
              {languageInfo.map((lang, i) => (
                <li key={`lang${i}`}>{lang}</li>
              ))}
            </ul>
          </>
        )}
        {hobbyInfo?.length > 0 && (
          <>
            <h4>Hobbies</h4>
            <ul>
              {hobbyInfo.map((hobby, i) => (
                <li key={`hobby-${i}`}>{hobby}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </aside>
  );
};

export default ResumeAside;
