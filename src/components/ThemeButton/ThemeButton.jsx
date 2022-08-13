import './ThemeButton.scss';

import { useStateContext } from '../../contexts/ContextProvider';

const sun = require('../../assets/images/icon-sun.svg'),
  moon = require('../../assets/images/icon-moon.svg');

export default function ThemeButton() {
  const { darkMode, toggleTheme } = useStateContext();

  return (
    <button aria-label='change the theme of the app' onClick={toggleTheme}>
      <img src={(darkMode ? sun : moon).default} alt='theme-button' />
    </button>
  );
}