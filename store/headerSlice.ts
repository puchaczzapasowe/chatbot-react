import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type HeaderSliceState = {
  menuIsOpen: boolean;
};

const initialState: HeaderSliceState = {
  menuIsOpen: false,
};
export const counterSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setMenuIsOpen: (state, action: PayloadAction<boolean>) => {
      state.menuIsOpen = action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { setMenuIsOpen } = counterSlice.actions;
