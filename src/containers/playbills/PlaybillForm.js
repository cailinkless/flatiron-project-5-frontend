import React, { Component } from 'react' // grab ability to use react and class components
import { addPlaybill } from '../../actions/playbills' // grab relevant playbill action
import { connect } from 'react-redux' // gain access to global state
import { withRouter } from 'react-router-dom'; // ensure access to history

class PlaybillForm extends Component {

    // Sets initial state formatting
    state={
        playbill: {
            title: "",
            about: ""
        },
        loading: false
    }

    // Keep track of user changes to the form
    handleOnChange = e => {
        this.setState({...this.state,
            playbill: {
                ...this.state.playbill,
                [e.target.name]: e.target.value
            }
        })
    }

    // Send info to the database & add to global state
    handleOnSubmit = e => {
        e.preventDefault()
        const playbill = {...this.state.playbill}
        this.props.addPlaybill(playbill)
        this.props.history.push('/') // returns user home
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
                    <button type="submit">Save Playbill</button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, { addPlaybill })(PlaybillForm))
