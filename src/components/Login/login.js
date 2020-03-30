import React, {useState} from 'react';
import Logo from '../logo';
import LoginPrompt from './loginprompt';
import RegisterPrompt from './registerprompt';
import './login.css';

function Login() {

    var [isRegister, setRegister] = useState(false);
    var form;

    const changeRegister = () => {
        setRegister(!isRegister);
    }

    if (!isRegister) {
        form = <LoginPrompt changeForm={changeRegister}/>;
    }
    else {
        form = <RegisterPrompt changeForm={changeRegister}/>;
    }

    return(
        <div className='loginPage' id='AppBody'>
            <Logo id='loginLogo'/>
            <div className='loginCenter'>
                <div className='loginDescription'>
                    <p>
                        (Description of c4me) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia lectus justo, sit amet interdum odio ultrices commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ultrices venenatis lectus at aliquam. Donec a sodales nulla, at accumsan est. Etiam pretium leo felis, nec scelerisque tellus viverra a.
                    </p>
                </div>
                {form}
            </div>
        </div>
        
    );

}

export default Login;