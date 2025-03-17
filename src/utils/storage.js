export const saveToStorage = (key, data) => {
  try {
    if (!Array.isArray(data)) {
      console.error("Data must be an array.");
      return;
    }
    const serializedData = JSON.stringify(data);
    sessionStorage.setItem(key, serializedData);
  } catch (error) {
    console.error(`Error saving data to sessionStorage for ${key}:`, error);
  }
};

export const getFromStorage = (key) => {
  try {
    const storedData = JSON.parse(sessionStorage.getItem(key));
    return storedData ? storedData : [];
  } catch (error) {
    console.error(`Error parsing sessionStorage data for ${key}:`, error);
    return [];
  }
};
