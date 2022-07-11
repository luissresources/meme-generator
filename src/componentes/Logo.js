import React from 'react';
import '../stylesheets/Logo.css';

const Logo = ({logo}) => {
    return (
        <div className='container-logo'>
            <img 
                src={logo}
                className = 'logo'
                alt="logo" />
        </div>
    )
}

export default Logo;