import { useEffect, useState } from 'react';
import './App.scss';
import Banner from './Banner/Banner';
import Theme from './Theme/Theme';
import Input from './Input/Input';
import TodoList from './TodoList/TodoList';
import Footer from './Footer/Footer';
const data = require('../assets/data.json');

export default function App() {
  // state for todos, All / Active / Completed
  const [state, setState] = useState();
  // state for input
  const [input, setInput] = useState();

  //! add dark theme for development purposes only (tldr: i hate white bgs)
  useEffect(() => {
    document.getElementsByTagName('body')[0].classList.add('dark-theme');
  }, [])
  
  useEffect(() => {
    setState('All');
    setInput('');
  }, []);

  const changeInput = (val) => setInput(val);

  return (
    <>
      <Banner />
      <Theme />
      <main className='main'>
        {/* <Header /> */}
        <div className='main__header'>
          <h1 class='heading svelte-7ijpyd'>Todo</h1>
          <button aria-label='change the theme of the app' class='svelte-21kiri'>
            <img src={require('../assets/images/icon-sun.svg').default} alt='theme-button' />
          </button>
        </div>

        {/* <Input input={input} changeInput={changeInput} /> */}
        {/* <TodoList state={state} data={data} /> */}

        <form className='todo-list'>
          {/* INPUT */}
          <div className='todo-list__input-wrapper'>
            <input
              class='todo-list__input svelte-1o2owkk'
              type='text'
              placeholder='Create a new todo...'
              aria-label='add a new item to the todo list'
            />
          </div>

          {/* LIST */}
          <div className='todo-list__container'>
            <ul></ul>
          </div>
        </form>
      </main>

      {/* <Footer /> */}
      <div class='todo-list__footer'>
        <span class='items-left'>5 items left</span>
        <div class='todo-list__options-container'>
          <button class='todo-list__filter-option active-filter'>All</button>
          <button class='todo-list__filter-option'>Active</button>
          <button class='todo-list__filter-option'>Completed</button>
        </div>
        <button class='clear-completed'>Clear Completed</button>
      </div>
    </>
  );
}