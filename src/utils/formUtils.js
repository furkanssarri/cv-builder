import { getFromStorage } from "./storage";

/**
 * Initializes state for different form sections.
 */
export const initializeFormState = (section) => {
  const defaultStates = {
    "personal-info": {
      nameValue: "",
      surNameValue: "",
      emailValue: "",
      phoneValue: "",
    },
    "edu-info": {
      schoolName: "",
      department: "",
      educationStartDate: "",
      educationEndDate: "",
    },
    "work-xp": {
      companyName: "",
      position: "",
      responsibilities: "",
      workStartDate: "",
      workEndDate: "",
    },
  };
  if (!defaultStates[section]) {
    console.error(`Invalid section: ${section}`);
    return;
  }
  return defaultStates[section] || {};
};

/**
 * Resets form fields dynamically.
 */
export const resetFormState = (section, setState) => {
  if (typeof setState !== "function") {
    console.error("setState must be a function.");
    return;
  }
  // Clear selectedEntryIndex
  setState([initializeFormState(section)]);
};

/**
 * Retrieves an entry from session storage for editing.
 */
export const getEditableEntry = (section) => {
  const existingData = getFromStorage(section);

  if (!Array.isArray(existingData) || existingData.length === 0) {
    console.warn(`No existing data found for ${section}`);
    return null;
  }

  let indexToEdit = 0;
  if (existingData.length > 1) {
    const userChoice = prompt(
      `Select entry index (0 - ${existingData.length - 1}):`,
    );
    const parsedChoice = Number(userChoice);
    if (
      userChoice === null ||
      isNaN(parsedChoice) ||
      parsedChoice < 0 ||
      parsedChoice >= existingData.length
    ) {
      console.warn("Invalid index selected.");
      return null;
    }
    indexToEdit = parsedChoice;
  }

  console.log(indexToEdit);
  console.log(existingData[indexToEdit]);
  console.log({ entry: { ...existingData[indexToEdit] }, index: indexToEdit });
  return { entry: { ...existingData[indexToEdit] }, index: indexToEdit };
};
