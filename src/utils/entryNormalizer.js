const normalizeEntry = (entry) => {
  if (Array.isArray(entry)) return entry;
  if (entry && typeof entry === "object" && Object.keys(entry).length > 0) {
    return [entry];
  }
  return [];
};

export default normalizeEntry;
