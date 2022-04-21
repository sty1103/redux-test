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