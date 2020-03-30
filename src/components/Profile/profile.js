import React from 'react';
import Logo from '../logo';
import NavBar from '../navbar';
import './profile.css';

function Profile() {

    return(
        <div className='profilePage' id='AppBody'>
            <div className='headerContainer'>
                <Logo/>
                <NavBar/>
            </div>
            <div className='pageHeading'>
                <h1>View / Edit Profile</h1>
            </div>
            <div className='sectionContainer'>
                <h1>Edit Password</h1>
                <div className='fieldContainer'>
                    <input type="text" name="oldPassword"/>
                    <label>Old Password</label>
                </div>
                <div className='fieldContainer'>
                    <input type="text" name="newPassword"/>
                    <label>New Password</label>
                </div>
                <div className='fieldContainer'>
                    <input type="text" name="confirmPassword"/>
                    <label>Confirm New Password</label>
                </div>
                <button className='updateButton'>Update</button>
            </div>
            <div className='sectionContainer' id='currentContainer'>
                <h1>Current High School</h1>
                <div className='updateContainer'>
                    <h2>Bronx High School of Science</h2>
                    <div className='updateField'>
                        <input type="text" name="newHighschool"/>
                        <button className='updateButton'>Update</button>
                    </div>
                </div>
            </div>
            <div className='sectionContainer' id='currentContainer'>
                <h1>Current GPA</h1>
                <div className='updateContainer' id='gpaUpdate'>
                    <h2>3.6</h2>
                    <div className='updateField'>
                        <input type="text" name="newGPA"/>
                        <button className='updateButton'>Update</button>
                    </div>
                </div>
            </div>
            <div className='sectionContainer' id='currentContainer'>
                <h1>Current SAT MATH Score</h1>
                <div className='updateContainer' id='testUpdate'>
                    <h2>690</h2>
                    <div className='updateField'>
                        <input type="text" name="newSATMath"/>
                        <button className='updateButton'>Update</button>
                    </div>
                </div>
            </div>
            <div className='sectionContainer' id='currentContainer'>
                <h1>Current SAT EBRW Score</h1>
                <div className='updateContainer' id='testUpdate'>
                    <h2>720</h2>
                    <div className='updateField'>
                        <input type="text" name="newSATEBRW"/>
                        <button className='updateButton'>Update</button>
                    </div>
                </div>
            </div>
            <div className='sectionContainer' id='currentContainer'>
                <h1>Current ACT Score</h1>
                <div className='updateContainer' id='testUpdate'>
                    <h2>33</h2>
                    <div className='updateField'>
                        <input type="text" name="newACT"/>
                        <button className='updateButton'>Update</button>
                    </div>
                </div>
            </div>
            <div className='sectionContainer'>
                <h1>Update Acceptance Decision</h1>
                <div className='fieldContainer' id='acceptanceContainer'>
                    <input id='acceptanceCollegeInput' type="text" name="college"/>
                    <input id="updateAcceptanceRB"
                        type="radio"
                        name="accepted"
                        value="option1"
                        checked={true}
                        />
                    <label>Accepted</label>
                    <input id="updateAcceptanceRB"
                        type="radio"
                        name="rejected"
                        value="option2"
                    />
                    <label>Rejected</label>
                    <input id="updateAcceptanceRB"
                        type="radio"
                        name="waitlisted"
                        value="option3"
                    />
                    <label>Waitlisted</label>
                    <button className='updateButton'>Enter</button>
                </div>
            </div>
            <div className='sectionContainer'>
                <table className='acceptanceTable'>
                    <tr>
                        <th>College</th>
                        <th>Acceptance Status</th>
                        <th>Questionable Decision?</th>
                    </tr>
                    <tr>
                        <td>Stony Brook University</td>
                        <td>Accepted</td>
                        <td>Valid</td>
                    </tr>
                    <tr>
                        <td>Binghamton University</td>
                        <td>Pending</td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td>New York University</td>
                        <td>Accepted</td>
                        <td>Invalid</td>
                    </tr>
                </table>
            </div>
        </div>
    );

}

export default Profile;