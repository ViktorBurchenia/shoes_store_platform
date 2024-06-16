import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <Header />
      <main style={mainStyle}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: '1',
  padding: '20px',
};

export default Layout;
