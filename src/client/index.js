//Library Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import '@babel/polyfill';

//Project Imports
import reducers from './reducers';
import App from './components/App';

//Style imports for webpack
import './style/main.scss';

//Redux store creation : set of reducers, initial state, middleware application
const store = createStore(
    reducers,
    {
        auth: {
            jwt: null,
            currUser: null
        },
        ui: {
            tabSelection: null,
        }
    },
    applyMiddleware(reduxThunk)
);

//Attachment of React components to the DOM
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
