import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditUser } from './EditUser';
import { ViewUsers } from './ViewUsers';
import React from 'react';

const UserApp = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route path="/users/:userId/edit">
          <EditUser />
        </Route>
        <Route path="/users">
          <ViewUsers />
        </Route>
        <Route path="*">
          <p>There is nothing here!</p>
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export { UserApp };
