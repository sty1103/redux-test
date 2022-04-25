import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserList from '../components/UserList';
import { getUsersThunk, getUsersSagaStart } from '../redux/actions/users';

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const getUsers = useCallback(() => {
    dispatch(getUsersSagaStart());
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
}