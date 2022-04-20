import { useDispatch } from 'react-redux';
import TodoForm from '../components/TodoForm';
import addTodo from '../redux/actions/actions';

export default function TodoFormContainer() {
  const dispatch = useDispatch();

  function add(text) {
    dispatch(addTodo(text));
  }

  return <TodoForm add={add} />;
}