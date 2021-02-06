import React, { Component } from 'react'

import { connect } from 'react-redux'; // Gain access to global state

import { getPlaybills } from '../actions/playbills'; // Add action to load playbills

// Make sure to throw error if id number is not in database

import PlaybillTemplate from '../components/PlaybillTemplate';

import CreditsIndex from '../containers/CreditsIndex';

import CreditForm from '../containers/CreditForm';

class ShowPlaybill extends Component {

    render() {

        const selectplaybill = this.props.playbills.find(pb => pb.id === parseInt(this.props.match.params.playbillId))

        return (
            <div>
                <h1>I'm the Show Playbill View!</h1>
                <PlaybillTemplate playbill={selectplaybill}/>
                <hr></hr>
                <CreditsIndex playbill={selectplaybill}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("I am state", state)
    return {
      playbills: state.playbillReducer.playbills,
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps)(ShowPlaybill);