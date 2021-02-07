import React, { Component } from 'react';
import { connect } from 'react-redux';
// get action to delete playbills
import { deleteCredit } from '../../actions/credits';
import { withRouter } from 'react-router-dom';

import {Link} from 'react-router-dom';

class CreditsIndex extends Component {

    handleDelete = (e) => {
        this.props.deleteCredit(e.target.id, this.props.playbill.id);
        this.props.history.push(`/`);
    }

    // handleSpecialDelete = (e) => {
    //     this.props.deletePlaybillCredit(e.target.id);
    // }
    
    render() {
        const creditDivs = this.props.playbill.credits.map( c => 
            <div key={c.id}> 
              <p>Name: {c.name}</p>
              <p>Role: {c.role}</p>
              <p>Bio: {c.bio}</p>
              <Link to={"/credits/" + c.id + "/edit"}>Edit Credit</Link>
              <button id={c.id} onClick={this.handleDelete}>Delete Credit</button>
              {/* <button id={c.id} onClick={this.handleSpecialDelete}>Special Delete</button> */}
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

const mapStateToProps = state => {
    console.log("I am state", state)
    return {
        playbills: state.playbillReducer.playbills,
        credits: [...state.playbillReducer.playbills.map(pb => pb.credits).flat()],
        loading: state.creditReducer.loading
    }
}

export default withRouter(connect(mapStateToProps, { deleteCredit })(CreditsIndex));