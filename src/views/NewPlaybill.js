import React, { Component } from 'react'

// Get new playbill form
import PlaybillForm from '../containers/PlaybillForm';

class NewPlaybill extends Component {

    render() {
        console.log(this.props)
        return (
        <div>
            <h1>I'm the New Playbill View!</h1>
            <hr/>
            <PlaybillForm />
        </div>
        )
    }

}

export default NewPlaybill;