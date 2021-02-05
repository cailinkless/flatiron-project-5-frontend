import React, { Component } from 'react'
// Gain access to global state
import { connect } from 'react-redux';
// Add action to load playbills
import { getPlaybills } from '../actions/playbills';
// get action to delete playbills
import { deletePlaybill } from '../actions/playbills';

import {Link} from 'react-router-dom';

import PlaybillTemplate from '../components/PlaybillTemplate'



class PlaybillsIndex extends Component {

    componentDidMount() {
      this.props.getPlaybills()
    }
    
    handleDelete = (e) => {
      this.props.deletePlaybill(e.target.id)
    }

    render() {

      console.log("Rendering...")
      
      const playbillLis = this.props.playbills.map( pb => 
      <li key={pb.id}>{pb.title} 
        <Link to={"/playbills/" + pb.id}>View</Link>
        <Link to={"/edit/" + pb.id}>Edit</Link>
        <button id={pb.id} onClick={this.handleDelete}>Delete</button>
      </li>
      )

      // const AllPlaybillInfo = this.props.playbills.map(pb => <PlaybillTemplate playbill={pb} key={pb.id}/>)
    
      return (
        <div>
          <div>
            <h2>Your Playbills</h2>
            <ul>{this.props.loading? <h3>Loading...</h3> : playbillLis}</ul>
          </div>
          
          {/* <div>{AllPlaybillInfo}</div> */}

        </div>
      );
    };
}

const mapStateToProps = state => {
    console.log("I am state", state)
    return {
      playbills: state.playbillReducer.playbills,
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps, { getPlaybills, deletePlaybill })(PlaybillsIndex);
