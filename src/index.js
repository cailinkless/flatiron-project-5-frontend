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
