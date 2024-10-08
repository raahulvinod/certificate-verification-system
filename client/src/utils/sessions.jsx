export const storeInSession = (key, value) => {
  const expiresIn = 3 * 24 * 60 * 60 * 1000;
  const data = {
    value,
    expiry: new Date().getTime() + expiresIn,
  };
  return localStorage.setItem(key, JSON.stringify(data));
};

export const lookInSession = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  if (new Date().getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

export const removeFromSession = (key) => {
  return localStorage.removeItem(key);
};
