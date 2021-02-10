import React, { Component } from 'react'; // grab ability to use react and component classes
import {Link} from 'react-router-dom'; // grab ability to link

class EditMe extends Component {

    // Flip to Show View
    render() {
        return (    
        <div className="EditMe" style={{color: "black"}}>
            <p>I'm a preview of your digital playbill! <Link to={"/playbills/" + this.props.playbillId + "/edit"}>Edit Me Here!</Link></p>
            <hr/>
        </div>
        )
    }
}

export default EditMe;