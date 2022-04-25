import { GET_USERS_START, GET_USERS_SUCCESS, GET_USERS_FAILED, GET_USERS_PENDING, GET_USERS_FULFILLED } from '../actions/users';

const initialState = {
  loading: false,
  data: [],
  error: null
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_START || GET_USERS_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case GET_USERS_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}