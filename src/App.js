import React, {Component} from 'react';
import './App.css';
// Gain access to global state
import { connect } from 'react-redux';
// Add action to load playbills
import { getPlaybills } from './actions/playbills';
// Get new playbill form
import PlaybillForm from './containers/PlaybillForm';

class App extends Component {

  componentDidMount() {
    this.props.getPlaybills()
  }

  render() {
    console.log("Rendering...")
    const playbillLis = this.props.playbills.map(pb => <li key={pb.id}>{pb.title}</li>)
    return (
      <div className="App">

        <h1>Playbill Dashboard</h1>

        <hr/>

        <h2>Your Playbills</h2>

        <ul>
          {this.props.loading? <h3>Loading...</h3> : playbillLis}
        </ul>

        <hr />

        <h2>Start New Playbill</h2>

        <PlaybillForm />

      </div>
    );
  };

};

const mapStateToProps = state => {
  console.log("I am state", state)
  return {
    playbills: state.playbillReducer.playbills,
    loading: state.playbillReducer.loading
  }
}

export default connect(mapStateToProps, { getPlaybills })(App);
