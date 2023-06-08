import styled from 'styled-components';
import { ThemeButton } from './';

export default function Header({ theme, setTheme }) {
  return (
    <Container className='main__header'>
      <Heading className='heading'>TODO</Heading>
      <ThemeButton theme={theme} setTheme={setTheme} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5rem;

  @media only screen and (min-width: 800px) {
    margin-bottom: 6rem;
  }
`;

const Heading = styled.h1`
  margin-right: auto;
  color: white;
  font-size: 3.5rem;
  letter-spacing: 1.875rem;
  line-height: 3.5rem;
  text-transform: uppercase;

  @media only screen and (min-width: 800px) {
    font-size: 5rem;
    line-height: 5rem;
  }
`;
