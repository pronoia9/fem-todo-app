import './TodoFooter.scss';

export default function TodoFooter() {
  return (
    <div className='todo-list__footer'>
      <span className='items-left'>5 items left</span>
      <div className='todo-list__options-container'>
        <button className='todo-list__filter-option active-filter'>All</button>
        <button className='todo-list__filter-option'>Active</button>
        <button className='todo-list__filter-option'>Completed</button>
      </div>
      <button className='clear-completed'>Clear Completed</button>
    </div>
  );
}