import { Link } from 'react-router-dom';
import { getUsers } from '../gateways/reqresUserGateway';
import React, { useEffect, useState } from 'react';

const ViewUsers = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const asyncWrapper = async () => {
      const users = await getUsers();
      setUsers(users);
      setLoading(false);
    };
    asyncWrapper();
  }, []);

  const template = () => (
    <>
      {!isLoading && (
        <>
          <h1>Users</h1>
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
                    <img src={user.avatar} alt="Profile Picture" />
                  </td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>
                    <Link
                      id={`user-edit-link-${user.id}`}
                      to={`/users/${user.id}/edit`}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );

  return template();
};

export { ViewUsers };
