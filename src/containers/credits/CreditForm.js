import React, { Component } from 'react'
import { addCredit } from '../../actions/credits'
import { connect } from 'react-redux'

class CreditForm extends Component {

    state={
        credit: {
            name: "",
            role: "",
            bio: "",
            cast: false,
            playbill_id: this.props.playbillId
        },
        loading: false
    }

    handleOnChange = e => {
        this.setState({...this.state,
            credit: {
                ...this.state.credit,
                [e.target.name]: e.target.value
            }
        })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        const credit = {...this.state.credit}
        console.log(credit)
        this.props.addCredit(credit)
        this.setState({
            credit: {
                name: "",
                role: "",
                bio: "",
                cast: false,
                playbill_id: this.props.playbillId
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Cast / Crew Member Details:</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name:</label>
                    <input name="name" type="text" value={this.state.credit.name} onChange={this.handleOnChange}/>

                    {/* <label>Category:</label>
                    <input name="cast" type="radio" value="true"></input>
                    <label for="cast">Cast</label>
                    <input name="noncast" type="radio" value="false"></input>
                    <label for="noncast">Crew (includes writer, director, etc...)</label> */}

                    <label>Role:</label>
                    <input name="role" type="text" value={this.state.credit.role} onChange={this.handleOnChange}/>
                    
                    <label>Bio:</label>
                    <input name="bio" type="textarea" value={this.state.credit.bio} onChange={this.handleOnChange}/>
                    
                    <button type="submit">Add This Credit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { addCredit })(CreditForm)