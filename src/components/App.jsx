import { useEffect } from 'react';
import Banner from './Banner/Banner';
import ThemeButton from './ThemeButton/ThemeButton';
import TodoList from './TodoList/TodoList';
import './App.scss';

import { useStateContext } from '../contexts/ContextProvider';

export default function App() {
  const { darkMode } = useStateContext();
  useEffect(() => {
    const doc = document.getElementsByTagName('body')[0];
    darkMode ? doc.classList.add('dark-theme') : doc.classList.remove('dark-theme');
  }, [darkMode]);

  return (
    <>
      <Banner />
      <main className='main'>
        <div className='main__header'>
          <h1 className='heading'>TODO</h1>
          <ThemeButton />
        </div>
        <TodoList />
      </main>
    </>
  );
}