import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// hook up the client to the graphql endpoint
const httpLink = createHttpLink({
    uri: '/graphql'
});

// attach authorization property to every request
const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('ll_id_token');

    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : ''
        }
    };
});

// instantiate apollo w/ cache
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={SearchBooks} />
                <Route exact path='/saved' component={SavedBooks} />
                <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Switch>
        </>
        </Router>
    </ApolloProvider>
  );
}

export default App;
