import { useEffect } from 'react';

import Banner from './Banner/Banner';
import ThemeButton from './ThemeButton/ThemeButton';
import TodoList from './TodoList/TodoList';
import './App.scss';

import { useStateContext } from '../contexts/ContextProvider';

export default function App() {
  const { darkMode } = useStateContext();

  // add theme to body
  useEffect(() => {
    document.getElementsByTagName('body')[0].classList.add(`${darkMode ? 'dark' : 'light'}-theme`);
  }, [darkMode]);

  return (
    <>
      <Banner />
      <main className='main'>
        {/* <Header /> */}
        <div className='main__header'>
          <h1 class='heading svelte-7ijpyd'>Todo</h1>
          <ThemeButton />
        </div>
        <TodoList />
      </main>
    </>
  );
}