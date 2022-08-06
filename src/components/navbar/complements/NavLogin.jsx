import React from 'react'
import DefaultImg from '../../../img/default_profile.jpg'

const NavLogin = (props) => {
    const { name, img } = props;
    return (
        <div className="dropdown text-end">
            
            <a href="/" className="d-inline link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={ img ?? DefaultImg } alt="mdo" width="32" height="32" className="rounded-circle me-2" />
                <span className='username'>{ name }</span>
            </a>
            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" style={{right: '0', left: 'unset'}}>
                <li><a className="dropdown-item" href="/">Settings</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Sign out</a></li>
            </ul>
        </div>
    )
}

export default NavLogin
