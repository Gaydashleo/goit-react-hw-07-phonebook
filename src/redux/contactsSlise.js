import { createSlice } from '@reduxjs/toolkit'

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
  

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;

export const getContacts = state => state.contacts.contacts;
export default contactsSlice.reducer