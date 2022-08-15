import { useEffect } from 'react';
import Banner from './Banner/Banner';
import TodoList from './TodoList/TodoList';

import { useStateContext } from '../contexts/ContextProvider';
import Footer from './Footer/Footer';
import { Header } from './Header/Header';

export default function App() {
  const { darkMode } = useStateContext();
  useEffect(() => {
    const doc = document.getElementsByTagName('body')[0];
    darkMode ? doc.classList.add('dark-theme') : doc.classList.remove('dark-theme');
  }, [darkMode]);

  return (
    <>
      <Banner />
      <Header />
      <TodoList />
      <Footer />
    </>
  );
}

// TODO: add dragging