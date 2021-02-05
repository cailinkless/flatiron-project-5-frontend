import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'; // Gain access to global state

import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import react-router functions

import TopLogo from './components/TopLogo'; // get branded header
import Home from './views/Home' // get Home view

class App extends Component {

  render() {
  
    return (
      <Router>
        <div className="App">

          <TopLogo />

          <hr/>

          <Route exact path="/" component={Home} />

        </div>
      </Router>
    );

  };

};

export default App
