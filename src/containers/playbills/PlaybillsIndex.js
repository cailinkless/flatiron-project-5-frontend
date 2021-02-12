import React, { Component } from 'react' // grab ability to use react and class components
import { connect } from 'react-redux'; // gain access to global state
import { getPlaybills, deletePlaybill} from '../../actions/playbills'; // grab relevant playbill actions

import {Link} from 'react-router-dom';



class PlaybillsIndex extends Component {

    // Grabs list of playbills once component is up
    componentDidMount() {
      this.props.getPlaybills()
    }

    handleDelete = (e) => {
      this.props.deletePlaybill(e.target.id)
    }

    render() {

      // Parse playbills into simple display format
      const playbillLis = this.props.playbills.map( pb => 
      <li key={pb.id}>{pb.title} 
        <Link to={"/playbills/" + pb.id + "/edit"}>Edit</Link>
        <Link to={"/playbills/" + pb.id}>Preview</Link>
        <button id={pb.id} onClick={this.handleDelete}>Delete</button>
      </li>
      )
    
      // Render list of playbills or a loading notification
      return (
        <div>
          <h2>My Playbills</h2>
          <ul>{this.props.loading? <h3>Loading...</h3> : playbillLis}</ul>
        </div>
      );
    };
}

//
const mapStateToProps = state => { // make global state info available as the following props:
    return {
      playbills: state.playbillReducer.playbills,
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps, { getPlaybills, deletePlaybill })(PlaybillsIndex);
