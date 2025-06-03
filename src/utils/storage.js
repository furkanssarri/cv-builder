export function storeItem(key, item) {
  sessionStorage.setItem(key, JSON.stringify(item));
}

export function getItem(key) {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  } catch (err) {
    console.warn(`Corrupt sessionStorage data for key "${key}"`, err);
    return [];
  }
}
