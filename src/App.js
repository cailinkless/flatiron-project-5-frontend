import React, {Component} from 'react';
import './App.css';
// Gain access to global state
import { connect } from 'react-redux';
// Get new playbill form
import PlaybillForm from './containers/PlaybillForm';
//get playbill index
import PlaybillsIndex from './components/PlaybillsIndex';

class App extends Component {

  render() {

    return (
      <div className="App">

        <h1>Playbill Dashboard</h1>

        <hr/>

        <PlaybillsIndex />

        <hr/>

        <PlaybillForm />

      </div>
    );
  };

};

export default App
