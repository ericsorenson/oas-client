import { Context } from '../presenter';

export const displayUserList = async (context: Context) => {
  context.state.currentPage = 'Loading';
  context.state.userList = await context.effects.getUsers();
  context.state.currentPage = 'UserList';
};
