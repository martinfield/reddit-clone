import { configureStore } from '@reduxjs/toolkit';
import homepageSliceReducer from '../features/HomePage/homepageSlice'; 


export const store = configureStore({
  reducer: {
    homePage: homepageSliceReducer
  },
});
