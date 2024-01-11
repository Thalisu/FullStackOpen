const useLocalStorage = (item) => {
  const localStorage = window.localStorage.getItem(item);
  return localStorage && JSON.parse(localStorage);
};

export default useLocalStorage;
