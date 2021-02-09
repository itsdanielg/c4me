import React from 'react';
import {Link} from 'react-router-dom';

function LoginPrompt(props) {

    return(
        <div className='formGroup'>
            <div className="formField">
                <input className="formInput" type="text" name="username" id="usernamelogin" placeholder="Username" />
            </div>
            <p className="emptyField" id="emptyUser" hidden>Please enter a username.</p>
            <div className="formField">
                <input className="formInput" type="password" name="password" id="passwordlogin" placeholder="Password" />
            </div>
            <p className="emptyField" id="emptyPass" hidden>Please enter a password.</p>
            <div >
                <Link to='/home'>
                    <button className="formButton">Login</button>
                </Link>
            </div>
            <div className="otherForms">
                <label className="newClick" onClick={() => props.setFormState(2)}>New User?</label>
                <label className="newClick" onClick={() => props.setFormState(1)}>Admin Login</label>
            </div>
        </div>
    )
    
}



export default LoginPrompt;