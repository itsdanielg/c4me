import React from 'react';
import logo from '../images/logo.png';

function Logo(props) {

    return(
        <div className='logo' id={props.id}>
            <img src={logo} alt="Logo of c4me"></img>
        </div>
    );

}

export default Logo;