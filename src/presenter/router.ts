import { Context } from './presenter';
import page from 'page';

export const initializeRouter = (context: Context) => {
  page.base('');

  page('/', () => {
    context.actions.displayDashboard();
  });

  page('/users', () => {
    context.actions.displayUserList();
  });

  page('/cat-fact', () => {
    context.actions.displayCatFact();
  });

  page.start();
};
