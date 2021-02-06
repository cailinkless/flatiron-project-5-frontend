import React from 'react'
//get playbills index
import PlaybillsIndex from '../containers/playbills/PlaybillsIndex';
import {Link} from 'react-router-dom';

// Presentational Component for Displaying Logo
const Home = () => 

    <div>
        <PlaybillsIndex />
        <hr/>
        <h2><Link to="/playbills/new">Start New Playbill</Link></h2>
        <hr/>
    </div>

export default Home;