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
  const defaultState = initializeFormState(section);
  if (typeof setState !== "function") {
    console.error("setState must be a function.");
    return;
  }
  // Clear selectedEntryIndex
  setState({ ...defaultState, selectedEntryIndex: undefined });
};

/**
 * Retrieves an entry from session storage for editing.
 */
export const getEditableEntry = (section) => {
  const existingData = getFromStorage(section);

  if (existingData.length === 0) {
    console.warn(`No existing data found for ${section}`);
    return null;
  }

  let indexToEdit = 0;
  if (existingData.length > 1) {
    const userChoice = prompt(
      `Select entry index (0 - ${existingData.length - 1}):`,
    );
    if (userChoice === null || isNaN(userChoice)) return null;
    indexToEdit = Number(userChoice);
  }

  return { entry: { ...existingData[indexToEdit] }, index: indexToEdit };
};
