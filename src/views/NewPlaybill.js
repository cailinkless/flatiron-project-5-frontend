import React, { Component } from 'react' // grab ability to use react and class components
import PlaybillForm from '../containers/playbills/PlaybillForm'; // get new playbill form

class NewPlaybill extends Component {

    render() {
        return (
        <div>
            <PlaybillForm />
        </div>
        )
    }

}

export default NewPlaybill;