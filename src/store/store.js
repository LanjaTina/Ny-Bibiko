// store.js

import { configureStore } from '@reduxjs/toolkit';
import animalReducer from './reducers/animalSlice';

export default configureStore({
  reducer: {
    animals: animalReducer,
  },
});
