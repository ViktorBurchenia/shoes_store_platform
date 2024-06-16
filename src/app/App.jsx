import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import {client} from '../utils';
import '../styles/style.scss';
import {HomePage, ShoePage} from "../pages";
import {MainLayout} from "../layouts";

const  App = () =>  {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <Routes>
          <Route path="shoe" element={<ShoePage />} />
          <Route index element={<HomePage />} />
          {/* Define more routes as needed */}
        </Routes>
      </MainLayout>
    </ApolloProvider>
  );
}

export {App};
