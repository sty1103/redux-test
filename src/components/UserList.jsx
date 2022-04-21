import { useEffect } from 'react';

export default function UserList({ users, getUsers }) {
  useEffect(() => {
    getUsers();
  }, [getUsers])
  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.login}</li>
      })}
    </ul>
  )
}