import { configureStore } from '@reduxjs/toolkit';
import chatbot from './chatbotSlice';
import headerSlice from './headerSlice';

import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: { chatbot: chatbot, header: headerSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
