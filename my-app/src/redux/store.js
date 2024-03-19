import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/index';

const store = configureStore({
    
    reducer: {
      auth: authSlice,
    },
    devTools : true,
  })
export default store