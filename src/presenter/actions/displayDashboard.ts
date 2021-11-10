import { Context } from '../presenter';

export const displayDashboard = async (context: Context) => {
  context.state.currentPage = 'Dashboard';
};
