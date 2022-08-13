import './TodoList.scss';
import TodoInput from './TodoInput';
import TodoListItem from './TodoListItem';
import TodoFooter from './TodoFooter';

export default function TodoList() {
  return (
    <>
      <form className='todo-list'>
        <TodoInput />

        <div className='todo-list__container'>
          <ul className='todo-list__list' id='todo-list'>
            {/* <Todo name={todo.name} bind:completed={todo.completed} id={todo.id} on:deleteTodo={deleteTodo}/> */}
            <TodoListItem />
          </ul>

          <TodoFooter />
        </div>
      </form>
    </>
  );
}