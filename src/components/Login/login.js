import React, {useState} from 'react';
import Logo from '../logo';
import LoginPrompt from './loginprompt';
import RegisterPrompt from './registerprompt';
import AdminPrompt from './adminprompt';
import '../../css/login.css';

function Login() {

    var [formState, setFormState] = useState(0);
    var form;

    if (formState === 0) {
        form = <LoginPrompt setFormState={setFormState}/>;
    }
    else if (formState === 1) {
        form = <AdminPrompt setFormState={setFormState}/>;
    }
    else {
        form = <RegisterPrompt setFormState={setFormState}/>;
    }

    return(
        <div className='loginPage'>
            <Logo id='loginLogo'/>
            <div className='loginCenter'>
                <div className='loginDescription'>
                    <p>
                        Are you currently a high school student and don't know where to start with your college application process? Do you plan on receiving a bachelor's degree within the next 4 years of your college career? <strong>College 4 Me</strong> (stylized as <strong>c4me</strong>) is the website that will help and assist current high school students like you into applying to the top universities and colleges of your choosing. Register and login to learn more!
                    </p>
                </div>
                {form}
            </div>
        </div>
        
    );

}

export default Login;