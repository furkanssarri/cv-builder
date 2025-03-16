export const saveToStorage = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const getFromStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key)) || [];
};
