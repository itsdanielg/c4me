import React from 'react'
import Logo from '../logo';
import {Link} from 'react-router-dom';
import '../../css/home.css';

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
                    <p>View and edit current profile information and statistics.</p>
                </div>
                <div className="toggle">
                    <Link to='/collegesearch'>
                        <button>Search for Colleges / College Recommender</button>
                    </Link>
                    <p>Search for colleges and view your recommendation score for each college listed.</p>
                </div>
                <div className="toggle">
                    <Link to='/highschools'>
                        <button>Find Similar High Schools</button>
                    </Link>
                    <p>Find similar high schools to a high school entered.</p>
                </div>
                <div className="toggle">
                    <Link to='/apptracker'>
                        <button>Application Tracker</button>
                    </Link>
                    <p>View students who applied to similar colleges.</p>
                </div>
            </div>
        </div>
    );

}

export default Home;