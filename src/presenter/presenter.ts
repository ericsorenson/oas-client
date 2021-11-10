import { IContext, createOvermind } from 'overmind';
import { User } from '../types/User';
import { createActionsHook, createStateHook } from 'overmind-react';
import { getCatFact } from '../gateways/catFactGateway';
import { getUsers } from '../gateways/reqresUserGateway';
import { initializeRouter } from './router';

type State = {
  authenticatedUser: User;
  catFact: string;
  currentPage: string;
  menuBarLinks: Link[];
  profileMenuLinks: Link[];
  userList: User[];
};

type Link = {
  href: string;
  name: string;
  current?: boolean;
};

const state: State = {
  authenticatedUser: {
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
    first_name: 'Robert',
    id: 1337,
    last_name: 'Paulson',
  },
  catFact: '',
  currentPage: 'Dashboard',
  menuBarLinks: [
    { href: '/', name: 'Dashboard' },
    { href: '/users', name: 'Users' },
    { href: '/cat-fact', name: 'Cat Fact' },
  ],
  profileMenuLinks: [
    { href: '#', name: 'Your Profile' },
    { href: '#', name: 'Settings' },
    { href: '#', name: 'Sign out' },
  ],
  userList: [],
};

const displayDashboard = async (context: Context) => {
  context.state.currentPage = 'Dashboard';
};

const displayUserList = async (context: Context) => {
  context.state.currentPage = 'Loading';
  context.state.userList = await context.effects.getUsers();
  context.state.currentPage = 'UserList';
};

const displayCatFact = async (context: Context) => {
  context.state.currentPage = 'Loading';
  context.state.catFact = await context.effects.getCatFact();
  context.state.currentPage = 'CatFact';
};

const overmindConfig = {
  actions: {
    displayCatFact,
    displayDashboard,
    displayUserList,
  },
  effects: {
    getCatFact,
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

initializeRouter(overmindApp);

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
