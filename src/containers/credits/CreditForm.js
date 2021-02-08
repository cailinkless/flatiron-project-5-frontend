import React, { Component } from 'react' // allows for a component class
import { addCredit } from '../../actions/credits' // grabs the addCredit action
import { connect } from 'react-redux' // allows access to redux global state / dispatch
import { withRouter } from 'react-router-dom';

class CreditForm extends Component {

    // Set initial local state
    state={ 
        credit: {
            name: "",
            role: "",
            bio: "",
            cast: "",
            playbill_id: this.props.playbillId // assigns credit to the current playbill (must be passed in by parent)
        },
        loading: false
    }

    // Allow local state to keep track of user inputs
    handleOnChange = e => { // takes in change event
        this.setState({...this.state, // starts with current state
            credit: {
                ...this.state.credit, // starts with current credit
                [e.target.name]: e.target.value, // makes assigned changes to current credit
            }
        })
    }

    // Create new credit in the API and add it to global state
    handleOnSubmit = e => { // takes in the submit event
        e.preventDefault() // prevents submitting to a nonexistant backend

        //workaround to change radio value into true boolean

        if (this.state.credit.cast === "true") {
            this.setState({...this.state,
                credit: {
                    ...this.state.credit,
                    cast: true
                }
            })
        }

        const credit = {...this.state.credit} // save local state into variable
        console.log(credit) // for reference in development
        this.props.addCredit(credit) // action call
        this.setState({ // clears local state (and by extension form) for new input
            credit: {
                name: "",
                role: "",
                bio: "",
                cast: "",
                playbill_id: this.props.playbillId
            }
        })
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
                <h2>Cast / Crew Member Details:</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name:</label>
                    <input name="name" type="text" value={this.state.credit.name} onChange={this.handleOnChange}/>
                    <br/><br/>
                    <label>Category:</label>
                    <input name="cast" type="radio" value="true" onChange={this.handleOnChange}></input>
                    <label for="cast">Cast</label>
                    <input name="cast" type="radio" value="false" onChange={this.handleOnChange}></input>
                    <label for="cast">Crew (includes writer, director, etc...)</label>
                    <br/><br/>
                    <label>Role:</label>
                    <input name="role" type="text" value={this.state.credit.role} onChange={this.handleOnChange}/>
                    <br/><br/>
                    <label>Bio:</label>
                    <br/>
                    <textarea name="bio" type="textarea" value={this.state.credit.bio} onChange={this.handleOnChange}/>
                    <br/><br/>
                    <button type="submit">Add This Credit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(null, { addCredit })(CreditForm)) // connects addCredit action to CreditForm