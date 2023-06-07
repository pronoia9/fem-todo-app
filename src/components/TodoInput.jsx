import styled from 'styled-components';

import { useStateContext } from '../contexts/ContextProvider';

export default function TodoInput() {
  const { input, setInput, addTodo } = useStateContext();

  return (
    <Container>
      <Input
        type='text'
        placeholder='Create a new todo...'
        aria-label='add a new item to the todo list'
        value={input}
        onChange={(e) => { setInput(e.target.value); }}
        onKeyDown={(e) => { e.key === 'Enter' && addTodo(); }}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 1.75rem;
    left: 3rem;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid var(--color-border);
    border-radius: 50%;
    background-color: transparent;
    transition: border 1s;
  }

  @media only screen and (min-width: 600px) {
    margin-bottom: 3rem;

    &::before {
      top: 2.5rem;
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  height: 6rem;
  border: none;
  border-radius: 5px;
  padding-left: 9rem;
  background: var(--color-surface);
  color: var(--color-text-active);
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.25px;
  transition: background 1s, color 1s;

  &::placeholder {
    color: var(--color-text-1);
    font-family: 'Josefin Sans', sans-serif;
    opacity: 1;
  }

  @media only screen and (min-width: 600px) {
    height: 8rem;
    font-size: 2.25rem;
  }
`;
