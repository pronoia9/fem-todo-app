import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

import { usePersistedState } from '../utils/utils';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(usePersistedState('todos'));
  const [input, setInput] = useState(usePersistedState('input'));
  const [filter, setFilter] = useState(usePersistedState('filter'));
  const [dragging, setDragging] = useState(null);

  useEffect(() => { localStorage.setItem('todo-or-not-todo', JSON.stringify({ todos, input, filter })); }, [todos, input, filter]);

  const toggleTodoStatus = (todo) => {
    const temp = [...todos];
    temp[todos.findIndex((t) => t.id === todo.id)].completed = !todo.completed;
    setTodos(temp);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const addTodo = () => {
    if (input) {
      let rng;
      do { rng = Math.floor(Math.random() * 10000); } while (todos[rng]);
      setTodos((todos) => [...todos, { id: rng, title: input, completed: false }]); // add to the bottom
      // setTodos((todos) => [{ id: rng, title: input, completed: false }, ...todos]); // add to the top
      setInput('');
    }
  };

  const clearCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  const startDragging = (todo) => {
    setDragging(todo);
  };

  const resetDragging = () => {
    setDragging(null);
  };

  const moveTask = useCallback(
    (destination, origin) => {
      const originIdx = todos.findIndex((t) => t.id == origin.id),
        destinationIdx = todos.findIndex((t) => t.id == destination);
      const temp = [...todos],
        [originTodo] = temp.splice(originIdx, 1);
      temp.splice(destinationIdx, 0, originTodo);
      setTodos(temp);
    },
    [todos]
  );

  return (
    <StateContext.Provider
      value={{
        todos, setTodos,
        toggleTodoStatus, removeTodo, addTodo, clearCompleted,
        input, setInput,
        filter, setFilter,
        dragging, setDragging, startDragging, moveTask, resetDragging,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
