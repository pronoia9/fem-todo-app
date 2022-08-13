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
  const [filter, setFilter] = useState('');

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // document.getElementsByTagName('body')[0].classList.toggle('dark-theme');
  };

  const toggleTodoStatus = (todo, idx) => {
    const temp = [...todos];
    temp[idx].completed = !todo.completed;
    setTodos(temp);
  };

  const removeTodo = (id, idx) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const addTodo = () => {
    setTodos((todos) => ([...todos, { id: Math.floor(Math.random() * 10000), title: input, completed: false }]));
    setInput('');
  }

  return (
    <StateContext.Provider
      value={{
        darkMode, setDarkMode,
        toggleTheme,
        todos, setTodos,
        toggleTodoStatus,
        removeTodo,
        addTodo,
        input, setInput,
        filter, setFilter,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);