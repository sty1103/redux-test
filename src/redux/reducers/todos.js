import { ADD_TODO } from '../actions/actions';

const initialState = [];

export default function todoApp(previousState = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...previousState, action.todo ];
    default:
      return previousState;
  }
}