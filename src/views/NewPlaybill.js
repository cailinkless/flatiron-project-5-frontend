import React, { Component } from 'react'

// Get new playbill form
import PlaybillForm from '../containers/playbills/PlaybillForm';

class NewPlaybill extends Component {

    render() {
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