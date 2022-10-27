import { configureStore } from '@reduxjs/toolkit';

import { persistedContactReducer } from './contacts-slice';

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
  },


