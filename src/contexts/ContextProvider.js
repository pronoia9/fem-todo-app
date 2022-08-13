import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

const initialState = {
  theme: 'light',
  todos: [],
  input: ''
};

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const toggleTheme = () => {
    setState((state) => ({ ...state, theme: state.theme === 'dark' ? 'light' : 'dark' }));
  };

  return <StateContext.Provider value={{ state, setState, toggleTheme }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);