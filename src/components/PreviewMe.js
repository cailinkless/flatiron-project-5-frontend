import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PreviewMe extends Component {

    render() {
        return (    
        <div className="EditMe" style={{color: "black"}}>
            <p>I'm your digital playbill! <Link to={"/playbills/" + this.props.playbillId}>Preview Me Here!</Link></p>
            <hr/>
        </div>
        )
    }
}

export default PreviewMe;