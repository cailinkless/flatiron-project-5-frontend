import React, {Component} from 'react';
import './App.css';
// Gain access to global state
import { connect } from 'react-redux';
// Get new playbill form
import PlaybillForm from './containers/PlaybillForm';
//get playbills index
import PlaybillsIndex from './containers/PlaybillsIndex';
//get playbill show
import PlaybillShow from './components/PlaybillShow';
// get branded header
import TopLogo from './components/TopLogo';

class App extends Component {

  render() {

    return (
      <div className="App">

        <TopLogo />

        <hr/>

        <PlaybillsIndex />

        <hr/>

        <PlaybillForm />

        <hr/>

        <h1>TEMP: "Playbill Collection"</h1>

      </div>
    );
  };

};

export default App
