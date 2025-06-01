export function storeItem(key, item) {
  sessionStorage.setItem(key, JSON.stringify(item));
}

export function getItem(key) {
  const item = sessionStorage.getItem(key);
  return item ? JSON.parse(item) : [];
}
