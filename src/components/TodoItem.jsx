import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { useStateContext } from '../contexts/ContextProvider';
import icon_check from '/images/icon-check.svg';
import icon_cross from '/images/icon-cross.svg';

export default function TodoItem({ todo, todoRefs }) {
  const { toggleTodoStatus, removeTodo, dragging, startDragging, moveTask, resetDragging } = useStateContext();
  const [checkAnimation, setCheckAnimation] = useState(todo.completed),
    [deleteAnimation, setDeleteAnimation] = useState(false);

  // set timeout for a sec to get the check + strikethrough animation before the todo disappears/filtered out
  const handleCheck = () => {
    setCheckAnimation(!checkAnimation);
    setTimeout(() => {
      toggleTodoStatus(todo);
    }, 500);
  };

  const handleDelete = () => {
    setDeleteAnimation(true);
    setTimeout(() => removeTodo(todo), 500);
  };

  const handleDragStart = () => {
    startDragging(todo);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    let destination = e.target.getAttribute('id');
    if (destination && dragging && destination != dragging.id) moveTask(destination, dragging);
  };

  return (
    <ListItem
      ref={(ref) => (todoRefs.current[todo.id] = ref)}
      dragging={dragging}
      draggable={true}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={resetDragging}
      animationDelete={deleteAnimation ? true : false}
      className={deleteAnimation ? 'delete' : ''}
    >
      <Label>
        <Checkbox className='sr-only' />
        <FakeCheckboxWrapper className='fake-checkbox-wrapper' completed={checkAnimation}>
          <FakeCheckbox onClick={handleCheck} completed={checkAnimation}>
            <IconCheck src={icon_check} alt='check' aria-hidden='true' completed={checkAnimation} />
          </FakeCheckbox>
        </FakeCheckboxWrapper>
        <Title onDoubleClick={handleCheck} completed={checkAnimation}>
          {todo.title}
        </Title>
      </Label>
      <CloseButton type='button' aria-label='delete item' onClick={handleDelete}>
        <IconCross src={icon_cross} alt='delete' />
      </CloseButton>
    </ListItem>
  );
}

const fadeOutLeft = keyframes`
  0% {
    transform: translate(0);
    opacity: 1;
  }
  50% {
    transform: translate(-20rem);
    opacity: 0;
  }
  100% {
    height: 0;
    transform: translate(-20rem);
    opacity: 0;
  }
`;

const ListItem = styled.li`
  display: flex;
  width: 100%;
  height: 6.5rem;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  padding: 0 3rem;
  background: var(--color-surface);
  color: var(--color-text-active);
  transition: border 1s, background 1s, color 1s;
  ${({ animationDelete }) =>
    animationDelete &&
    css`
      animation: ${fadeOutLeft} 1s;
    `};

  &.delete {
    animation: ${fadeOutLeft} 1s;
  }

  &:hover {
    button {
      opacity: 1;
    }

    .fake-checkbox-wrapper::before {
      opacity: 1;
    }
  }

  @media only screen and (min-width: 600px) {
    height: 8rem;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-right: auto;
  cursor: pointer;
`;

const Checkbox = styled.input`
  &:focus + span {
    outline: 2px dotted var(--color-text-active);
  }
`;

const FakeCheckboxWrapper = styled.span`
  flex: 1 0 auto;
  position: relative;
  display: block;
  width: 3rem;
  height: 3rem;
  margin-right: 3rem;
  border-radius: 50%;
  padding: 1px;
  background: ${({ completed }) => (completed ? 'var(--gradient-primary)' : 'var(--color-border)')};
  transition: background 1s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity 0.5s;
  }
`;

const FakeCheckbox = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ completed }) => (completed ? 'var(--gradient-primary)' : 'var(--color-surface)')};
  transition: background 1s;
`;

const IconCheck = styled.img`
  opacity: ${({ completed }) => (completed ? 1 : 0)};
`;

const Title = styled.span`
  position: relative;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ completed }) => completed && 'var(--color-text-completed)'};
  /* transition: color 0s; */

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: ${({ completed }) => (completed ? '100%' : 0)};
    height: 1px;
    background: ${({ completed }) => (completed ? 'var(--color-text-completed)' : 'var(--color-text-active)')};
    transition: width 1s, background 1s;
  }

  @media only screen and (min-width: 600px) {
    font-size: 2.25rem;
  }
`;

const CloseButton = styled.button`
  opacity: 0;
  border: none;
  padding: 0.75rem;
  background: transparent;
  cursor: pointer;
  transition: opacity 0.3s;

  &:focus {
    opacity: 1;
  }
`;

const IconCross = styled.img``;
