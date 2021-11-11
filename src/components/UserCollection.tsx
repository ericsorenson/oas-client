import { UserCollectionTemplate } from '../views/UserCollectionTemplate';
import { useAppState } from '../presenter/presenter';

const UserCollection = () => {
  const { userList } = useAppState();
  return UserCollectionTemplate(userList);
};

export { UserCollection };
