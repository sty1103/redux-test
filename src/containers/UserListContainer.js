import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserList from '../components/UserList';
import { getUsersStart, getUsersSuccess, getUsersFailed } from '../redux/actions/users';
import axios from 'axios';

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const getUsers = useCallback(async function getUsers() {
    try {
      dispatch(getUsersStart());
      const res = await axios.get("https://api.github.com/users");
      dispatch(getUsersSuccess(res.data));
    } catch(error) {
      dispatch(getUsersFailed(error));
    }
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
}