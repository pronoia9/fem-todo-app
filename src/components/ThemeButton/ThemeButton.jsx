import './ThemeButton.scss';

import { useStateContext } from '../../contexts/ContextProvider';

export default function ThemeButton() {
  const { darkMode, toggleTheme } = useStateContext();
  const sun = '../../assets/images/icon-sun.svg',
    moon = '../../assets/images/icon-sun.svg';

  return (
    <button aria-label='change the theme of the app' onClick={toggleTheme}>
      <img
        src={
          (darkMode ? require('../../assets/images/icon-sun.svg') : require('../../assets/images/icon-moon.svg'))
            .default
        }
        alt='theme-button'
      />
    </button>
  );
}
