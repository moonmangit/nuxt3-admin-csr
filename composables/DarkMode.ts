const active = useLocalStorage("darkMode", false);
const toggle = () => {
  active.value = !active.value;
  document.body.classList.toggle("dark", active.value);
};

export const useDarkMode = () => {
  return {
    active,
    toggle,
  };
};
