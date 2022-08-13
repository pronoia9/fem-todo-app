import './TodoList.scss';
import TodoInput from './TodoInput';
import TodoListItem from './TodoListItem';
import TodoFooter from './TodoFooter';

import { useStateContext } from '../../contexts/ContextProvider';

export default function TodoList() {
  const { todos } = useStateContext();

  return (
    <>
      <form className='todo-list'>
        <TodoInput />
        <div className='todo-list__container'>
          <ul className='todo-list__list' id='todo-list'>
            {todos.map((todo) => <TodoListItem key={todo.id} />)}
          </ul>
          <TodoFooter />
        </div>
      </form>
    </>
  );
}