import { Provider } from 'overmind-react';
import { UserCollectionHOC } from './UserCollectionHOC';
import { overmindApp } from '../overmindPresenter/presenter';
import { useAppState } from '../overmindPresenter/presenter';
import React from 'react';
import ReactDOM from 'react-dom';

import '../styles.css';

const Home = () => {
  return (
    <p>
      Home <a href="/users">User List</a>
    </p>
  );
};

const NotFound = () => {
  return <p>Not Found</p>;
};

const pageMap = new Map([
  ['Home', Home],
  ['UserList', UserCollectionHOC],
  ['NotFound', NotFound],
]);

const DynamicPage = () => {
  const { currentPage } = useAppState();
  return (
    <>
      {currentPage == 'Home' && <Home />}
      {currentPage == 'UserList' && <UserCollectionHOC />}
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmindApp}>
      <DynamicPage />
    </Provider>
  </React.StrictMode>,
  window.document.querySelector('#app'),
);
