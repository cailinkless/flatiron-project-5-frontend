import React, { Component } from 'react'

import { connect } from 'react-redux'; // Gain access to global state

import CreditForm from '../containers/credits/CreditForm';

class NewCredit extends Component {

    render() {

        const selectplaybill = this.props.playbills.find(pb => pb.id === parseInt(this.props.match.params.playbillId))

        return (
            <div>
                <h1>Add New Credit</h1>
                <CreditForm playbillId={selectplaybill.id}/>
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
  
export default connect(mapStateToProps)(NewCredit);