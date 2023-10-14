import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';

import usersReduccer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReduccer,
  },
});
