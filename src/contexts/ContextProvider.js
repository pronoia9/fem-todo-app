import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const StateContext = createContext();

const defaultTodos = [
  { id: 5, title: 'Complete online JavaScript course', completed: true },
  { id: 4, title: 'Jog around the park 3x', completed: false },
  { id: 3, title: '10 minutes meditation', completed: false },
  { id: 2, title: 'Read for 1 hour', completed: false },
  { id: 1, title: 'Pick up groceries', completed: false },
  { id: 0, title: 'Complete Todo App on Frontend Mentor', completed: false },
];

const usePersistedState = (key, initialState) => {
  let previousState = localStorage.getItem(key);
  if (!previousState) {
    localStorage.setItem(key, JSON.stringify(initialState));
    return initialState;
  } else {
    previousState = JSON.parse(previousState);
    // if (key === 'darkMode' && previousState) document.getElementsByTagName('body')[0].classList.add('dark-theme');
    return previousState;
  }
};

export const ContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(usePersistedState('darkMode', false));
  const [todos, setTodos] = useState(usePersistedState('todos', defaultTodos));
  const [input, setInput] = useState(usePersistedState('input', ''));
  const [filter, setFilter] = useState(usePersistedState('filter', ''));
  const [dragging, setDragging] = useState(null);

  useEffect(() => { localStorage.setItem('darkMode', JSON.stringify(darkMode)); }, [darkMode]);
  useEffect(() => { localStorage.setItem('todos', JSON.stringify(todos)); }, [todos]);
  useEffect(() => { localStorage.setItem('input', JSON.stringify(input)); }, [input]);
  useEffect(() => { localStorage.setItem('filter', JSON.stringify(filter)); }, [filter]);

  const toggleTheme = () => {
    // document.getElementsByTagName('body')[0].classList.toggle('dark-theme');
    setDarkMode(!darkMode);
  };

  const toggleTodoStatus = (todo) => {
    const temp = [...todos];
    temp[todos.findIndex((t) => t.id === todo.id)].completed = !todo.completed;
    setTodos(temp);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const addTodo = () => {
    setTodos((todos) => [...todos, { id: Math.floor(Math.random() * 10000), title: input, completed: false }]);
    setInput('');
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  const startDragging = (title) => {
    setDragging(title);
  }

  const resetDragging = () => {
    setDragging(null);
  }

  const dragTask = useCallback((todo, destinationTodo) => {
    // const todo = 
  }, []);

  return (
    <StateContext.Provider
      value={{
        darkMode, setDarkMode,
        toggleTheme,
        todos, setTodos,
        toggleTodoStatus,
        removeTodo,
        addTodo,
        clearCompleted,
        input, setInput,
        filter, setFilter,
        dragging, setDragging,
        startDragging, 
        resetDragging
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);