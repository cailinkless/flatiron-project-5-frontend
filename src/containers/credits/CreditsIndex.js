import React, { Component } from 'react'; // grab ability to use react and class components
import { connect } from 'react-redux'; // gain access to the global state
import { deleteCredit } from '../../actions/credits'; // get action to delete credits
import { withRouter } from 'react-router-dom'; // ensure access to history
import {Link} from 'react-router-dom'; // grab ability to use Link

class CreditsIndex extends Component {

    // handleDelete = (e) => {
    //     this.props.deleteCredit(e.target.id, this.props.playbill.id);
    //     this.props.history.push(`/`);
    // }
    
    render() {

        // Parse credits into a simple display format
        const creditDivs = this.props.playbill.credits.map( c => 
            <div key={c.id}> 
              <p>Name: {c.name}</p>
              <p>Role: {c.role}</p>
              <p>Bio: {c.bio}</p>
              <Link to={"/credits/" + c.id + "/edit"}>Edit Credit</Link>
              <hr/>
            </div>
        )

        return (
            <div>
                <h2>Credit Info:</h2>
                <hr/>
                {creditDivs}
            </div>
        )
    }
}

const mapStateToProps = state => { // make global state available as the following props:
    return {
        playbills: state.playbillReducer.playbills,
        credits: [...state.playbillReducer.playbills.map(pb => pb.credits).flat()],
        loading: state.creditReducer.loading
    }
}

export default withRouter(connect(mapStateToProps, { deleteCredit })(CreditsIndex));