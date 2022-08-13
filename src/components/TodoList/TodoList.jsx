import './TodoList.scss';
import TodoInput from './TodoInput';
import TodoListItem from './TodoListItem';
import TodoFooter from './TodoFooter';

export default function TodoList() {
  return (
    <>
      {/* <TodoListMenu />
    <TodoListItem />
    <Footer /> */}
      <form className='todo-list'>
        {/* INPUT */}
        <div className='todo-list__input-wrapper'>
          <input
            class='todo-list__input svelte-1o2owkk'
            type='text'
            placeholder='Create a new todo...'
            aria-label='add a new item to the todo list'
          />
        </div>

        <div className='todo-list__container'>
          {/* LIST */}
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

          {/* <Footer /> */}
          <div class='todo-list__footer'>
            <span class='items-left'>5 items left</span>
            <div class='todo-list__options-container'>
              <button class='todo-list__filter-option active-filter'>All</button>
              <button class='todo-list__filter-option'>Active</button>
              <button class='todo-list__filter-option'>Completed</button>
            </div>
            <button class='clear-completed'>Clear Completed</button>
          </div>
        </div>
      </form>
    </>
  );
}