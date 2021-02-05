import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'; // Gain access to global state

import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import react-router functions

import {Link} from 'react-router-dom';

import TopLogo from './components/TopLogo'; // get branded header

//Move these to a routes component and then import them as one?
import Home from './views/Home' // get Home view
import NewPlaybill from './views/NewPlaybill' // get new playbill view
import ShowPlaybill from './views/ShowPlaybill' // get show playbill view
import EditPlaybill from './views/EditPlaybill' // get edit playbill view

class App extends Component {

  render() {
  
    return (
      <Router>
        <div className="App">

          <TopLogo />

          <Route exact path="/" component={Home} />
          <Route exact path="/newplaybill" component={NewPlaybill} />
          <Route exact path="/playbills/:playbillId" component={ShowPlaybill} />
          <Route exact path="/playbills/:playbillId/edit" component={EditPlaybill} />

        </div>
      </Router>
    );

  };

};

export default App
