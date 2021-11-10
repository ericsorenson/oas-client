import { useAppState } from '../presenter/presenter';
import React from 'react';

import { CatFact } from '../components/CatFact';
import { DashboardTemplate } from '../templates/DashboardTemplate';
import { LoadingTemplate } from '../templates/LoadingTemplate';
import { UserCollection } from '../components/UserCollection';

export const CurrentPage = () => {
  const { currentPage } = useAppState();
  return (
    <>
      {currentPage == 'UserList' && <UserCollection />}
      {currentPage == 'Dashboard' && <DashboardTemplate />}
      {currentPage == 'Loading' && <LoadingTemplate />}
      {currentPage == 'CatFact' && <CatFact />}
    </>
  );
};
