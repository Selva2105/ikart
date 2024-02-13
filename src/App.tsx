import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './component/Header';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './component/Profile';
import Premium from './component/Permium';
import NotFound from './component/NotFound';
import ProductPage from './pages/Product/ProductOverviewPage';
import TruckLoader from './shared/TruckLoader/TruckLoader';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <Layout>
      {loading ? (
        <div className="flex justify-center items-center h-screen transition-opacity duration-1000 ease-in-out ">
        <TruckLoader />
      </div>
      ) : (
        // Main content when not loading
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
      )}
    </Layout>
  );
}

export default App;
