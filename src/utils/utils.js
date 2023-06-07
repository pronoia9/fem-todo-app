import { lightTheme, darkTheme } from '../styles/Themes';
import { defaultTodos } from './data';

// Get the system's preferred color scheme
export const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme);

export const toggleTheme = (setTheme) => {
  setTheme((prev) => (prev === darkTheme ? lightTheme : darkTheme));
};

export const handleColorSchemeChange = (e, setTheme) => {
  setTheme(e.matches ? darkTheme : lightTheme);
};

export const usePersistedState = (key) => {
  let previousState = localStorage.getItem('todo-or-not-todo');
  if (!previousState) localStorage.setItem('todo-or-not-todo', JSON.stringify({ todos: defaultTodos, input: '', filter: '' }));
  else {
    previousState = JSON.parse(previousState);
    return previousState[key];
  }
};
