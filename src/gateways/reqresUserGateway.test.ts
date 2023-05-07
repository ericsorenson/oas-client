import { describe, expect, it } from '@jest/globals';
import { faker } from '@faker-js/faker';
import { getUser, getUsers, updateUser } from './reqresUserGateway';

describe('User persistence', () => {
  it('getUsers', async () => {
    const results = await getUsers();
    expect(results.length).toBe(6);
    expect(results[0].first_name).toBeDefined();
  });

  it('getUser', async () => {
    const results = await getUser(1);
    expect(results.first_name).toBeDefined();
  });

  it('updateUser', async () => {
    const user = await getUser(1);
    const newFirstName = faker.name.firstName();
    user.first_name = newFirstName;
    const updatedUser = await updateUser(user);
    expect(updatedUser.first_name).toBe(newFirstName);
  });
});
