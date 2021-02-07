import React, { Component } from 'react';
import { connect } from 'react-redux';
// get action to delete playbills
import { getCredits, deleteCredit } from '../../actions/credits';
import { deletePlaybillCredit } from '../../actions/playbills'

class CreditsIndex extends Component {

    componentDidMount() {
        this.props.getCredits()
    }

    handleDelete = (e) => {
        this.props.deleteCredit(e.target.id);
        this.forceUpdate();
    }

    handleSpecialDelete = (e) => {
        this.props.deletePlaybillCredit(e.target.id);
    }
    
    render() {
        const selectedPlaybillId = this.props.playbill.id
        const selectedCredits = this.props.credits.filter(c => c.playbill_id === selectedPlaybillId)
        const creditDivs = selectedCredits.map( c => 
            <div> 
              <p>Name: {c.name}</p>
              <p>Role: {c.role}</p>
              <p>Bio: {c.bio}</p>
              <button id={c.id} onClick={this.handleDelete}>Delete Credit</button>
              <button id={c.id} onClick={this.handleSpecialDelete}>Special Delete</button>
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
      credits: [...state.playbillReducer.playbills.map(pb => pb.credits).flat()],
      loading: state.creditReducer.loading
    }
}

export default connect(mapStateToProps, { deletePlaybillCredit, getCredits, deleteCredit })(CreditsIndex);