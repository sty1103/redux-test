export const ADD_TODO = "ADD_TODO";

export default function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}