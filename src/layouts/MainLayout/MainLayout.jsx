import React from 'react';
import Footer from '../../components/Footer/Footer';
import {Header} from "../../components/Header";

const  MainLayout= ({ children })  => {
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

export {MainLayout};
