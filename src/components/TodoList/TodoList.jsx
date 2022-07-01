import './TodoList.scss';
import TodoListMenu from './TodoListMenu';
import TodoListItem from './TodoListItem';
import Footer from '../Footer/Footer';

export default function TodoList() {
  return <>
    <TodoListMenu />
    <TodoListItem />
    <Footer />
  </>;
}