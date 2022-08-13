import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const defaultTodos = [
  { id: 5, todo: 'Complete online JavaScript course', completed: true },
  { id: 4, todo: 'Jog around the park 3x', completed: false },
  { id: 3, todo: '10 minutes meditation', completed: false },
  { id: 2, todo: 'Read for 1 hour', completed: false },
  { id: 1, todo: 'Pick up groceries', completed: false },
  { id: 0, todo: 'Complete Todo App on Frontend Mentor', completed: false },
];

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [todos, setTodos] = useState(defaultTodos);
  const [input, setInput] = useState('');

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.getElementsByTagName('body')[0].classList.toggle('dark-theme');
  };

  return (
    <StateContext.Provider
      value={{ darkMode, toggleTheme, todos, setTodos, input, setInput }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);