import React, { Component } from 'react' // grab ability to use react and class components
import { connect } from 'react-redux'; // gain access to global state
import { getCredits } from '../../actions/credits'; // grab relevant credit actions
import { deleteCredit } from '../../actions/playbills';

import {Link} from 'react-router-dom';



class CreditsIndex extends Component {

    // Grabs list of playbills once component is up
    componentDidMount() {
      this.props.getCredits()
    }

    handleDelete = (e) => {
      this.props.deleteCredit(e.target.id)
    }

    render() {

      // Parse Credits into simple display format


      const creditLis = this.props.credits.filter(c => c.playbill.playbill_id === this.props.playbillId).map( c => 
      <li key={c.id}>{c.name} - {c.role} - 
        <Link to={"/credits/" + c.id}>View</Link>
        <Link to={"/credits/" + c.id + "/edit"}>Edit</Link>
        <button id={c.id} onClick={this.handleDelete}>Delete</button>
      </li>
      )
    
      // Render list of playbills or a loading notification
      return (
        <div>
          <h2>Associated Credits</h2>
          <ul>{this.props.c_loading? <h3>Loading...</h3> : creditLis}</ul>
        </div>
      );
    };
}

//
const mapStateToProps = state => { // make global state info available as the following props:
    return {
      credits: state.creditReducer.credits,
      c_loading: state.creditReducer.loading,
      playbills: state.playbillReducer.playbills,
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps, { getCredits, deleteCredit })(CreditsIndex);
