import React, { Component } from 'react'

import { connect } from 'react-redux'; // Gain access to global state

import PlaybillEditForm from '../containers/playbills/PlaybillEditForm'

import CreditsIndex from '../containers/credits/CreditsIndex'

import {Link} from 'react-router-dom';

class EditPlaybill extends Component {

    render() {

        const selectplaybill = this.props.playbills.find(pb => pb.id === parseInt(this.props.match.params.playbillId))

        return (
            <div>
                <h1>I'm the Edit Playbill View!</h1>
                <PlaybillEditForm selectedPlaybill={selectplaybill}/>
                <CreditsIndex playbill={selectplaybill}/>
                <Link to={"/playbills/" + selectplaybill.id + "/credits/new"}>Add Credit</Link>
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
  
export default connect(mapStateToProps)(EditPlaybill);