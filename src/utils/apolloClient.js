import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, concat } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});

const authLink = createHttpLink({
  uri: 'http://localhost:3000/graphql_auth',
});

const setAuthLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token') || 'wOVM9q_uiXkABMfvGyqaEg';
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const link = ApolloLink.split(
  operation => {
    return operation.getContext().auth;
  },
  authLink,
  httpLink
);

const client = new ApolloClient({
  link: concat(setAuthLink, link),
  cache: new InMemoryCache(),
});

export { client };
