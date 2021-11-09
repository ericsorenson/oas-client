import { IContext, createOvermind } from 'overmind';
import { User } from '../types/User';
import { createActionsHook, createStateHook } from 'overmind-react';
import { getUsers } from '../gateways/reqresUserGateway';
import page from 'page';

type State = {
  userList: User[];
  currentPage: string;
};

const state: State = {
  currentPage: 'Home',
  userList: [],
};

const displayHome = async (context: Context) => {
  context.state.currentPage = 'Home';
};

const displayUserList = async (context: Context) => {
  context.state.userList = await context.effects.getUsers();
  context.state.currentPage = 'UserList';
};

const overmindConfig = {
  actions: {
    displayHome,
    displayUserList,
  },
  effects: {
    getUsers,
  },
  state,
};

export type Context = IContext<{
  state: typeof overmindConfig.state;
  actions: typeof overmindConfig.actions;
  effects: typeof overmindConfig.effects;
}>;

export const overmindApp = createOvermind(overmindConfig);

page.base('');
page('/', () => {
  console.log('anything');
  overmindApp.actions.displayHome();
});
page('/users', () => {
  console.log('in users');
  overmindApp.actions.displayUserList();
});
page.start();

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
