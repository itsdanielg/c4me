import React from 'react';
import {Link} from 'react-router-dom';

function LoginPrompt(props) {

    return(
        <div className='formGroup'>
            <div className='formField'>
                <input type="text" name="username" placeholder="Username" />
            </div>
            <div className='formField'>
                <input type="text" name="password" placeholder="Password" />
            </div>
            <div >
                <Link to='/home'>
                    <button className="formButton">Login</button>
                </Link>
            </div>
            <label className="newClick" onClick={props.changeForm}>New User?</label>
        </div>
    )
    
}



export default LoginPrompt;