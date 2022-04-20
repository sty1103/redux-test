import { useSelector, connect } from 'react-redux';
import TodoList from '../components/TodoList';

function TodoListContainer() {
  const todos = useSelector((state) => state);
  return <TodoList todos={todos} />;
}

export default TodoListContainer;