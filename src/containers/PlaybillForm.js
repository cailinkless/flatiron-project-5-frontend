import React, { Component } from 'react'
import { addPlaybill } from '../actions/playbills'
import { connect } from 'react-redux'

class PlaybillForm extends Component {

    state={
        playbill: {
            title: "",
            about: ""
            // credits: [],
            // showtimes: []
        },
        loading: false
    }

    handleOnChange = e => {
        this.setState({...this.state,
            playbill: {
                ...this.state.playbill,
                title: e.target.value
            }
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const playbill = {...this.state.playbill}
        console.log(playbill)
        this.props.addPlaybill(playbill)
        this.setState({
            playbill: {
                title: "",
                about: ""
            },
            loading: false
        })
    }

    render() {
        return (
            <div>
                <h2>Start New Playbill</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Play Title:</label>
                    <input type="text" value={this.state.playbill.title} onChange={this.handleOnChange}/>
                    
                    <label>Show Notes:</label>
                    <input type="textarea"></input>

                    <br></br>
                    <p>Add a Showtime!</p>
                    <p>Add a Credit!</p>
                    
                    <button type="submit">Start This Playbill</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addPlaybill })(PlaybillForm)
