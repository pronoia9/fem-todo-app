import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const defaultTodos = [
  { id: 5, title: 'Complete online JavaScript course', completed: true },
  { id: 4, title: 'Jog around the park 3x', completed: false },
  { id: 3, title: '10 minutes meditation', completed: false },
  { id: 2, title: 'Read for 1 hour', completed: false },
  { id: 1, title: 'Pick up groceries', completed: false },
  { id: 0, title: 'Complete Todo App on Frontend Mentor', completed: false },
];

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [todos, setTodos] = useState(defaultTodos);
  const [input, setInput] = useState('');

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // document.getElementsByTagName('body')[0].classList.toggle('dark-theme');
  };

  return (
    <StateContext.Provider
      value={{ darkMode, toggleTheme, todos, setTodos, input, setInput }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);