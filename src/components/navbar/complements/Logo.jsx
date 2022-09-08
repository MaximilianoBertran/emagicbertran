import React, { useContext } from 'react'
import logo from '../../../img/logo.png';
import { GlobalContext } from '../../../context/GlobalProvider';

const Logo = (props) => {
    const { height } = props;
    const {appName} = useContext(GlobalContext)
    return (
        <a className="navbar-brand" href="/">
            <img src={logo} alt="" height={ height } className="me-2"/>
            { appName }
        </a>
    )
}

export default Logo