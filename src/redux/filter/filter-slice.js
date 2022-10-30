import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { filter: '', },

  reducers: {
    changeFilter(state, action ) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = contactSlice.actions;
