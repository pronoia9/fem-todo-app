import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

const initialState = {
  darkMode: false,
  todos: [],
  input: '',
};

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const toggleTheme = () => {
    // setState((state) => ({ ...state, theme: state.theme === 'dark' ? 'light' : 'dark' }));
    setDarkMode(!darkMode);
  };

  return (
    <StateContext.Provider
      value={{ state, setState, darkMode, setDarkMode, toggleTheme, todos, setTodos, input, setInput }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);