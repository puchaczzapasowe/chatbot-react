import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Chatbot } from './components/chatbot/Chatbot';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Nav } from './components/Nav';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <Header />
         */}
        <Nav />

        
        <Chatbot />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
