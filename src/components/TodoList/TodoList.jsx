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
          <ul class='todo-list__list' id='todo-list'>
            {/* <Todo name={todo.name} bind:completed={todo.completed} id={todo.id} on:deleteTodo={deleteTodo}/> */}
            <li class='todo'>
              <label class='label'>
                <input class='checkbox sr-only' />
                <span class='fake-checkbox-wrapper'>
                  <span class='fake-checkbox'>
                    <img class='icon-check' src='/assets/img/icon-check.svg' alt='' aria-hidden='true' />
                  </span>
                </span>
                <span class='name'>Name</span>
              </label>
              <button class='btn-close' type='button' aria-label='delete item'>
                <img src={require('../../assets/images/icon-cross.svg').default} alt='cross' />
              </button>
            </li>
          </ul>

          <TodoFooter />
        </div>
      </form>
    </>
  );
}