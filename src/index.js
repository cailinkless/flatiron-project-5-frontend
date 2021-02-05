import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Allow connection to global state
import { Provider } from 'react-redux';
// Allow for creation of global state and use of thunk
import { createStore, applyMiddleware } from 'redux';
// Allow for async
import thunk from 'redux-thunk';
// Grab rootReducer
import rootReducer from './reducers/index';
// Allow DevTools to be passed in with thunk
import { composeWithDevTools } from 'redux-devtools-extension';

// Import react-router functions -Flatiron version:  import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import react-router functions -educative.io version: import { BrowserRouter as Router } from 'react-router-dom'; import { Routes } from './routes'; // where we are going to specify our routes

const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
