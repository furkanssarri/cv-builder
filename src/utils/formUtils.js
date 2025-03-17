import { saveToStorage, getFromStorage } from "./storage";

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

  return defaultStates[section] || {};
};

/**
 * Resets form fields dynamically.
 */
export const resetFormState = (section, setState) => {
  const defaultState = initializeFormState(section);
  setState({ ...defaultState, selectedEntryIndex: undefined }); // Clear selectedEntryIndex
};

/**
 * Saves form data to session storage.
 */
export const saveFormData = (section, formData) => {
  if (!formData || typeof formData !== "object" || Array.isArray(formData)) {
    console.error("Invalid form data provided.", formData);
    return;
  }

  // Ensure existingData is always an array
  const existingData = getFromStorage(section);

  if (
    formData.selectedEntryIndex !== undefined &&
    formData.selectedEntryIndex !== null
  ) {
    // Update existing entry (immutable approach)
    const updatedData = existingData.map((entry, index) =>
      index === formData.selectedEntryIndex ? formData : entry,
    );
    saveToStorage(section, updatedData);
  } else {
    // Add new entry (immutable approach)
    const newData = [...existingData, formData];
    saveToStorage(section, newData);
  }
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
