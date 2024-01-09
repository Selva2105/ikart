import React, { ReactNode } from 'react';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className='my-28 md:my-16'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
