import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

export function getUsersStart() {
  return {
    type: GET_USERS_START,
  }
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data
  }
}

export function getUsersFailed(error) {
  return {
    type: GET_USERS_FAILED,
    error
  }
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms)
  })
}

export function getUsersThunk() {
  return async (dispatch, getState, { history }) => {
    try {
      dispatch(getUsersStart());
      await sleep(1000);

      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch(error) {
      dispatch(getUsersFailed(error));
    }
  }
}

export const GET_USERS = 'GET_USERS';
export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';

export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    }
  }
}