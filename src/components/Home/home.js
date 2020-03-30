import React from 'react'
import Logo from '../logo';
import {Link} from 'react-router-dom';
import './home.css';

function Home() {

    return(
        <div className='homePage' id='AppBody'>
            <div className='headerContainer'>
                <Logo/>
                <div className='signout'>
                    <Link to='/'>
                        <button>Sign Out</button>
                    </Link>
                </div>
            </div>
            <div>
                <h1 className='welcomeMessage'>Welcome back Daniel!</h1>
            </div>
            <div className='toggleContainer'>
                <div className='toggle'>
                    <Link to='/profile'>
                        <button>View / Edit Profile</button>
                    </Link>
                    <p>(Description of View/Edit Profile)</p>
                </div>
                <div className="toggle">
                    <Link to='/collegesearch'>
                        <button>Search for Colleges / College Recommender</button>
                    </Link>
                    <p>(Description of Search for Colleges/College Recommender)</p>
                </div>
                <div className="toggle">
                    <Link to='/highschools'>
                        <button>Find Similar High Schools</button>
                    </Link>
                    <p>(Description of Find Similar High Schools)</p>
                </div>
                <div className="toggle">
                    <Link to='/apptracker'>
                        <button>Application Tracker</button>
                    </Link>
                    <p>(Description of Application Tracker)</p>
                </div>
            </div>
        </div>
    );

}

export default Home;