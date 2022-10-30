import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'contacts',
  initialState: { filter: '', },

  reducers: {
    changeFilter(state, action ) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions
