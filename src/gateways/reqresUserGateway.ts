import { User } from '../types/User';
import axios from 'axios';

const url = 'https://reqres.in/api';

const getUsers = async (): Promise<User[]> => {
  const results = await axios.get(`${url}/users`);
  return results.data.data;
};

const getUser = async (userId: number): Promise<User> => {
  const results = await axios.get(`${url}/users/${userId}`);
  return results.data.data;
};

const updateUser = async (user: User): Promise<User> => {
  const results = await axios.put(`${url}/users/${user.id}`, user);
  return results.data;
};

export { getUsers, getUser, updateUser };
