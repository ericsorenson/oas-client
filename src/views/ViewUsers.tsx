import { Link } from 'react-router-dom';
import { User } from '../types/User';
import { getUsers } from '../gateways/reqresUserGateway';
import React, { useEffect, useState } from 'react';

const template = (users: User[]) => (
  <table className="table-auto">
    <thead>
      <tr>
        <td>ID</td>
        <td>Photo</td>
        <td>First</td>
        <td>Last</td>
        <td>Actions</td>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>
            <img src={user.avatar} />
          </td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>
            <Link to={`/users/${user.id}/edit`}>Edit</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const ViewUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const asyncWrapper = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    asyncWrapper();
  }, []);

  return template(users);
};

export { ViewUsers };
