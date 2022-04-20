import { ADD_TODO, GET_USERS_START, GET_USERS_SUCCESS, GET_USERS_FAILED } from '../actions/actions';

const initialState = [];

export default function todoApp(previousState = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...previousState, action.todo ];
    case GET_USERS_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_USERS_START:
      return {
        ...state,
        loading: false
      }
    case GET_USERS_START:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return previousState;
  }
}