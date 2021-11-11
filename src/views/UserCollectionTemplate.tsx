import { User } from '../types/User';
import React from 'react';

export const UserCollectionTemplate = (users: User[]) => (
  <>
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-primary-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-primary-200">
              <thead className="bg-primary-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider"
                  >
                    Photo
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider"
                  >
                    First
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider"
                  >
                    Last
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-primary-200">
                {users.map(user => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.avatar}
                        alt="Profile Picture"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.first_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {user.last_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a
                        id={`user-edit-link-${user.id}`}
                        href={`/users/${user.id}/edit`}
                        className="text-secondary-600 hover:text-secondary-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
);
