import React, { Component } from 'react';
import { updateCredit, deleteCredit } from '../../actions/credits';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class CreditEditForm extends Component {

    state={
        credit: this.props.selectedCredit,
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

        if (this.state.credit.cast === "true") {
            this.setState({...this.state,
                credit: {
                    ...this.state.credit,
                    cast: true
                }
            })
        }

        const credit = {...this.state.credit}
        console.log(credit)
        this.props.updateCredit(credit)
        this.props.history.push('/')
    }

    handleDelete = (e) => {
        this.props.deleteCredit(e.target.id, this.state.credit.playbill_id);
        this.props.history.push(`/`);
    }

render() {
        return (
            <div>
                <h2>Cast / Crew Member Details:</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name:</label>
                    <input name="name" type="text" value={this.state.credit.name} onChange={this.handleOnChange}/>

                    <label>Category:</label>
                    <input name="cast" type="radio" value="true" onChange={this.handleOnChange}></input>
                    <label for="cast">Cast</label>
                    <input name="cast" type="radio" value="false" onChange={this.handleOnChange}></input>
                    <label for="cast">Crew (includes writer, director, etc...)</label>

                    <label>Role:</label>
                    <input name="role" type="text" value={this.state.credit.role} onChange={this.handleOnChange}/>
                    
                    <label>Bio:</label>
                    <input name="bio" type="textarea" value={this.state.credit.bio} onChange={this.handleOnChange}/>
                    
                    <button type="submit">Update This Credit</button>
                </form>
                <button id={this.state.credit.id} onClick={this.handleDelete}>Delete Credit</button>
            </div>
        )
    }
}

export default withRouter(connect(null, { updateCredit, deleteCredit })(CreditEditForm))