export function handleStorage(key, item) {
  sessionStorage.setItem(key, JSON.stringify(item));
}
