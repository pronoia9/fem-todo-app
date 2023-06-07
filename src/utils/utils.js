import { lightTheme, darkTheme } from '../styles/Themes';

// Get the system's preferred color scheme
export const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme);

export const toggleTheme = (setTheme) => {
  setTheme((prev) => (prev === darkTheme ? lightTheme : darkTheme));
};

export const handleColorSchemeChange = (e, setTheme) => {
  setTheme(e.matches ? darkTheme : lightTheme);
};
