import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'; // Gain access to global state

import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import react-router functions

import TopLogo from './components/TopLogo'; // get branded header
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

          <hr/>

          <Route path="/" component={Home} />
          <Route exact path="/playbills/new" component={NewPlaybill} />
          <Route exact path="/playbills/show-temp" component={ShowPlaybill} />
          <Route exact path="/playbills/edit-temp" component={EditPlaybill} />

        </div>
      </Router>
    );

  };

};

export default App
