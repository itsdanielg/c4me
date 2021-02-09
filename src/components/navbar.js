import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {

    // const disableButtons = () => {
    //     var url = window.location.pathname;
    //     $('#navProfile').attr("disabled", false);
    //     $('#navCollege').attr("disabled", false);
    //     $('#navHS').attr("disabled", false);
    //     $('#navTracker').attr("disabled", false);
    //     if (url == "/c4me/jsp/profile.jsp") {
    //         $('#navProfile').attr("disabled", true);
    //     } else if (url == "/c4me/jsp/collegesearch.jsp") {
    //         $('#navCollege').attr("disabled", true);
    //     } else if (url == "/c4me/jsp/highschools.jsp") {
    //         $('#navHS').attr("disabled", true);
    //     } else if (url == "/c4me/jsp/apptracker.jsp") {
    //         $('#navTracker').attr("disabled", true);
    //     }
    // }

    return(
        <div className="navDiv">
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
        </div>
    );
}

export default NavBar;