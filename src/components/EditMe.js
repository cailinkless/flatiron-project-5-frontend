import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EditMe extends Component {

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