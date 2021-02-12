import React, { Component } from 'react' // grab ability to use react and class components
import CreditEditForm from '../containers/credits/CreditEditForm'; // get new credit form
import { connect } from 'react-redux'; // gain access to global state
import {Link} from 'react-router-dom'; // grab ability to link

class EditCredit extends Component {

    render() {

        const playbillId = parseInt(this.props.match.params.playbillId)
        const creditId = parseInt(this.props.match.params.creditId)
        debugger
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
        playbills: state.playbillReducer.playbills,
        loading: state.playbillReducer.loading
    }
}

export default connect(mapStateToProps)(EditCredit)