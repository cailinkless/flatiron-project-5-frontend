import React, { Component } from 'react' // grab ability to use react and class components
import { connect } from 'react-redux'; // gain access to global state
import { getPlaybills, deletePlaybill} from '../../actions/playbills'; // grab relevant playbill actions

import {Link} from 'react-router-dom';



class PlaybillsIndex extends Component {

  // state={
  //   name: "howard"
  // }

    // Grabs list of playbills once component is up
    componentDidMount() {
      this.props.getPlaybills()
    }

    handleDelete = (e) => {
      this.props.deletePlaybill(e.target.id)
    }

    // handleOnClick = (e) => {
    //   console.log(e.target.dataset.id)
    //   if (this.state[e.target.dataset.id] === undefined) {
    //     this.setState({
    //       [e.target.dataset.id]: 1
    //     })
    //   } else {
    //     this.setState({
    //     [e.target.dataset.id]: this.state[e.target.dataset.id] + 1
    //   })}
    // }

    render() 
    
      {

      // Parse playbills into simple display format
      const playbillLis = this.props.playbills.map( pb => 
      <li key={pb.id}>{pb.title ? pb.title : "Untitled Playbill"} 
        <Link to={"/playbills/" + pb.id + "/edit"}>Edit</Link>
        <Link to={"/playbills/" + pb.id}>Preview</Link>
        <button id={pb.id} onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.handleDelete(e) }}>Delete</button>
        {/* <button data-id={pb.id} onClick={this.handleOnClick}>Pick Me!</button> */}
        {/* <p>{this.state[pb.id]? this.state[pb.id] + " likes" : "No one likes me."}</p> */}
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
