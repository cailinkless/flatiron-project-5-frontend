// import React, { Component } from 'react' // grab ability to use react and class components
import React, { Component } from 'react' // grab ability to use react and class components
// import { connect } from 'react-redux'; // gain access to global state
import { connect } from 'react-redux'; // gain access to global state
// import { getCredits } from '../../actions/credits'; // grab relevant credit actions
// import { deleteCredit } from '../../actions/playbills';
import { deleteCredit } from '../../actions/playbills';
// import { deleteCredit } from '../../actions/credits';

// import {Link} from 'react-router-dom';
import {Link} from 'react-router-dom';


class CreditsIndex extends Component {

    handleDelete = (e) => {
      this.props.deleteCredit(e.target.id)
    }

  
    render() {

// Parse Credits into simple display format

    const selectedPlaybill = this.props.playbills.find(pb => pb.id === this.props.playbillId)
    const creditLis = selectedPlaybill.credits.map( c => 
      <li key={c.id}>{c.name} - {c.role} - 
        <Link to={"/playbills/" + c.playbill.playbill_id + "/credits/" + c.id}>View</Link>
        <Link to={"/playbills/" + c.playbill.playbill_id + "/credits/" + c.id + "/edit"}>Edit</Link>
        {/* <button id={c.id} onClick={this.handleDelete}>Delete</button> */}
        <button id={c.id} onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.handleDelete(e) }}>Delete</button>
      </li>
    )

      // Render list of credits or a loading notification
      return (
        <div>
          <h2>Associated Credits</h2>
          <ul>{this.props.loading? <h3>Loading...</h3> : creditLis}</ul>
        </div>
      );
    };
}

const mapStateToProps = state => { // make global state info available as the following props:
    return {
      playbills: state.playbillReducer.playbills,
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps, { deleteCredit })(CreditsIndex);