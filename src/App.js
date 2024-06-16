import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Layout from './layouts/main_layout/Layout';
import ShoeStorePage from './pages/ShoeStorePage';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Routes>
          <Route path="/ShoeStorePage" element={<ShoeStorePage />} />
          {/* Define more routes as needed */}
        </Routes>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
