import React from 'react'
import { Link } from 'react-router-dom';

const NavbarMultiItem = (props) => {
    const { label, childs, index } = props;
    return (
        <li className="nav-item dropdown me-5" key={index}>
            <Link className="nav-link dropdown-toggle" to="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {label}
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                { childs.map((item, i) =>
                (
                    <li key={index+i}><Link className="dropdown-item" to={`${item.to}${item.label.toLowerCase()}`}>{item.label}</Link></li>
                )
                )}
            </ul>
        </li>
    )
}

export default NavbarMultiItem