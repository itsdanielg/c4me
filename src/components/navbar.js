import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return(
        <ul className='navBar'>
            <Link to='/home'>
                <button className='navButton'>Home</button>
            </Link>
            <Link to='/profile'>
                <button className='navButton'>Profile</button>
            </Link>
            <Link to='/collegesearch'>
                <button className='navButton'>College Search</button>
            </Link>
            <Link to='/highschools'>
                <button className='navButton'>High Schools</button>
            </Link>
            <Link to='/apptracker'>
                <button className='navButton'>App Tracker</button>
            </Link>
            <Link to='/'>
                <button className='navButton'>Sign Out</button>
            </Link>
        </ul>
    );
}

export default NavBar;