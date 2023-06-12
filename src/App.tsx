import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Chatbot } from './components/chatbot/Chatbot';
// import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Nav } from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductsPage />} />
            
          </Routes>
          <Chatbot />
          <Footer />
        </Router>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
