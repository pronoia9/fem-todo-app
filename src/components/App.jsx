import { useEffect, useState } from 'react';
import './App.scss';
import Banner from './Banner/Banner';
import Theme from './Theme/Theme';
import TodoList from './TodoList/TodoList';
const data = require('../assets/data.json');

export default function App() {
  // state for todos, All / Active / Completed
  const [state, setState] = useState();
  // state for input
  const [input, setInput] = useState();

  //! add dark theme for development purposes only (tldr: i hate white bgs)
  useEffect(() => {
    document.getElementsByTagName('body')[0].classList.add('dark-theme');
  }, []);

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
        <TodoList state={state} data={data} />
      </main>
    </>
  );
}