import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreditsIndex extends Component {
    
    render() {
        const credits = this.props.playbill.credits.map( c => 
            <div> 
              <p>Name: {c.name}</p>
              <p>Role: {c.role}</p>
              <p>Bio: {c.bio}</p>
              <hr/>
            </div>
            )
        return (
            <div>
                <h2>Credit Info:</h2>
                <hr/>
                {credits}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("I am state", state)
    return {
      playbills: state.playbillReducer.playbills,
      loading: state.playbillReducer.loading
    }
}

export default connect(mapStateToProps)(CreditsIndex);