import React, { Component } from 'react' // grab ability to use react and class components
import CreditEditForm from '../containers/credits/CreditEditForm'; // get new credit form
import { connect } from 'react-redux'; // gain access to global state
import {Link} from 'react-router-dom'; // grab ability to link

class EditCredit extends Component {

    render() {

        const creditId = parseInt(this.props.match.params.creditId)
        const playbillId = this.props.credits.find(c => c.id === creditId).playbill.playbill_id
        return (
        <div>
            <CreditEditForm playbillId={playbillId} creditId={creditId}/>
            <Link to={`/playbills/${playbillId}/edit`}>Back to Playbill Editor</Link>
        </div>
        )
    }

}

const mapStateToProps = state => { // make global state info available as the following props:
    return {
      credits: state.creditReducer.credits,
      c_loading: state.creditReducer.loading
    }
}

export default connect(mapStateToProps)(EditCredit)