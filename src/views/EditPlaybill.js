import React, { Component } from 'react' // grab ability to use react and class components
import { connect } from 'react-redux'; // gain access to global state
import {Link} from 'react-router-dom'; // grab ability to use Link
import PlaybillEditForm from '../containers/playbills/PlaybillEditForm' // grab form component
import CreditsIndex from '../containers/credits/CreditsIndex' // grab display component
import PreviewMe from '../components/PreviewMe'; // grab preview link component

class EditPlaybill extends Component {

    render() {

        // Grab the correct playbill for the route to pass down to components
        const selectplaybill = this.props.playbills.find(pb => pb.id === parseInt(this.props.match.params.playbillId))

        return (
            <div>
                <PreviewMe playbillId={selectplaybill.id}/>
                <PlaybillEditForm selectedPlaybill={selectplaybill}/>
                <br/><br/>
                <Link to={"/playbills/" + selectplaybill.id + "/credits/new"}>Add New Credit</Link>
                <CreditsIndex playbillId={selectplaybill.id}/>
            </div>
        );
    }
}

const mapStateToProps = state => { // make global state available as the following props:
    return {
      playbills: state.playbillReducer.playbills,
      loading: state.playbillReducer.loading
    }
}
  
export default connect(mapStateToProps)(EditPlaybill);