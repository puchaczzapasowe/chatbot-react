import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/database';
const MassageTypes = ['info', 'link', 'wrong', 'user'] as const;
export type MessageType = (typeof MassageTypes)[number];

export type Message = {
  type: MessageType;
  text: string;
  author: 'user' | 'bot';
  product?:Product
};

export interface CounterState {
  messages: Message[];
  chatIsOpen: boolean;
}
const initialState: CounterState = {
  messages: [],
  chatIsOpen: false,
};
export const counterSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages = [...state.messages, action.payload];
    },
    setChatIsOpen: (state, action: PayloadAction<boolean>) => {
      state.chatIsOpen = action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { addMessage, setChatIsOpen } = counterSlice.actions;
