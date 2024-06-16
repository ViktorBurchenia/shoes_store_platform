import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from '../utils';
import '../styles/style.scss';
import { HomePage, ShoePage, LoginPage } from "../pages";
import { Header } from "../components";
import Footer from "../components/Footer/Footer";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header /> {/* Include the Header component here */}
      <Routes>
        <Route path="/shoe" element={<ShoePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        {/* Define more routes as needed */}
      </Routes>
      <Footer />
    </ApolloProvider>
  );
}

export { App };
