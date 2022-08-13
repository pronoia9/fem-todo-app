import { useEffect, useState } from 'react';

import Banner from './Banner/Banner';
import ThemeButton from './ThemeButton/ThemeButton';
import TodoList from './TodoList/TodoList';
import './App.scss';

import { useStateContext } from '../contexts/ContextProvider';

export default function App() {
  const { state, setState, toggleTheme } = useStateContext();

  // add theme to body
  useEffect(() => {
    document.getElementsByTagName('body')[0].classList.add(`${state.theme}-theme`);
  }, [state.theme]);

  return (
    <>
      <Banner />
      <ThemeButton />
      <main className='main'>
        {/* <Header /> */}
        <div className='main__header'>
          <h1 class='heading svelte-7ijpyd'>Todo</h1>
          <button aria-label='change the theme of the app' class='svelte-21kiri'>
            <img src={require('../assets/images/icon-sun.svg').default} alt='theme-button' />
          </button>
        </div>
        <TodoList />
      </main>
    </>
  );
}