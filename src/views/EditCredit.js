import React, { Component } from 'react' // grab access to react and class components
import { connect } from 'react-redux'; // gain access to global state
import CreditEditForm from '../containers/credits/CreditEditForm'; // grab form component

class EditCredit extends Component {

    render() {

        // Create variable to pass in tonedit form
        const selectcredit = this.props.credits.find(c => c.id === parseInt(this.props.match.params.creditId))

        return (
            <div>
                <CreditEditForm selectedCredit={selectcredit}/>
            </div>
        );
    }
}

const mapStateToProps = state => { // make global state info available as the following props:
    return {
      playbills: state.playbillReducer.playbills,
      credits: [...state.playbillReducer.playbills.map(pb => pb.credits).flat()],
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps)(EditCredit);