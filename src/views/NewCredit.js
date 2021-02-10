import React, { Component } from 'react'; // grab ability to use react and class components
import { connect } from 'react-redux'; // Gain access to global state
import CreditForm from '../containers/credits/CreditForm'; // grab form component

class NewCredit extends Component {

    render() {

        // Choose correct playbill for the route and put into variable for passing down as prop
        const selectplaybill = this.props.playbills.find(pb => pb.id === parseInt(this.props.match.params.playbillId))

        return (
            <div>
                <h1>Add New Credit</h1>
                <CreditForm playbillId={selectplaybill.id}/>
            </div>
        );
    }
}

const mapStateToProps = state => { // make global state availab le as the following props:
    return {
      playbills: state.playbillReducer.playbills,
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps)(NewCredit);