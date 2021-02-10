import React, {Component} from 'react'; // grab ability to use react and class components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // import react-router functions
import './App.css'; // grab styling

import TopLogo from './components/TopLogo'; // get branded header
import NavBar from './components/NavBar' // get navbar component

// Routes
import Home from './views/Home' // get Index View (Home)
import NewPlaybill from './views/NewPlaybill' // get new playbill view
import ShowPlaybill from './views/ShowPlaybill' // get show playbill view
import EditPlaybill from './views/EditPlaybill' // get edit playbill view
import EditCredit from './views/EditCredit' // get edit credit view
import NewCredit from './views/NewCredit' // get new credit view

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
