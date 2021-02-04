import React, { Component } from 'react'
// Gain access to global state
import { connect } from 'react-redux';
// get action to show playbill
import { getPlaybill } from '../actions/playbills';

class PlaybillShow extends Component {
    componentDidMount() {
        this.props.getPlaybill()
    }

    render() {
        debugger
        return (
            <div>
                <h2>Playbill Preview:</h2>
                <p>{this.props.selectedPlaybill.title}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("I am state", state)
    return {
      playbill: state.playbillReducer.selectedPlaybill,
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps, { getPlaybill })(PlaybillShow);
