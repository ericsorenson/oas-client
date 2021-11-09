import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditUser } from './EditUser';
import { UserList } from '../components/UserList';
import { ViewUsers } from './ViewUsers';
import React from 'react';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/users/:userId/edit">
        <EditUser />
      </Route>
      <Route path="/users">
        <ViewUsers />
        <UserList />
      </Route>
      <Route path="*">
        <p>There is nothing here!</p>
      </Route>
    </Switch>
  </BrowserRouter>
);

export { Router };
