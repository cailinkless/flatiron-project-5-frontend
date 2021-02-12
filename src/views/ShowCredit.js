import React, { Component } from 'react' // grab ability to use react and class components
import { connect } from 'react-redux'; // gain access to global state
import CreditTemplate from '../components/CreditTemplate'; // grab display component
import {Link} from 'react-router-dom'; // grab ability to link

class ShowCredit extends Component {

    render() {

        // Grab the correct credit for the route to pass down to components
        const selectCredit = this.props.credits.find(c => c.id === parseInt(this.props.match.params.creditId))

        return (
            <div>
                {/* <EditMe playbillId={selectplaybill.id}/> */}
                <CreditTemplate credit={selectCredit}/>
                <Link to={`/credits/${selectCredit.id}/edit`}>Edit Credit</Link>
                <br />
                <Link to={`/playbills/${selectCredit.playbill.playbill_id}/edit`}>Back to Playbill Editor</Link>
            </div>
        );
    }
}

const mapStateToProps = state => { // make global state available as the following props:
    return {
      credits: state.creditReducer.credits,
      c_loading: state.creditReducer.c_loading
    }
}
  
export default connect(mapStateToProps)(ShowCredit);