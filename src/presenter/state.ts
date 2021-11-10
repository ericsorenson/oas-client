import { User } from '../types/User';

export type State = {
  authenticatedUser: User;
  catFact: string;
  currentPage: string;
  menuBarLinks: Link[];
  profileMenuLinks: Link[];
  userList: User[];
};

export type Link = {
  href: string;
  name: string;
  current?: boolean;
};

export const state: State = {
  authenticatedUser: {
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
    first_name: 'Robert',
    id: 1337,
    last_name: 'Paulson',
  },
  catFact: '',
  currentPage: 'Dashboard',
  menuBarLinks: [
    { href: 'http://localhost:2345/', name: 'Dashboard' },
    { href: 'http://localhost:2345/users', name: 'Users' },
    { href: 'http://localhost:3456/cat-fact', name: 'Cat Fact' },
  ],
  profileMenuLinks: [
    { href: '#', name: 'Your Profile' },
    { href: '#', name: 'Settings' },
    { href: '#', name: 'Sign out' },
  ],
  userList: [],
};
