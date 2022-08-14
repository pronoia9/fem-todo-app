import './TodoFooter.scss';

import { useStateContext } from '../../contexts/ContextProvider';

export default function TodoFooter({ filteredTodos }) {
  const { filter, setFilter, clearCompleted } = useStateContext();
  const todo = filteredTodos.reduce((total, curr) => (!curr.completed ? total + 1 : total), 0),
    done = filteredTodos.reduce((total, curr) => (curr.completed ? total + 1 : total), 0);

  return (
    <div className='todo-list__footer'>
      {filter !== 'completed' ? (
        <span className='items-left'>
          {todo} item{todo !== 1 && 's'} left
        </span>
      ) : (
        <span className='items-left'>
          {done} item{done !== 1 && 's'} done
        </span>
      )}
      <div className='todo-list__options-container'>
        <button className={`todo-list__filter-option${!filter && ' active-filter'}`} onClick={() => setFilter('')}>
          All
        </button>
        <button
          className={`todo-list__filter-option${filter === 'active' && ' active-filter'}`}
          onClick={() => setFilter('active')}>
          Active
        </button>
        <button
          className={`todo-list__filter-option${filter === 'completed' && ' active-filter'}`}
          onClick={() => setFilter('completed')}>
          Completed
        </button>
      </div>
      <button
        className='clear-completed'
        onClick={() => {
          // add delete animation to completed items before the todos are removed
          document.querySelectorAll('.todo.completed').forEach((ele) => {
            ele.classList.add('animation--fadeOut');
          });
          setTimeout(() => clearCompleted(), 500);
        }}>
        Clear Completed
      </button>
    </div>
  );
}
