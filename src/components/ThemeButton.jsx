import styled from 'styled-components';

import { darkTheme } from '../styles/Themes';
import { toggleTheme } from '../utils/utils';

export default function ThemeButton({ theme, setTheme }) {
  return (
    <Button className='theme-button' aria-label='change the theme of the app' onClick={() => toggleTheme(setTheme)}>
      <img src={`${theme === darkTheme ? '/images/icon-moon.svg' : '/images/icon-sun.svg'}`} />
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
`;
