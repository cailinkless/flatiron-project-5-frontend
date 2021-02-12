import React, { Component } from 'react' // grab ability to use react and class components
import { connect } from 'react-redux'; // gain access to global state
import PlaybillTemplate from '../components/PlaybillTemplate'; // grab display component
import EditMe from '../components/EditMe'; // grab edit link component

class ShowPlaybill extends Component {

    render() {

        // Grab the correct playbill for the route to pass down to components
        const selectplaybill = this.props.playbills.find(pb => pb.id === parseInt(this.props.match.params.playbillId))

        return (
            <div>
                <EditMe playbillId={selectplaybill.id}/>
                <PlaybillTemplate playbill={selectplaybill}/>
            </div>
        );
    }
}

const mapStateToProps = state => { // make global state available as the following props:
    debugger
    return {
      playbills: state.playbillReducer.playbills,
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps)(ShowPlaybill);