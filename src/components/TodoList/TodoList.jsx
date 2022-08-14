import { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoListItem from './TodoListItem';
import TodoFooter from './TodoFooter';
import './TodoList.scss';

import { useStateContext } from '../../contexts/ContextProvider';

export default function TodoList() {
  const { todos, filter } = useStateContext();
  const [ filteredTodos, setFilteredTodos ] = useState(todos);
  
  useEffect(() => {
    if (filter) setFilteredTodos(todos.filter((t) => t.completed === (filter === 'active' ? false : true)));
    else setFilteredTodos(todos);
  }, [todos, setFilteredTodos, filter])

  return (
    <>
      <form className='todo-list' onSubmit={(e) => e.preventDefault()}>
        <TodoInput />
        <div className='todo-list__container'>
          <ul className='todo-list__list' id='todo-list'>
            {filteredTodos.map((todo, idx) => <TodoListItem key={todo.id} todo={todo} idx={idx} />)}
          </ul>
          <TodoFooter filteredTodos={filteredTodos} />
        </div>
      </form>
    </>
  );
}