import { User } from '../types/User';
import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { getUsers } from '../gateways/reqresUserGateway';

type UsersState = {
  userList: User[];
  currentUser: User;
};

const initialState: UsersState = {
  currentUser: undefined,
  userList: [],
};

export const getUsersThunk = createAsyncThunk('users/getUsers', async () => {
  const users = await getUsers();
  return users;
});

export const usersSlice = createSlice({
  extraReducers: builder => {
    builder.addCase(getUsersThunk.fulfilled, (state, action) => {
      state.userList = action.payload;
    });
  },
  initialState,
  name: 'users',
  reducers: {},
});

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
