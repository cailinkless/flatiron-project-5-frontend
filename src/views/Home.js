import React from 'react'
// Get new playbill form
import PlaybillForm from '../containers/PlaybillForm';
//get playbills index
import PlaybillsIndex from '../containers/PlaybillsIndex';
import {Link} from 'react-router-dom';

// Presentational Component for Displaying Logo
const Home = () => 

    <div>
        <PlaybillsIndex />
        <hr/>
        <h2><Link to="/newplaybill">Start New Playbill</Link></h2>
        <hr/>
    </div>

export default Home;