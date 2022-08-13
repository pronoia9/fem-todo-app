import { useState } from 'react';
import './TodoListItem.scss';

import { useStateContext } from '../../contexts/ContextProvider';

export default function TodoListItem({ todo, idx }) {
  const [animation, setAnimation] = useState(false);
  const { toggleTodoStatus, removeTodo } = useStateContext();
  const { id, title, completed } = todo;

  return (
    <li className={`todo${completed ? ' completed' : ''}${animation ? ' animation--fadeOut' : ''}`}>
      <label className='label'>
        <input className='checkbox sr-only' />
        <span className='fake-checkbox-wrapper'>
          <span className='fake-checkbox' onClick={() => toggleTodoStatus(todo)}>
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
      <div
        className='btn-close'
        type='button'
        aria-label='delete item'
        onClick={() => {
          setAnimation(true);
          setTimeout(() => removeTodo(todo), 1000);
        }}>
        <img src={require('../../assets/images/icon-cross.svg').default} alt='cross' />
      </div>
    </li>
  );
}