import React from 'react'

const TopLogo = () =>  // Presentational Component for Displaying Logo

    <header>
        <div className="content-wrapper">
            <div className="logo-wrapper">
                <a href="/">
                    <h1 id="logo-line1">Paperless <i className="fas fa-seedling"></i> Playhouse</h1>
                    <h1 id="logo-line2"><span className="green-grad">Clean.</span>Green.<span class="rainbow-grad">Beautiful.</span></h1>
                </a>
            </div>
        </div>
    </header>
export default TopLogo;