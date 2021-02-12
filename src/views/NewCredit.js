import React, { Component } from 'react' // grab ability to use react and class components
import CreditForm from '../containers/credits/CreditForm'; // get new credit form
import { connect } from 'react-redux'; // gain access to global state
import {Link} from 'react-router-dom'; // grab ability to link

class NewCredit extends Component {

    render() {

        const playbillId = parseInt(this.props.match.params.playbillId)
        const playbill = this.props.playbills.find(pb => pb.id === playbillId)

        return (
        <div>
            <CreditForm playbill={playbill} playbillId={playbillId}/>
            <Link to={`/playbills/${playbillId}/edit`}>Back to Playbill Editor</Link>
        </div>
        )
    }

}

const mapStateToProps = state => { // make global state available as the following props:
    return {
      playbills: state.playbillReducer.playbills,
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps)(NewCredit);