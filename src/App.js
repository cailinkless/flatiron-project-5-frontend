import React, {Component} from 'react';
import './App.css';
// Gain access to global state
import { connect } from 'react-redux';
// Get new playbill form
import PlaybillForm from './containers/PlaybillForm';
//get playbills index
import PlaybillsIndex from './containers/PlaybillsIndex';
//get playbill show
import PlaybillShow from './components/PlaybillShow'

class App extends Component {

  render() {

    return (
      <div className="App">

        <h1>Playbill Dashboard</h1>

        <hr/>

        <PlaybillsIndex />

        <hr/>

        <PlaybillForm />

        <hr/>

      </div>
    );
  };

};

export default App
