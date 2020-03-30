import React from 'react';
import {Link} from 'react-router-dom';

function RegisterPrompt(props) {

    return(
        <div className='formGroup'>
            <div className='formField'>
                <input type="text" name="username" placeholder="Username" />
            </div>
            <div className='formField'>
                <input type="text" name="password" placeholder="Password" />
            </div>
            <div className='formField'>
                <input type="text" name="confirmpassword" placeholder="Confirm Password" />
            </div>
            <div className='formField'>
                <input type="text" name="email" placeholder="Email" />
            </div>
            <div className='formField'>
                <input type="text" name="confirmemail" placeholder="Confirm Email" />
            </div>
            <div>
                <Link to='/home'>
                    <button className="formButton">Register</button>
                </Link>
            </div>
            <label className="newClick" onClick={props.changeForm}>Back to Login</label>
        </div>
    )
    
}

export default RegisterPrompt;