import React, { Component } from 'react'; // grab ability to use react and class components
import {Link} from 'react-router-dom'; // grab ability to use Link

class PreviewMe extends Component {

    // Flip to Edit View
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