import { Link } from 'react-router-dom';
import { RootState } from '../presenter/presenter';
import { User } from '../types/User';
import { connect } from 'react-redux';
import React from 'react';

type UserListTemplateProps = {
  isLoading: boolean;
  users: User[];
};

export const UserListTemplate = (props: UserListTemplateProps) => (
  <>
    {!props.isLoading && (
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
            {props.users.map(user => (
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

const mapStateToProps = (state: RootState) => {
  return {
    isLoading: false,
    users: state.users.userList,
  };
};

export const UserList = connect(mapStateToProps)(UserListTemplate);
