import React from 'react'
import { NavLink } from 'react-router-dom';

const NavbarItem = (props) => {
    const { label, to, index } = props;
    return (
        <li className="nav-item me-5" key={index}>                        
            <NavLink className="nav-link" aria-current="page" to={to}>{label}</NavLink>
        </li>
    )
}

export default NavbarItem