import { User } from '../types/User';
import React from 'react';

export const UserCollectionTemplate = (users: User[]) => (
  <>
    <h1 className="bg-red-900 text-white">Users</h1>
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
              <a
                id={`user-edit-link-${user.id}`}
                href={`/users/${user.id}/edit`}
              >
                Edit
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
