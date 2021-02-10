import React, { Component } from 'react' // grab ability to use react and class components
import { updatePlaybill } from '../../actions/playbills' // grab relevant playbill action
import { connect } from 'react-redux' // gain access to global state
import { withRouter } from 'react-router-dom'; // ensure access to history

class PlaybillEditForm extends Component {

    state={
        playbill: this.props.selectedPlaybill, // sets local state to playbill passed in through props
        loading: false
    }

    // Make Alert that update has taken place?
    notifyUpdate = () => {
        // find alert
    }

    // Keep track of user changes
    handleOnChange = e => {
        this.setState({...this.state,
            playbill: {
                ...this.state.playbill,
                [e.target.name]: e.target.value
            }
        })
    }

    // Send updated info to the database & global state
    handleOnSubmit = e => {
        e.preventDefault()
        const playbill = {...this.state.playbill}
        this.props.updatePlaybill(playbill)
        // notifyUpdate
    }

    render() {
        return (
            <div>
                <h2>Production Info:</h2>
                <form onSubmit={this.handleOnSubmit}>
                    
                    <label>Play Title:</label>
                    <input name="title" type="text" value={this.state.playbill.title} onChange={this.handleOnChange}/>
                    <br/><br/>
                    <label>Show Notes:</label>
                    <br/>
                    <textarea name="about" type="textarea" value={this.state.playbill.about} onChange={this.handleOnChange}/>
                    <br/><br/>
                    <button type="submit">Update Production Info</button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, { updatePlaybill })(PlaybillEditForm))