import './TodoListItem.scss';

export default function TodoListItem() {
  return (
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
  );
}