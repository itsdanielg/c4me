import React from 'react';
import Logo from '../logo';
import NavBar from '../navbar';
import './apptracker.css';

function AppTracker() {

    return(
        <div className='appTrackerPage' id='AppBody'>
            <div className='headerContainer'>
                <Logo/>
                <NavBar/>
            </div>
            <div className='pageHeading'>
                <h1>Application Tracker</h1>
            </div>
            <div className='sectionContainer'>
                <div className='searchBar'>
                    <input type="text" name="collegetrackerSearch" placeholder="Enter College"/>
                    <button className='searchButton'>Search</button>
                </div>
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>College Class</h1>
                <input type="text" name="collegeClassApp"/>
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>High School</h1>
                <input type="text" name="highSchoolApp"/>
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>Application Status</h1>
                <input type="text" name="statusApp"/>
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>Average SAT Math</h1>
                <input type="text" name="SATMathApp"/>
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>Average SAT EBRW</h1>
                <input type="text" name="SATEBRWApp"/>
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>Average ACT Composite</h1>
                <input type="text" name="ACTApp"/>
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>Average GPA</h1>
                <input type="text" name="GPAApp"/>
            </div>
            <div className='sectionContainer'>
                <h1>Statistics of Students who applied to Stony Brook University</h1>
                <table className='appTrackerTable'>
                    <tr>
                        <th>Name</th>
                        <th>High School</th>
                        <th>Application Status</th>
                        <th>Expected Graduation</th>
                        <th>AVG SAT Math</th>
                        <th>AVG SAT EBRW</th>
                        <th>AVG ACT</th>
                        <th>AVG GPA</th>
                    </tr>
                    <tr>
                        <td>Alexander Lee</td>
                        <td>Bronx High School of Science</td>
                        <td>Accepted</td>
                        <td>2019</td>
                        <td>790</td>
                        <td>700</td>
                        <td>19</td>
                        <td>3.8</td>
                    </tr>
                    <tr>
                        <td>John Smith</td>
                        <td>Brooklyn Technical High School</td>
                        <td>Accepted</td>
                        <td>2018</td>
                        <td>780</td>
                        <td>720</td>
                        <td>20</td>
                        <td>3.7</td>
                    </tr>
                    <tr>
                        <td>Ryan Taylor</td>
                        <td>Francis Lewis High School</td>
                        <td>Rejected</td>
                        <td>2017</td>
                        <td>620</td>
                        <td>560</td>
                        <td>17</td>
                        <td>3.1</td>
                    </tr>
                </table>
            </div>
            <div className='sectionContainer'>
                <div className='displayScatterContainer'>
                    <button>Display by Scatterplot</button>
                </div>
            </div>
        </div>
    );
}

export default AppTracker;