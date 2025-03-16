export const resetFields = (section, setters, data) => {
  const resetMap = {
    "personal-info": () => setters.setNameValue(data.nameValue || ""),
    "edu-info": () => setters.setSchoolName(""),
    "work-xp": () => setters.setCompanyName(""),
  };

  if (resetMap[section]) resetMap[section]();
};
