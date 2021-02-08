import React, { Component } from 'react'
import { addPlaybill } from '../../actions/playbills'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

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
                [e.target.name]: e.target.value
            }
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const playbill = {...this.state.playbill}
        console.log(playbill)
        this.props.addPlaybill(playbill)
        this.props.history.push('/')
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
