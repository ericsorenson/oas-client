import { IContext, createOvermind } from 'overmind';
import { createActionsHook, createStateHook } from 'overmind-react';
import { displayCatFact } from './actions/displayCatFact';
import { displayDashboard } from './actions/displayDashboard';
import { displayUserList } from './actions/displayUserList';
import { getCatFact } from '../gateways/catFactGateway';
import { getUsers } from '../gateways/reqresUserGateway';
import { initializeRouter } from './router';
import { state } from './state';

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
