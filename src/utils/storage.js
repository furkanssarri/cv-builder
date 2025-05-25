export function storeItem(key, item) {
  sessionStorage.setItem(key, JSON.stringify(item));
}
