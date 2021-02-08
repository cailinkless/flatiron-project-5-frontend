import React, { Component } from 'react'

import { connect } from 'react-redux';

import CreditEditForm from '../containers/credits/CreditEditForm';

class EditCredit extends Component {

    render() {

        const selectcredit = this.props.credits.find(c => c.id === parseInt(this.props.match.params.creditId))

        return (
            <div>
                <CreditEditForm selectedCredit={selectcredit}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("I am state", state)
    return {
      playbills: state.playbillReducer.playbills,
      credits: [...state.playbillReducer.playbills.map(pb => pb.credits).flat()],
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps)(EditCredit);