import React, { Component } from 'react'

import { connect } from 'react-redux'; // Gain access to global state

import PlaybillEditForm from '../containers/playbills/PlaybillEditForm'

import CreditsIndex from '../containers/credits/CreditsIndex'

import PreviewMe from '../components/PreviewMe';

import {Link} from 'react-router-dom';

class EditPlaybill extends Component {

    render() {

        const selectplaybill = this.props.playbills.find(pb => pb.id === parseInt(this.props.match.params.playbillId))

        return (
            <div>
                <PreviewMe playbillId={selectplaybill.id}/>
                <PlaybillEditForm selectedPlaybill={selectplaybill}/>
                <br/><br/>
                <Link to={"/playbills/" + selectplaybill.id + "/credits/new"}>Add New Credit</Link>
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
  
export default connect(mapStateToProps)(EditPlaybill);