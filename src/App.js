import React, {Component} from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import react-router functions

import TopLogo from './components/TopLogo'; // get branded header

//Move these to a routes component and then import them as one?
import Home from './views/Home' // get Index View (Home)
import NewPlaybill from './views/NewPlaybill' // get new playbill view
import ShowPlaybill from './views/ShowPlaybill' // get show playbill view
import EditPlaybill from './views/EditPlaybill' // get edit playbill view

import EditCredit from './views/EditCredit'
import NewCredit from './views/NewCredit'

import NavBar from './components/NavBar'

// Add A Switch

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">

          <TopLogo />

          <NavBar />

          <Switch>
            
            {/* Home (Index Route) */}
            <Route exact path="/" component={Home} />
            {/* Create Routes */}
            <Route exact path="/playbills/new" component={NewPlaybill} />
            <Route exact path="/playbills/:playbillId/credits/new" component={NewCredit} />
            {/* Show Route */}
            <Route exact path="/playbills/:playbillId" component={ShowPlaybill} />
            {/* Update Routes (Includes Delete) */}
            <Route exact path="/playbills/:playbillId/edit" component={EditPlaybill} />
            <Route exact path="/credits/:creditId/edit" component={EditCredit} />

          </Switch>

        </div>
      </Router>
    );

  };

};

export default App
