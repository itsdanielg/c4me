import React, { useEffect } from 'react'
import Logo from '../logo';
import {Link} from 'react-router-dom';
import '../../css/administrator.css';

function Administrator() {

    const scrapeData = () => {
        console.log("Scraping Data... (No Actual GET Request)");
    }

    const displayAcceptances = () => {
        console.log("Displaying Acceptances... (No Actual GET Request)");
    }

    const reactivateProfiles = () => {
        console.log("Reactivating Profiles... (No Actual POST Request)");
    }

    const deleteProfiles = () => {
        console.log("Deleting Profiles... (No Actual POST Request)");
    }

    const uploadCSV = () => {
        console.log("Uploading CSV... (No Actual POST Request)");
    }
    
    const submitDecision = () => {
        console.log("Submitting Decision... (No Actual POST Request)");
    }

    useEffect(() => {
        // Change text color if Questionable or Not Questionable
        let table = document.getElementsByClassName("questionableTable")[0];
        for (let i = 1; i < table.childNodes.length; i++) {
            let questionable = table.childNodes[i].childNodes[0].childNodes[2];
            if (questionable.innerHTML === "Questionable") {
                questionable.style.color = "#ff0000";
            }
        }
    })

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
            <div className='pageHeading'>
                <h1>Hackaholics Administrator Page</h1>
            </div>
            <div className='adminToggleContainer'>
                <div className='adminToggle'>
                    <button id="scrapeDataButton" onClick={scrapeData}>Scrape Data</button>
                    <p>Scrape data from CollegeData website.</p>
                </div>
                <div className="adminToggle">
                    <button id="displayQuestionableAcceptancesButton" onClick={displayAcceptances}>Display
                        Questionable Acceptances</button>
                    <p>Display all student questionable acceptances in the table
                        below.</p>
                </div>
                <div className="adminToggle">
                    <button id="reactivateStudentProfile" onClick={reactivateProfiles}>Reactivate Student Profiles</button>
                    <p>Reactivate all student profiles in the database.</p>
                </div>
                <div className="adminToggle">
                    <button id="deleteProfilesButton" onClick={deleteProfiles}>Delete Student Profiles</button>
                    <p>Delete all student profiles in the database.</p>
                </div>
            </div>
            <div className="sectionContainer">
                <h1>Read CSV File</h1>
                <br/>
                <div className="fieldContainer" id="fileFieldContainer">
                    <form id="getFile" encType="multipart/form-data">
                        <div className="firstFile">
                            STUDENTS <input type="file" name="studentFile"/>
                        </div>
                        <div className="secondFile">
                            APPLICATIONS <input type="file" name="applicationFile"/>
                        </div>
                    </form>
                </div>
                <div className="updateButtonContainer">
                    <button className='updateButton' id="uploadCSVButton" onClick={uploadCSV}>Upload</button>
                </div>
            </div>
            <div className="sectionContainer">
                <h1>Review Student Acceptance</h1>
                <br/>
                <div className="fieldContainer">
                    <label>Enter Student Username:</label> <input className="editField"
                        id="studentUsername" type="text" />
                </div>
                <div className="fieldContainer">
                    <label>Enter College:</label> <input id="collegeEntered"
                        list="selectedCollege" type="text" name="college" />
                    <datalist id="selectedCollege"></datalist>
                </div>
                <div className="fieldContainer">
                    <label>Mark as Questionable?</label>
                    <div className="acceptanceRBContainer">
                        <div className="acceptanceRB">
                            <input id="questionableStatus" type="radio"
                                className="updateAcceptanceRBA" name="updateAcceptanceRBA"
                                value="TRUE"/> <label>Questionable</label>
                        </div>
                        <div className="acceptanceRB">
                            <input id="questionableStatus" type="radio"
                                className="updateAcceptanceRBA" name="updateAcceptanceRBA"
                                value="FALSE"/> <label>Not Questionable</label>
                        </div>
                    </div>
                </div>
                <div className="updateButtonContainer">
                    <button className='updateButton' id="submitReviewButton" onClick={submitDecision}>Submit
                        Review Decision</button>
                </div>
            </div>
            <div className='sectionContainer'>
                <table className='questionableTable'>
                    <thead>
                        <tr>
                            <th>Student Username</th>
                            <th>College</th>
                            <th>Questionable Acceptance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Alexander Lee</td>
                            <td>Stony Brook University</td>
                            <td>Questionable</td>
                        </tr>
                    </tbody>    
                    <tbody>
                        <tr>
                            <td>John Smith</td>
                            <td>Binghamton University</td>
                            <td>Not Questionable</td>
                        </tr>
                    </tbody>    
                    <tbody>
                        <tr>
                            <td>Ryan Taylor</td>
                            <td>New York University</td>
                            <td>Not Questionable</td>
                        </tr>
                    </tbody>   
                </table>
            </div>
        </div>
    );

}

export default Administrator;