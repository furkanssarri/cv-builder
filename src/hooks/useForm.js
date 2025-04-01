import { useState } from "react";
import {
  initializeFormState,
  resetFormState,
  getEditableEntry,
} from "../utils/formUtils";
import { getFromStorage, saveToStorage } from "../utils/storage";

const useForm = (section) => {
  const [formData, setFormData] = useState(() => {
    const initialState = initializeFormState(section);
    return initialState ? initialState : {};
  });

  // useEffect(() => {
  //   const storedData = getFromStorage(section);
  //   if (storedData.length > 0) {
  //     setFormData(storedData[0]); // Load the first entry by default
  //   }
  // }, [section]);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the existing data, ensuring it is returned in an array
    const existingData = getFromStorage(section);
    const isEditing =
      formData.selectedEntryIndex !== undefined &&
      formData.selectedEntryIndex !== null;

    if (isEditing) {
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

    // Reset form state and clear selectedEntryIndex
    resetFormState(section, setFormData);
    setFormData((prevData) => ({ ...prevData, selectedEntryIndex: undefined }));
  };

  const handleEdit = () => {
    const editableEntry = getEditableEntry(section);
    if (!editableEntry) return;
    setFormData({
      ...editableEntry.entry,
      selectedEntryIndex: editableEntry.index,
    });
  };

  return { formData, handleChange, handleSubmit, handleEdit };
};

export default useForm;
