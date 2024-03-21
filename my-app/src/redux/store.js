import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import authSlice from './slices/authSlice';

const store = configureStore({

    reducer: {
      auth: authSlice,
      user: userSlice,
    },
    devTools : true,
  })
export default store;