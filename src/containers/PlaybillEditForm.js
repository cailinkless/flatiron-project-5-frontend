import React, { Component } from 'react'
import { updatePlaybill } from '../actions/playbills'
import { connect } from 'react-redux'

class PlaybillEditForm extends Component {

    state={
        playbill: this.props.selectedPlaybill,
        loading: false
    }

    handleOnChange = e => {
        this.setState({...this.state,
            playbill: {
                ...this.state.playbill,
                [e.target.name]: e.target.value
            }
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const playbill = {...this.state.playbill}
        console.log(playbill)
        debugger
        this.props.updatePlaybill(playbill)
        // this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>Start New Playbill</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Play Title:</label>
                    <input name="title" type="text" value={this.state.playbill.title} onChange={this.handleOnChange}/>
                    
                    <label>Show Notes:</label>
                    <input name="about" type="textarea" value={this.state.playbill.about} onChange={this.handleOnChange}/>

                    <br></br>
                    <p>Add a Credit!</p>
                    <p>Add a Showtime!</p>
                    
                    <button type="submit">Start This Playbill</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { updatePlaybill })(PlaybillEditForm)