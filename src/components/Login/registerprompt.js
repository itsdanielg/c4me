import React from 'react';
import {Link} from 'react-router-dom';

function RegisterPrompt(props) {

    return(
        <div className='formGroup'>
            <div className="formField">
                <input className="formInput" type="text" name="firstname" id="registerFirstName" placeholder="First Name" />
            </div>
            <p className="emptyField" id="emptyRegisterFName" hidden>Please enter a first name.</p>
            <div className="formField">
                <input className="formInput" type="text" name="lastname" id="registerLastName" placeholder="Last Name" />
            </div>
            <p className="emptyField" id="emptyRegisterLName" hidden>Please enter a last name.</p>
            <div className="formField">
                <input className="formInput" type="text" name="email" id="registerEmail" placeholder="Email" />
            </div>
            <p className="emptyField" id="emptyRegisterEmail" hidden>Please enter an email.</p>
            <div className="formField">
                <input className="formInput" type="text" name="username" id="registerUsername" placeholder="Username" />
            </div>
            <p className="emptyField" id="emptyRegisterUser" hidden>Please enter a username.</p>
            <div className="formField">
                <input className="formInput" type="password" name="password" id="registerPassword" placeholder="Password" />
            </div>
            <p className="emptyField" id="emptyRegisterPassword" hidden>Please enter a password.</p>
            <div className="formField">
                <input className="formInput" type="password" name="confirmpassword" id="registerConfirm" placeholder="Confirm Password" />
            </div>
            <p className="emptyField" id="emptyRegisterConfirm" hidden>Please confirm your password.</p>
            <div>
                <Link to='/home'>
                    <button className="formButton">Login</button>
                </Link>
            </div>
            <div className="otherForms">
                <label className="newClick" onClick={() => props.setFormState(0)}>User Login</label>
                <label className="newClick" onClick={() => props.setFormState(1)}>Admin Login</label>
            </div>
        </div>
    )
    
}

export default RegisterPrompt;