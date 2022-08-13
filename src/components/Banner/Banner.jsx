import './Banner.scss';

import { useStateContext } from '../../contexts/ContextProvider';

export default function Banner() {
  const { darkMode } = useStateContext();

  return (
    <div className='bg-img-container'>
      <img
        className='bg-img bg-img--active'
        src={require(`../../assets/images/bg-desktop-${darkMode ? 'dark' : 'light'}.jpg`)}
        alt='banner'
      />
    </div>
  );
}