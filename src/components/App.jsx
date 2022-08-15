import { useEffect } from 'react';
import Banner from './Banner/Banner';
import TodoList from './TodoList/TodoList';
import './App.scss';

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
    <div className='main'>
      <Banner />
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

// TODO: add dragging