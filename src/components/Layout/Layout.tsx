import React from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
