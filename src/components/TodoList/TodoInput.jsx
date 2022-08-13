import './TodoInput.scss';

import { useStateContext } from '../../contexts/ContextProvider';

export default function TodoInput() {
  const { input, setInput, addTodo } = useStateContext();

  return (
    <div className='todo-list__input-wrapper'>
      <input
        className='todo-list__input'
        type='text'
        placeholder='Create a new todo...'
        aria-label='add a new item to the todo list'
        value={input}
        onChange={(e) => { setInput(e.target.value); }}
        onKeyDown={(e) => { e.key === 'Enter' && addTodo(); }}
      />
    </div>
  );
}