export const saveToStorage = (key, data) => {
  try {
    if (!Array.isArray(data)) {
      console.error("Data must be an array.");
      return;
    }
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving data to sessionStorage for ${key}:`, error);
  }
};

export const getFromStorage = (key) => {
  try {
    const storedData = sessionStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error(`Error parsing sessionStorage data for ${key}:`, error);
    return [];
  }
};
