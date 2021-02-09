import React from 'react';
import {Link} from 'react-router-dom';

function AdminPrompt(props) {

    return(
        <div className='formGroup'>
            <div className="formField">
                <input className="formInput" type="text" name="username" id="adminUser" placeholder="Admin Username" />
            </div>
            <p className="emptyField" id="emptyAdminUser" hidden>Please enter administrator username.</p>
            <div className="formField">
                <input className="formInput" type="password" name="password" id="adminPassword" placeholder="Admin Password" />
            </div>
            <p className="emptyField" id="emptyAdminPass" hidden>Please enter administrator username.</p>
            <div >
                <Link to='/administrator'>
                    <button className="formButton">Login</button>
                </Link>
            </div>
            <div className="otherForms">
                <label className="newClick" onClick={() => props.setFormState(2)}>New User?</label>
                <label className="newClick" onClick={() => props.setFormState(0)}>User Login</label>
            </div>
        </div>
    )
    
}



export default AdminPrompt;