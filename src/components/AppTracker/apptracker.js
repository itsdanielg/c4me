import React from 'react';
import Logo from '../logo';
import NavBar from '../navbar';
import colleges from '../../text/colleges.json';
import highschools from '../../text/highschools.json';
import sat from '../../text/sat.json';
import act from '../../text/act.json';
import '../../css/apptracker.css';

function AppTracker() {

    const searchApplications = () => {
        console.log("Searching Applications... (No Actual POST Request)");
    }

    const displayByScatterplot = () => {
        console.log("Displaying by Scatterplot... (No Actual POST Request)");
    }

    return(
        <div className='appTrackerPage' id='AppBody'>
            <div className='headerContainer'>
                <Logo/>
                <NavBar/>
            </div>
            <div className='pageHeading'>
                <h1>Application Tracker</h1>
            </div>
            <div className='sectionContainer' id="appContainer">
                <h1>College</h1>
                <input id="collegeField" list="selectedCollege" type="text" name="college" placeholder="Enter College" />
                <datalist id="selectedCollege" name="col">
                    {colleges.map((college) => {
                        return (
                            <option key={college} value={college}>{college}</option> 
                        )
                    })}
                </datalist>
            </div>
            <p id="min" hidden>2016</p>
			<p id="max" hidden>2020</p>
            <div className='sectionContainer' id='appContainer'>
                <h1>College Class</h1>
                {/* <div className="editButton" id="editClassButton">
                    <img src={editButton} alt="Edit Field Button"></img>
                </div> */}
                    <select id="classFrom">
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                    </select>
                    
                    <select id="classTo">
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                    </select>
                        
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>Application Status</h1>
                <select id="applicationStatus" multiple="multiple">
                    <option value="accepted">ACCEPTED</option>
                    <option value="denied">DENIED</option>
                    <option value="waitlist">WAITLISTED</option>
                    <option value="pending">PENDING</option>
                    <option value="deferred">DEFERRED</option>
                    <option value="withdrawn">WITHDRAWN</option>
                </select>
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>High School</h1>
                <select id="selectedHS" name="hs" multiple="multiple">
                    {highschools.map((highschool) => {
                        return (
                            <option key={highschool} value={highschool}>{highschool}</option> 
                        )
                    })}
                </select>
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>SAT Math</h1>
                {/* <div className="editButton" id="editSATButton" onclick="editSATMath()">
                    <img src={editButton} alt="Edit Field Button"></img>
                </div> */}
                <input className="satField" id="satMathMin" type="text" placeholder="Enter SAT Math Minimum" list="possibleSATScores"/>
                <datalist id="possibleSATScores">
                    {sat.map((score) => {
                        return (
                            <option key={`${score}-1`} value={score}>{score}</option> 
                        )
                    })}
                </datalist>
                <input className="satField" id="satMathMax" type="text" placeholder="Enter SAT Math Maximum" list="possibleSATScores"/>
                <datalist id="possibleSATScores">
                    {sat.map((score) => {
                        return (
                            <option key={`${score}-2`} value={score}>{score}</option> 
                        )
                    })}
                </datalist>
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>SAT EBRW</h1>
                {/* <div className="editButton" id="editSATButton" onclick="editEbrw()">
                    <img src={editButton} alt="Edit Field Button"></img>
                </div> */}
                <input className="satField" id="ebrwMin" type="text" placeholder="Enter SAT EBRW Minimum" list="possibleSATScores"/>
                <datalist id="possibleSATScores">
                    {sat.map((score) => {
                        return (
                            <option key={`${score}-3`} value={score}>{score}</option> 
                        )
                    })}
                </datalist>
                <input className="satField" id="ebrwMax" type="text" placeholder="Enter SAT EBRW Maximum" list="possibleSATScores"/>
                <datalist id="possibleSATScores">
                    {sat.map((score) => {
                        return (
                            <option key={`${score}-4`} value={score}>{score}</option> 
                        )
                    })}
                </datalist>
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>ACT Composite</h1>
                {/* <div className="editButton" id="editSATButton" onclick="editACT()">
                    <img src={editButton} alt="Edit Field Button"></img>
                </div> */}
                <input className="actField" id="actMin" type="text" placeholder="Enter ACT Composite Minimum" list="possibleACTScores"/>
                <datalist id="possibleACTScores">
                    {act.map((score) => {
                        return (
                            <option key={`${score}-1`} value={score}>{score}</option> 
                        )
                    })}
                </datalist>
                <input className="actField" id="actMax" type="text" placeholder="Enter ACT Composite Maximum" list="possibleACTScores"/>
                <datalist id="possibleACTScores">
                    {act.map((score) => {
                        return (
                            <option key={`${score}-2`} value={score}>{score}</option> 
                        )
                    })}
                </datalist>
            </div>
            <div className='sectionContainer' id='appContainer'>
                <h1>Filter Type</h1>
                <input type="radio" name="filterType" id="strict" value="strict"/>
                <label htmlFor="lax">Strict</label>
                <input type="radio" name="filterType" id="lax" value="lax"/>
                <label htmlFor="lax">Lax</label>
            </div>
            <div className="submit">
                <button id="submit" onClick={searchApplications}>Submit</button>
            </div>
            <div className='sectionContainer'>
                <h1>Statistics of Students who applied to Stony Brook University</h1>
                <table className='appTrackerTable'>
                    <thead>
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
                    </thead>
                    <tbody>
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
                    </tbody>    
                    <tbody>
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
                    </tbody>    
                    <tbody>
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
                    </tbody>    
                </table>
            </div>
            <div className='sectionContainer'>
                <div className='displayScatterContainer'>
                    <button onClick={displayByScatterplot}>Display by Scatterplot</button>
                </div>
            </div>
        </div>
    );
}

export default AppTracker;