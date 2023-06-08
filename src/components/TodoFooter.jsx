import styled from 'styled-components';

import { useStateContext } from '../contexts/ContextProvider';

export default function TodoFooter({ filteredTodos = [], todoRefs }) {
  const { filter, setFilter, clearCompleted } = useStateContext();
  const todo = filteredTodos.reduce((total, curr) => (!curr.completed ? total + 1 : total), 0),
    done = filteredTodos.reduce((total, curr) => (curr.completed ? total + 1 : total), 0);

  const handleClear = () => {
    filteredTodos.forEach((t) => { if (t.completed) todoRefs.current[t.id].classList.add('delete'); });
    setTimeout(() => clearCompleted(), 500);
  };

  return (
    <Container>
      {filter !== 'completed' ? (
        <span>
          {todo} item{todo !== 1 && 's'} left
        </span>
      ) : (
        <span>
          {done} item{done !== 1 && 's'} done
        </span>
      )}

      <Wrapper>
        <Button active={!filter} onClick={() => setFilter('')} disabled={!filter}>
          All
        </Button>
        <Button active={filter === 'active'} onClick={() => setFilter('active')} disabled={filter === 'active'}>
          Active
        </Button>
        <Button active={filter === 'completed'} onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
          Completed
        </Button>
      </Wrapper>
      <Button onClick={handleClear}>Clear Completed</Button>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6.25rem;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0 3rem;
  background: var(--color-surface);
  color: var(--color-text-1);
  font-size: 1.5rem;
  letter-spacing: -0.2px;
  line-height: 1.75rem;
  transition: background 1s, color 1s;

  @media only screen and (min-width: 600px) {
    font-size: 1.75rem;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 8rem;
  left: 0;
  display: flex;
  width: 100%;
  height: 6rem;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: var(--color-surface);
  transition: background 1s, color 1s;

  button {
    font-size: 1.75rem;
    font-weight: bold;

    &.active-filter {
      color: var(--color-bright-blue);
    }

    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  @media only screen and (min-width: 600px) {
    position: initial;
    display: initial;
    width: initial;
    height: initial;
    border-radius: initial;
    background: initial;
  }
`;

const Button = styled.button`
  border: none;
  background: transparent;
  color: ${({ active }) => (active ? 'var(--color-bright-blue)' : 'var(--color-text-1)')};
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: ${({ active }) => !active && 'var(--color-text-active)'};
    cursor: ${({ active }) => !active && 'pointer'};
  }

  @media only screen and (min-width: 600px) {
    font-size: 1.75rem;
  }
`;
