import './TodoListItem.scss';

import { useStateContext } from '../../contexts/ContextProvider';

export default function TodoListItem({ todo, idx }) {
  const { toggleTodoStatus, removeTodo } = useStateContext();
  const { id, title, completed } = todo;
  console.log(idx, todo);

  return (
    <li className={`todo${completed ? ' completed' : ''}`}>
      <label className='label'>
        <input className='checkbox sr-only' />
        <span className='fake-checkbox-wrapper'>
          <span className='fake-checkbox' onClick={() => toggleTodoStatus(todo, idx)}>
            <img
              className='icon-check'
              src={require('../../assets/images/icon-check.svg').default}
              alt=''
              aria-hidden='true'
            />
          </span>
        </span>
        <span className='name'>{title}</span>
      </label>
      <div className='btn-close' type='button' aria-label='delete item' onClick={() => removeTodo(id, idx)}>
        <img src={require('../../assets/images/icon-cross.svg').default} alt='cross' />
      </div>
    </li>
  );
}