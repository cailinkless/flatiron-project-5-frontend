import React, { Component } from 'react'
import { addPlaybill } from '../actions/playbills'
import { connect } from 'react-redux'

class PlaybillForm extends Component {

    state={
        playbill: {
            title: "",
            about: ""
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
            <form onSubmit={this.handleOnSubmit}>
                <label>Play Title:</label>
                <input type="text" value={this.state.playbill.title} onChange={this.handleOnChange}/>
                <button type="submit">Start This Playbill</button>
            </form>
        )
    }
}

export default connect(null, { addPlaybill })(PlaybillForm)
