import React, { useEffect } from 'react';
import Logo from '../logo';
import NavBar from '../navbar';
import editButton from '../../images/editbutton.png';
import states from '../../text/states.json';
import highschools from '../../text/highschools.json';
import colleges from '../../text/colleges.json';
import majors from '../../text/majors.json';
import sat from '../../text/sat.json';
import act from '../../text/act.json';
import '../../css/profile.css';

function Profile() {

    const updateStyles = () => {
        // Change to red text if "N/A" text is shown
        var currentLabels = document.getElementsByClassName("currentLabel");
        for (var i = 0; i < currentLabels.length; i++) {
            if (currentLabels[i].innerHTML === "" || currentLabels[i].innerHTML === "null" || currentLabels[i].innerHTML === "Not Yet Entered") {
                currentLabels[i].innerHTML = "Not Yet Entered";
                currentLabels[i].style.color = "red";
            }
        }
        // Change text color if Questionable or Not Questionable
        let table = document.getElementsByClassName("acceptanceTable")[0];
        for (let i = 1; i < table.childNodes.length; i++) {
            let accepted = table.childNodes[i].childNodes[0].childNodes[1];
            if (accepted.innerHTML === "ACCEPTED") {
                accepted.style.color = "#00ff0d";
            }
            else if (accepted.innerHTML === "DENIED") {
                accepted.style.color = "#ff0000";
            }
            let questionable = table.childNodes[i].childNodes[0].childNodes[2];
            if (questionable.innerHTML === "Questionable") {
                questionable.style.color = "#ec9a00";
            }
        }
    }

    useEffect(() => {
        updateStyles();
        let updateButtons = document.getElementsByClassName("updateButton");
        for (let i = 0; i < updateButtons.length; i++) {
            updateButtons[i].disabled = true;
            updateButtons[i].addEventListener("click", () => {
                console.log("Updating Information... (No Actual POST Request)");
            })
        }
        let cancelButtons = document.getElementsByClassName("cancelButton");
        for (let i = 0; i < cancelButtons.length; i++) {
            cancelButtons[i].style.display = "none";
            cancelButtons[i].addEventListener("click", () => {
                updateButtons[i].disabled = true;
                cancelButtons[i].style.display = "none";
                let fieldContainers = updateButtons[i].parentElement.parentElement.getElementsByClassName("fieldContainer");
                for (let j = 0; j < fieldContainers.length; j++) {
                    try {
                        fieldContainers[j].getElementsByClassName("editField")[0].style.display = "none";
                        fieldContainers[j].getElementsByClassName("editField")[1].style.display = "none";
                    } catch(e) {}
                }
            })
        }
        let editButtons = document.getElementsByClassName("editButton");
        for (let i = 0; i < editButtons.length; i++) {
            let editButton = editButtons[i];
            let updateButtonContainer = editButton.parentElement.parentElement.getElementsByClassName("updateButtonContainer");
            let field = editButton.id.slice(0, -6);
            field += "Field";
            document.getElementById(field).style.display = "none";
            if (editButton.id === "editPassButton") {
                document.getElementById("editConfirmField").style.display = "none";
            }
            editButton.addEventListener("click", () => {
                document.getElementById(field).style.display = "block";
                if (editButton.id === "editPassButton") {
                    document.getElementById("editConfirmField").style.display = "block";
                }
                updateButtonContainer[0].childNodes[0].disabled = false;
                updateButtonContainer[0].childNodes[1].style.display = "block";
            })
        }
        document.getElementById("collegeField").addEventListener("change", () => {
            if (document.getElementById("collegeField").value === "") {
                document.getElementById("updateCollegeDecisionButton").disabled = true;
            }
            else {
                document.getElementById("updateCollegeDecisionButton").disabled = false;
            }
        })
        return () => {
            for (let i = 0; i < updateButtons.length; i++) {
                updateButtons[i].removeEventListener("click", () => {
                    console.log("Updating Information... (No Actual POST Request)");
                })
            }
            for (let i = 0; i < cancelButtons.length; i++) {
                cancelButtons[i].removeEventListener("click", () => {
                    updateButtons[i].disabled = true;
                    cancelButtons[i].style.display = "none";
                    let fieldContainers = updateButtons[i].parentElement.parentElement.getElementsByClassName("fieldContainer");
                    for (let j = 0; j < fieldContainers.length; j++) {
                        try {
                            fieldContainers[j].getElementsByClassName("editField")[0].style.display = "none";
                            fieldContainers[j].getElementsByClassName("editField")[1].style.display = "none";
                        } catch(e) {}
                    }
                })
            }
            for (let i = 0; i < editButtons.length; i++) {
                let editButton = editButtons[i];
                let updateButtonContainer = editButton.parentElement.parentElement.getElementsByClassName("updateButtonContainer");
                let field = editButton.id.slice(0, -6);
                field += "Field";
                editButton.removeEventListener("click", () => {
                    document.getElementById(field).style.display = "block";
                    if (editButton.id === "editPassButton") {
                        document.getElementById("editConfirmField").style.display = "block";
                    }
                    updateButtonContainer[0].childNodes[0].disabled = false;
                    updateButtonContainer[0].childNodes[1].style.display = "block";
                })
            }
            document.getElementById("collegeField").removeEventListener("change", () => {
                if (document.getElementById("collegeField").value === "") {
                    document.getElementById("updateCollegeDecisionButton").disabled = true;
                }
                else {
                    document.getElementById("updateCollegeDecisionButton").disabled = false;
                }
            })
        }
    },[])

    return(
        <div className='profilePage' id='AppBody'>
            <div className='headerContainer'>
                <Logo/>
                <NavBar/>
            </div>
            <div className='pageHeading'>
                <h1>View / Edit Profile</h1>
            </div>
            {/* Profile Information */}
            <div className='sectionContainer' id="profileSectionContainer">
                <h1>Profile Information</h1>
                <br/>
                <div className='fieldContainer'>
                    <label>First Name:</label>
                    <p className="currentLabel" id="firstNameLabel">Daniel</p>
                    <div className="editButton" id="editFnameButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editFnameField" type="text" placeholder="Edit First Name"/>
                </div>
                <div className='fieldContainer'>
                    <label>Last Name:</label>
                    <p className="currentLabel" id="lastNameLabel">Garcia</p>
                    <div className="editButton" id="editLnameButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editLnameField" type="text" placeholder="Edit Last Name"/>
                </div>
                <div className="fieldContainer">
                    <label>Password:</label>
                    <p className="currentLabel">********</p>
                    <div className="editButton" id="editPassButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <div className='confirmPassFields'>
                        <input className="editField" id="editPassField" type="password" placeholder="Edit Password"/>
                        <input className="editField" id="editConfirmField" type="password" placeholder="Confirm Password"/>
                    </div>
                </div>
                <div className="fieldContainer">
                    <label>Residence State:</label>
                    <p className="currentLabel" id="residenceStateLabel">NY</p>
                    <div className="editButton" id="editResidenceButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editResidenceField" type="text" placeholder="Edit Residence State" list="currentResidenceState"/>
                    <datalist id="currentResidenceState">
                        {states.map((state) => {
                            return (
                                <option key={state.name} value={state.abbreviation}>{state.name}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="updateButtonContainer">
                    <button className='updateButton' id="updateInfoButton">Update</button>
                    <button className='cancelButton' id="cancelInfoButton">Cancel</button>
                </div>
            </div>
            {/* High School Information */}
            <div className="sectionContainer" id="highschoolSectionContainer">
                <h1>High School</h1>
                <br/>
                <div className="fieldContainer">
                    <label>High School Name:</label>
                    <p className="currentLabel">High School of American Studies at Lehman College</p>
                    <div className="editButton" id="editHSNameButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editHSNameField" type="text" placeholder="Update High School" list="selectedHS"/>
                    <datalist id="selectedHS">
                        {highschools.map((highschool) => {
                            return (
                                <option key={highschool} value={highschool}>{highschool}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="updateButtonContainer">
                    <button className='updateButton' id="updateHSButton">Update</button>
                    <button className='cancelButton' id="cancelHSButton">Cancel</button>
                </div>
            </div>
            {/* College Class Information */}
            <div className="sectionContainer" id="collegeSectionContainer">
                <h1>College Class</h1>
                <br/>
                <div className="fieldContainer">
                    <label>Graduating Class:</label>
                    <p className="currentLabel" id="collegeClassLabel">2020</p>
                    <div className="editButton" id="editClassButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editClassField" type="text" placeholder="Update Graduating Class"/>
                </div>
                <div className="fieldContainer">
                    <label>Major #1:</label>
                    <p className="currentLabel" id="major1Label">COMPUTER SCIENCE</p>
                    <div className="editButton" id="editMajor1Button">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editMajor1Field" type="text" placeholder="Update Major #1" list="selectedMajor1"/>
                    <datalist id="selectedMajor1">
                        {majors.map((major) => {
                            return (
                                <option key={`${major}-1`} value={major}>{major}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>Major #2:</label>
                    <p className="currentLabel" id="major2Label">NONE</p>
                    <div className="editButton" id="editMajor2Button">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editMajor2Field" type="text" placeholder="Update Major #2" list="selectedMajor2"/>
                    <datalist id="selectedMajor2">
                        {majors.map((major) => {
                            return (
                                <option key={`${major}-2`} value={major}>{major}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="updateButtonContainer">
                    <button className='updateButton' id="updateCollegeButton">Update</button>
                    <button className='cancelButton' id="cancelCollegeButton">Cancel</button>
                </div>
            </div>
            {/* Current Statistics Information */}
            <div className="sectionContainer" id="statisticsSectionContainer">
                <div className="statisticsContainer">
                    <h1>Current Statistics</h1>
                </div>
                {/* HS Scores */}
                <div className="fieldContainer">
                    <label>GPA:</label>
                    <p className="currentLabel">3.2</p>
                    <div className="editButton" id="editGPAButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editGPAField" type="text" placeholder="Update GPA (Must be on a 4.0 scale)" />
                </div>
                <div className="fieldContainer">
                    <label>AP Tests Passed:</label>
                    <p className="currentLabel">6</p>
                    <div className="editButton" id="editAPButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editAPField" type="text" placeholder="Update AP Tests Passed" />
                </div>
                <br/>
                <br/>
                {/* SAT SCORES */}
                <h1>SAT Scores</h1>
                <br/>
                <div className="fieldContainer">
                    <label>SAT Math:</label>
                    <p className="currentLabel" id="satMathLabel">690</p>
                    <div className="editButton" id="editSATMathButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editSATMathField" type="text" placeholder="Update SAT Math" list="possibleSATScores"/>
                    <datalist id="possibleSATScores">
                        {sat.map((score) => {
                            return (
                                <option key={`${score}-1`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>SAT EBRW:</label>
                    <p className="currentLabel" id="satEBRWLabel">610</p>
                    <div className="editButton" id="editSATEBRWButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editSATEBRWField" type="text" placeholder="Update SAT EBRW" list="possibleSATScores"/>
                    <datalist id="possibleSATScores">
                        {sat.map((score) => {
                            return (
                                <option key={`${score}-2`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>SAT Test Overall:</label>
                    <p className="currentLabel" id="totalSATScore">1300</p>
                </div>
                <div className="fieldContainer">
                    <label>SAT II Literature:</label>
                    <p className="currentLabel">0</p>
                    <div className="editButton" id="editSATIILiteratureButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editSATIILiteratureField" type="text" placeholder="Update SAT II Literature" list="possibleSATScores"/>
                    <datalist id="possibleSATScores">
                        {sat.map((score) => {
                            return (
                                <option key={`${score}-3`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>SAT II US History:</label>
                    <p className="currentLabel">0</p>
                    <div className="editButton" id="editSATIIUSButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editSATIIUSField" type="text" placeholder="Update SAT II US History" list="possibleSATScores"/>
                    <datalist id="possibleSATScores">
                        {sat.map((score) => {
                            return (
                                <option key={`${score}-4`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>SAT II World History:</label>
                    <p className="currentLabel">0</p>
                    <div className="editButton" id="editSATIIWorldButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editSATIIWorldField" type="text" placeholder="Update SAT II World History" list="possibleSATScores"/>
                    <datalist id="possibleSATScores">
                        {sat.map((score) => {
                            return (
                                <option key={`${score}-5`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>SAT II Math I:</label>
                    <p className="currentLabel">0</p>
                    <div className="editButton" id="editSATIIMathIButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editSATIIMathIField" type="text" placeholder="Update SAT II Math I" list="possibleSATScores"/>
                    <datalist id="possibleSATScores">
                        {sat.map((score) => {
                            return (
                                <option key={`${score}-6`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>SAT II Math II:</label>
                    <p className="currentLabel">0</p>
                    <div className="editButton" id="editSATIIMathIIButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editSATIIMathIIField" type="text" placeholder="Update SAT II Math II" list="possibleSATScores"/>
                    <datalist id="possibleSATScores">
                        {sat.map((score) => {
                            return (
                                <option key={`${score}-7`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>SAT II Ecological Biology:</label>
                    <p className="currentLabel">0</p>
                    <div className="editButton" id="editSATIIBiologyEButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editSATIIBiologyEField" type="text" placeholder="Update SAT II Ecological Biology" list="possibleSATScores"/>
                    <datalist id="possibleSATScores">
                        {sat.map((score) => {
                            return (
                                <option key={`${score}-8`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>SAT II Molecular Biology:</label>
                    <p className="currentLabel">0</p>
                    <div className="editButton" id="editSATIIBiologyMButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editSATIIBiologyMField" type="text" placeholder="Update SAT II Molecular Biology" list="possibleSATScores"/>
                    <datalist id="possibleSATScores">
                        {sat.map((score) => {
                            return (
                                <option key={`${score}-9`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>SAT II Chemistry:</label>
                    <p className="currentLabel">0</p>
                    <div className="editButton" id="editSATIIChemistryButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editSATIIChemistryField" type="text" placeholder="Update SAT II Chemistry" list="possibleSATScores"/>
                    <datalist id="possibleSATScores">
                        {sat.map((score) => {
                            return (
                                <option key={`${score}-10`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>SAT II Physics:</label>
                    <p className="currentLabel">0</p>
                    <div className="editButton" id="editSATIIPhysicsButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editSATIIPhysicsField" type="text" placeholder="Update SAT II Physics" list="possibleSATScores"/>
                    <datalist id="possibleSATScores">
                        {sat.map((score) => {
                            return (
                                <option key={`${score}-11`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <br/>
                <br/>
                {/* ACT Scores */}
                <h1>ACT Scores</h1>
                <br/>
                <div className="fieldContainer">
                    <label>ACT Math:</label>
                    <p className="currentLabel" id="actMathLabel">29</p>
                    <div className="editButton" id="editACTMathButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editACTMathField" type="text" placeholder="Update ACT Math" list="possibleACTScores"/>
                    <datalist id="possibleACTScores">
                        {act.map((score) => {
                            return (
                                <option key={`${score}-1`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>ACT English:</label>
                    <p className="currentLabel" id="actEnglishLabel">27</p>
                    <div className="editButton" id="editACTEnglishButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editACTEnglishField" type="text" placeholder="Update ACT English" list="possibleACTScores"/>
                    <datalist id="possibleACTScores">
                        {act.map((score) => {
                            return (
                                <option key={`${score}-2`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>ACT Reading:</label>
                    <p className="currentLabel" id="actReadingLabel">27</p>
                    <div className="editButton" id="editACTReadingButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editACTReadingField" type="text" placeholder="Update ACT Reading" list="possibleACTScores"/>
                    <datalist id="possibleACTScores">
                        {act.map((score) => {
                            return (
                                <option key={`${score}-3`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>ACT Science:</label>
                    <p className="currentLabel" id="actScienceLabel">27</p>
                    <div className="editButton" id="editACTScienceButton">
                        <img src={editButton} alt="Edit Field Button"></img>
                    </div>
                    <input className="editField" id="editACTScienceField" type="text" placeholder="Update ACT Science" list="possibleACTScores"/>
                    <datalist id="possibleACTScores">
                        {act.map((score) => {
                            return (
                                <option key={`${score}-4`} value={score}>{score}</option> 
                            )
                        })}
                    </datalist>
                </div>
                <div className="fieldContainer">
                    <label>ACT Composite:</label>
                    <p className="currentLabel" id="totalACTScore">Not Yet Entered</p>
                </div>
                <br/>
                <br/>
                {/* Update Statistics Buttons */}
                <div className="updateButtonContainer">
                    <button className='updateButton' id="updateStatisticsButton">Update</button>
                    <button className='cancelButton' id="cancelStatisticsButton">Cancel</button>
                </div>
            </div>
            {/* Update Acceptance Decision */}
            <div className='sectionContainer'>
                <h1>Update Acceptance Decision</h1>
                <div className='fieldContainer' id='acceptanceContainer'>
                    <input id="collegeField" list="selectedCollege" type="text" name="college" placeholder="Enter College" />
                    <datalist id="selectedCollege" name="col">
                        {colleges.map((college) => {
                            return (
                                <option key={college} value={college}>{college}</option> 
                            )
                        })}
                    </datalist>
                    <div className="acceptanceRBContainer">
                        <div className="acceptanceRB">
                            <input id="appStatus" type="radio" className="updateAcceptanceRBA"
                                name="updateAcceptanceRBA" value="ACCEPTED"/>
                            <label>Accepted</label>
                        </div>
                        <div className="acceptanceRB">
                            <input id="appStatus" type="radio" className="updateAcceptanceRBA"
                                name="updateAcceptanceRBA" value="DENIED"/>
                            <label>Denied</label>
                        </div>
                        <div className="acceptanceRB">
                            <input id="appStatus" type="radio" className="updateAcceptanceRBA"
                                name="updateAcceptanceRBA" value="WAITLISTED"/>
                            <label>Waitlisted</label>
                        </div>
                        <div className="acceptanceRB">
                            <input id="appStatus" type="radio" className="updateAcceptanceRBA"
                                name="updateAcceptanceRBA" value="PENDING"/>
                            <label>Pending</label>
                        </div>
                        <div className="acceptanceRB">
                            <input id="appStatus" type="radio" className="updateAcceptanceRBA"
                                name="updateAcceptanceRBA" value="DEFERRED"/>
                            <label>Deferred</label>
                        </div>
                        <div className="acceptanceRB">
                            <input id="appStatus" type="radio" className="updateAcceptanceRBA"
                                name="updateAcceptanceRBA" value="WITHDRAWN"/>
                            <label>Withdrawn</label>
                        </div>
                    </div>
                    <button className='updateButton' id="updateCollegeDecisionButton">Enter</button>
                </div>
            </div>
            {/* Acceptance Decision Table */}
            <div className='sectionContainer'>
                <table className='acceptanceTable'>
                    <thead>
                        <tr>
                            <th>College</th>
                            <th>Acceptance Status</th>
                            <th>Questionable Decision?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Stony Brook University</td>
                            <td>ACCEPTED</td>
                            <td>Not Questionable</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Binghamton University</td>
                            <td>PENDING</td>
                            <td>Questionable</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>New York University</td>
                            <td>ACCEPTED</td>
                            <td>Not Questionable</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default Profile;