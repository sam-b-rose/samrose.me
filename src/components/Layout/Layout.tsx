import React from 'react';

import App from '@components/App';
import Header from '@components/Header';
import Footer from '@components/Footer';

const Layout: React.FC = ({ children }) => (
  <App>
    <Header />
    {children}
    <Footer />
  </App>
);

export default Layout;
