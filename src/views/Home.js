import React from 'react'
// Get new playbill form
import PlaybillForm from '../containers/PlaybillForm';
//get playbills index
import PlaybillsIndex from '../containers/PlaybillsIndex';

// Presentational Component for Displaying Logo
const Home = () => 

    <div>
        <PlaybillsIndex />
        <hr/>
        <PlaybillForm />
        <hr/>
    </div>

export default Home;