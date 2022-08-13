import './TodoFooter.scss';

export default function TodoFooter() {
  return (
    <div class='todo-list__footer'>
      <span class='items-left'>5 items left</span>
      <div class='todo-list__options-container'>
        <button class='todo-list__filter-option active-filter'>All</button>
        <button class='todo-list__filter-option'>Active</button>
        <button class='todo-list__filter-option'>Completed</button>
      </div>
      <button class='clear-completed'>Clear Completed</button>
    </div>
  );
}