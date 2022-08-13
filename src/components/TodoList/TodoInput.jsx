import './TodoInput.scss';

export default function TodoInput() {
  return (
    <div className='todo-list__input-wrapper'>
      <input
        class='todo-list__input svelte-1o2owkk'
        type='text'
        placeholder='Create a new todo...'
        aria-label='add a new item to the todo list'
      />
    </div>
  );
}