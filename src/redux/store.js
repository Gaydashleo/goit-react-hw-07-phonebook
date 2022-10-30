import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'redux/contactsApi';
import { filterSlice } from 'redux/filter/filterSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});