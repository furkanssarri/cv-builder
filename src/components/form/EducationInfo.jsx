import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
// import useForm from "../../hooks/useForm";
import { saveToStorage, getFromStorage } from "../../utils/storage";

const EducationInfo = ({ isOpen, toggleOpenClose }) => {
  const storedData = getFromStorage("edu-info") || [];
  const [educationEntries, setEducationEntries] = useState(
    storedData.length > 0
      ? storedData
      : [
          {
            id: Date.now(),
            schoolName: "",
            department: "",
            educationStartDate: "",
            educationEndDate: "",
          },
        ],
  );
  const handleChange = (id, e) => {
    const { name, value } = e.target;
    setEducationEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, [name]: value } : entry,
      ),
    );
  };

  const handleAddEntry = () => {
    setEducationEntries([
      ...educationEntries,
      {
        id: Date.now(),
        schoolName: "",
        department: "",
        educationStartDate: "",
        educationEndDate: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveToStorage("edu-info", educationEntries);
  };

  return (
    <section
      className={`accordion-content ${isOpen ? "open" : ""}`}
      id="edu-info"
    >
      <div className="accordion-header" onClick={toggleOpenClose}>
        <h2>Education Information</h2>
        <FaAngleDown className={`icon ${isOpen ? "rotate" : ""}`} />
      </div>

      {isOpen && (
        <form onSubmit={handleSubmit}>
          {educationEntries.map((entry) => (
            <fieldset key={entry.id}>
              <label htmlFor={`school-${entry.id}`}>School</label>
              <input
                name="schoolName"
                id={`school-${entry.id}`}
                placeholder="School Name..."
                type="text"
                value={entry.schoolName}
                onChange={(e) => handleChange(entry.id, e)}
              />
              <label htmlFor={`department-${entry.id}`}>Department</label>
              <input
                name="department"
                id={`department-${entry.id}`}
                placeholder="Your Department..."
                type="text"
                value={entry.department}
                onChange={(e) => handleChange(entry.id, e)}
              />
              <label htmlFor={`educationStartDate-${entry.id}`}>
                Date Started
              </label>
              <input
                name="educationStartDate"
                id={`educationStartDate-${entry.id}`}
                placeholder="Start Date..."
                type="text"
                value={entry.educationStartDate}
                onChange={(e) => handleChange(entry.id, e)}
              />
              <label htmlFor={`educationEndDate-${entry.id}`}>
                Date Graduated
              </label>
              <input
                name="educationEndDate"
                id={`educationEndDate-${entry.id}`}
                placeholder="Graduation date..."
                type="text"
                value={entry.educationEndDate}
                onChange={(e) => handleChange(entry.id, e)}
              />
            </fieldset>
          ))}
          <button type="button" onClick={handleAddEntry}>
            Add Another Entry
          </button>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default EducationInfo;
