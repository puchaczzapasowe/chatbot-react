import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Chatbot } from './components/chatbot/Chatbot';
// import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Home from './pages/Home';
import ProductsPage from './pages/Products';
import Dashboard from './pages/Outlet';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard />}>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/product/:id' element={<ProductsPage />} />
            </Route>
          </Routes>
          <Chatbot />
        </Router>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
