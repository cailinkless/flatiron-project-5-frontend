import React, { Component } from 'react'; // grab ability to use react and component classes
import { updateCredit } from '../../actions/credits'; // grab relevant credit actions
import { connect } from 'react-redux'; // gain access to global state
import { withRouter } from 'react-router-dom'; // ensure access to history

class CreditEditForm extends Component {

    state={
        credit: this.props.credits.find(c => c.id === this.props.creditId),
        c_loading: false
    }

    // Keep form fields up to date with user's input
    handleOnChange = e => {
        this.setState({...this.state, 
            credit: {
                ...this.state.credit,
                [e.target.name]: e.target.value
            }
        })
    }

    // Send changed info to the database & global state
    handleOnSubmit = e => {
        e.preventDefault() // stops submit from trying to handle itself

        // Change Radio Input from string value to boolean
        if (this.state.credit.cast === "true") {
            this.setState({...this.state,
                credit: {
                    ...this.state.credit,
                    cast: true
                }
            })
        }

        const credit = {...this.state.credit} // grabs updated credit from local state
        this.props.updateCredit(credit)  // sends updates to database
        this.props.history.push(`/credits/${this.state.credit.id}`)
    }

render() {
        return (
            <div>
                <h2>Credit Details:</h2>
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
                    <button type="submit">Update Credit</button>
                </form>
                <br/>
            </div>
        )
    }
}

const mapStateToProps = state => { // make global state info available as the following props:
    return {
      credits: state.creditReducer.credits,
      c_loading: state.creditReducer.loading
    }
}

export default withRouter(connect(mapStateToProps, { updateCredit })(CreditEditForm))