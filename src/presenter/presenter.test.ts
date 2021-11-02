import { describe, expect, it } from '@jest/globals';
import { getUsersThunk, store } from './presenter';

describe('Presenter', () => {
  it('getUsers', async () => {
    expect(store.getState().users.userList.length).toBe(0);
    await store.dispatch(getUsersThunk());
    expect(store.getState().users.userList.length).toBe(6);
  });
});
