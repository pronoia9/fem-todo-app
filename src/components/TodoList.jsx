import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { TodoFooter, TodoInput, TodoListItem } from './';
import { useStateContext } from '../contexts/ContextProvider';

export default function TodoList() {
  const { todos, filter } = useStateContext();
  const [filteredTodos, setFilteredTodos] = useState(todos);

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
            <TodoListItem key={todo.id} todo={todo} index={index} />
          ))}
        </List>
        <TodoFooter filteredTodos={filteredTodos} />
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
