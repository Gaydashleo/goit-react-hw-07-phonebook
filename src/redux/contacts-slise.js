// import {createSlice} from "@reduxjs/toolkit";

// import { fetchContacts, addContact, removeContact } from './contacts-operation';

// const initialState = {
//     contacts: {
//         items: [],
//         loading: false,
//         error: null,
// },
  
    
// };

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState,
//     extraReducers: {
//         [fetchContacts.pending]: (store) => {
//             store.loading = true;
//             store.error = null;
//         },
//         [fetchContacts.fulfilled]: (store, {payload}) => {
//             store.loading = false;
//             store.items = payload;
//         },
//         [fetchContacts.rejected]: (store, {payload}) => {
//             store.loading = false;
//             store.error = payload;
//         },
//         [addContact.pending]: (store) => {
//             store.loading = true;
//             store.error = null;
//         },
//         [addContact.fulfilled]: (store, {payload}) => {
//             store.loading = false;
//             store.items.push(payload);
//         },
//         [addContact.rejected]: (store, {payload}) => {
//             store.loading = false;
//             store.error = payload;
//         },
//         [removeContact.pending]: (store) => {
//             store.loading = true;
//             store.error = null;
//         },
//         [removeContact.fulfilled]: (store, {payload}) => {
//             store.loading = false;
//             store.items = store.items.filter(item => item.id !== payload)
//         },
//         [removeContact.rejected]: (store, {payload}) => {
//             store.loading = false;
//             store.error = payload;
//         },
//     }
// });

// export default contactsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
const initialState = {
    contacts: {
        items: [],
        loading: false,
        error: null,
    },
}
const contactsSlice = createSlice({
  name: 'contacts',
  initialState, 
  reducers: {
    addContact(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});
  
// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// export const persistedContactReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer,
// );

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;
export default contactsSlice.reducer