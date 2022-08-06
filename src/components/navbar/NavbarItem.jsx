import React from 'react'

const NavbarItem = (props) => {
    const { name, href, index } = props;
    return (
        <li className="nav-item me-5" key={index}>                        
            <a className="nav-link" aria-current="page" href={href}>{name}</a>
        </li>
    )
}

export default NavbarItem