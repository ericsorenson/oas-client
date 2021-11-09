import { UserCollectionTemplate } from './UserCollectionTemplate';
import { useAppState } from '../overmindPresenter/presenter';

const UserCollectionHOC = () => {
  const { userList } = useAppState();
  return UserCollectionTemplate(userList);
};

export { UserCollectionHOC };
