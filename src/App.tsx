import React from 'react';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './component/Profile';
import Premium from './component/Permium';
import NotFound from './component/NotFound';
import ProductPage from './pages/Product/ProductOverviewPage';

function App() {
  return (
    <Layout>
      <div className="min-h-screen font-inter">
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/productPage/:id" element={<ProductPage />} />

          <Route path='/premium' element={<Premium />} />


          {/* Catch-all route for 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
