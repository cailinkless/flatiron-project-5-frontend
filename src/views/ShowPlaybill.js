import React, { Component } from 'react'

import { connect } from 'react-redux'; // Gain access to global state

import { getPlaybills } from '../actions/playbills'; // Add action to load playbills

// Make sure to throw error if id number is not in database

import PlaybillTemplate from '../components/PlaybillTemplate'

class ShowPlaybill extends Component {

    componentDidMount() {
        this.props.getPlaybills()
    }

    render() {
        // Why does THIS work:
        const AllPlaybillInfo = this.props.playbills.map(pb => <PlaybillTemplate playbill={pb} key={pb.id}/>)

        // But not THIS?
        const selectplaybill = this.props.playbills.find(pb => pb.id == window.location.pathname.split("/")[2])

        // debugger

        return (
            <div>
                <h1>I'm the Show Playbill View!</h1>
                <p><div>{AllPlaybillInfo}</div></p>
                <h1>Attempt 2</h1>
                {/* <PlaybillTemplate playbill={selectplaybill}/> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("I am state", state)
    return {
      playbills: state.playbillReducer.playbills,
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps, {getPlaybills})(ShowPlaybill);