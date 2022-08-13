import './TodoListItem.scss';

export default function TodoListItem({ todo, idx }) {
  const { id, title, status } = todo;
  
  return (
    <li className='todo'>
      <label className='label'>
        <input className='checkbox sr-only' />
        <span className='fake-checkbox-wrapper'>
          <span className='fake-checkbox'>
            <img className='icon-check' src='/assets/img/icon-check.svg' alt='' aria-hidden='true' />
          </span>
        </span>
        <span className='name'>{title}</span>
      </label>
      <div className='btn-close' type='button' aria-label='delete item' onClick={(idx) => {
        // TODO
      }}>
        <img src={require('../../assets/images/icon-cross.svg').default} alt='cross' />
      </div>
    </li>
  );
}