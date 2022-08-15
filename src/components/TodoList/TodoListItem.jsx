import { useState } from 'react';
import './TodoListItem.scss';

import { useStateContext } from '../../contexts/ContextProvider';

export default function TodoListItem({ todo, idx }) {
  const [checkAnimation, setCheckAnimation] = useState(todo.completed);
  const [deleteAnimation, setDeleteAnimation] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { id, title, completed } = todo;
  const { toggleTodoStatus, removeTodo, dragging, startDragging, resetDragging } = useStateContext();

  const handleDragStart = () => {}
  
  const handleDragEnter = () => { }
  
  const handleDragEnd = () => { }

  return (
    <div dragging={dragging === title}>
      <li className={`todo${checkAnimation ? ' completed' : ''}${deleteAnimation ? ' animation--fadeOut' : ''}`}>
        <label className='label'>
          <input className='checkbox sr-only' />
          <span className='fake-checkbox-wrapper'>
            <span
              className='fake-checkbox'
              onClick={() => {
                setCheckAnimation(!checkAnimation);
                // IF theres a filter, set timeout for a sec to get the check + strikethrough animation before the todo disappears/filtered out
                setTimeout(() => toggleTodoStatus(todo), 500);
              }}>
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
            setDeleteAnimation(true);
            setTimeout(() => removeTodo(todo), 500);
          }}>
          <img src={require('../../assets/images/icon-cross.svg').default} alt='cross' />
        </div>
      </li>
    </div>
  );
}