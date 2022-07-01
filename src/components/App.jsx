import { useEffect, useState } from 'react';
import './App.scss';
import Banner from './Banner/Banner';
import Input from './Input/Input';
import TodoList from './TodoList/TodoList';
const data = require('../assets/data.json');

export default function App() {
  // state for todos, All / Active / Completed
  const [state, setState] = useState();
  // state for input
  const [input, setInput] = useState();
  
  useEffect(() => {
    setState('All');
    setInput('');
  }, []);

  const changeInput = (val) => setInput(val);

  return (
    <div className=''>
      <Banner />
      <Input input={input} changeInput={changeInput} />
      <TodoList state={state} data={data} />
    </div>
  );
}