import React from 'react'

const NavbarMultiItem = (props) => {
    const { name, childs, index } = props;
    return (
        <li className="nav-item dropdown me-5" key={index}>
            <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {name}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                { childs.map((item, key) =>
                (
                    <li key={""+index+key}><a className="dropdown-item" href={item.href}>{item.name}</a></li>
                )
                )}
            </ul>
        </li>
    )
}

export default NavbarMultiItem