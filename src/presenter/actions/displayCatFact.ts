import { Context } from '../presenter';

export const displayCatFact = async (context: Context) => {
  context.state.currentPage = 'Loading';
  context.state.catFact = await context.effects.getCatFact();
  context.state.currentPage = 'CatFact';
};
