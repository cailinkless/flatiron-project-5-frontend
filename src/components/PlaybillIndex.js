import React, { Component } from 'react'
// Gain access to global state
import { connect } from 'react-redux';
// Add action to load playbills
import { getPlaybills } from '../actions/playbills';
// get action to delete playbills
import { deletePlaybill } from '../actions/playbills';

class PlaybillIndex extends Component {

    componentDidMount() {
        this.props.getPlaybills()
      }
    
      handleOnClick = (e) => {
        // debugger
        this.props.deletePlaybill(e.target.id)
    }

    render() {

        console.log("Rendering...")
        const playbillLis = this.props.playbills.map(pb => <li key={pb.id}>{pb.title} <button id={pb.id} onClick={this.handleOnClick}>Delete</button></li>)
    
        return (
            <div>
                <h2>Your Playbills</h2>
                <ul>{this.props.loading? <h3>Loading...</h3> : playbillLis}</ul>
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
  
export default connect(mapStateToProps, { getPlaybills, deletePlaybill })(PlaybillIndex);
