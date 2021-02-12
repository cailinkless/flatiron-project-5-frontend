import React, { Component } from 'react' // grab ability to use react and class components
import { connect } from 'react-redux'; // gain access to global state
import CreditTemplate from '../components/CreditTemplate'; // grab display component
import {Link} from 'react-router-dom'; // grab ability to link

class ShowCredit extends Component {

    render() {

        // Grab the correct credit for the route to pass down to components
        const selectedPlaybill = this.props.playbills.find(pb => pb.id === parseInt(this.props.match.params.playbillId))
        const selectedCredit = selectedPlaybill.credits.find(c => c.id === parseInt(this.props.match.params.creditId))

        return (
            <div>
                {/* <EditMe playbillId={selectplaybill.id}/> */}
                <CreditTemplate credit={selectedCredit}/>
                <Link to={`/playbills/${selectedPlaybill.id}/credits/${selectedCredit.id}/edit`}>Edit Credit</Link>
                <br />
                <Link to={`/playbills/${selectedPlaybill.id}/edit`}>Back to Playbill Editor</Link>
            </div>
        );
    }
}

const mapStateToProps = state => { // make global state available as the following props:
    return {
    //   credits: state.creditReducer.credits,
    //   c_loading: state.creditReducer.c_loading,
      playbills: state.playbillReducer.playbills,
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps)(ShowCredit);