import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const MassageTypes = ['info', 'link', 'wrong', 'user'] as const;
export type MessageType = (typeof MassageTypes)[number];

export type Message = {
  type: MessageType;
  text: string;
  author: 'user' | 'bot';
};

export interface CounterState {
  messages: Message[];
}
const initialState: CounterState = {
  messages: [],
};
export const counterSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

export default counterSlice.reducer;
export const { addMessage } = counterSlice.actions;
