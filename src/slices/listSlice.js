import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
];

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addService(state, { payload }) {
      const { name, price } = payload;
      state.push({ id: nanoid(), name, price });
    },
    addServiceChanges(state, { payload }) {
      const { index, name, price } = payload;
      state[index] = {
        id: state[index].id,
        name,
        price,
      };
    },
    removeService(state, { payload }) {
      const { id } = payload;
      const index = state.findIndex((item) => item.id === id);
      state.splice(index, 1);
    },
  },
});

export const {
  addService,
  addServiceChanges,
  removeService
} = listSlice.actions;
export default listSlice.reducer;