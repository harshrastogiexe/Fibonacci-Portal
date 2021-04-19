const getLocalStorage = <T>(key: string): T | null => {
  if (window.localStorage) {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
  console.error("Window Dont Have Acces To LocalStorage");
  return null;
};

const setLocalStorage = <T>(key: string, item: T) => {
  if (window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(item));
    return;
  }
  console.error("Window Dont Have Acces To LocalStorage");
};

export { getLocalStorage, setLocalStorage };
