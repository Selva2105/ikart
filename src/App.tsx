import React from 'react';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

function App() {
  return (
    <Layout>
      <div className="min-h-screen">
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
