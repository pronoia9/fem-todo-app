import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { TodoInput, TodoItem, TodoFilters } from '.';
import { useStateContext } from '../contexts/ContextProvider';

export default function Todos() {
  const { todos, filter } = useStateContext();
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const todoRefs = useRef({});

  useEffect(() => {
    if (filter) setFilteredTodos(todos.filter((t) => t.completed === (filter === 'active' ? false : true)));
    else setFilteredTodos(todos);
  }, [todos, setFilteredTodos, filter]);

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <TodoInput />
      <Container>
        <List>
          {filteredTodos.map((todo, index) => (
            <TodoItem key={todo.id} todo={todo} todoRefs={todoRefs} />
          ))}
        </List>
        <TodoFilters filteredTodos={filteredTodos} todoRefs={todoRefs} />
      </Container>
    </Form>
  );
}

const Form = styled.form`
  margin-bottom: 12rem;

  @media only screen and (min-width: 600px) {
    margin-bottom: 6rem;
  }
`;

const Container = styled.div`
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  transition: box-shadow 1s;
`;

const List = styled.ul`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
`;
