import React from 'react'
import logo from '../../../img/logo.png';

const Logo = (props) => {
    const { name, height } = props;
    return (
        <a className="navbar-brand" href="/">
            <img src={logo} alt="" height={ height } className="me-2"/>
            { name }
        </a>
    )
}

export default Logo