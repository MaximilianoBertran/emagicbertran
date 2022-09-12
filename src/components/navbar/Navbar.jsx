import React, { Fragment, useContext } from 'react'
import './css/navbar.css'
import NavLogout from './complements/NavLogout';
import NavbarItem from './complements/NavbarItem';
import NavbarMultiItem from './complements/NavbarMultiItem';
import NavLogin from './complements/NavLogin';
import { UserContext } from '../../context/UserProvider';

import CartWidget from './complements/CartWidget';
import Logo from './complements/Logo'
import config from './config.json'
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const {user} = useContext (UserContext)

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark desktop">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Logo height={ 40 } />
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
                        <ul className="navbar-nav">
                            { 
                                config.routes.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.childs 
                                        ? <NavbarMultiItem label={item.label} childs={item.childs} index={"d"+index} />
                                        : <NavbarItem label={item.label} to={item.to} index={"d"+index}/>}
                                    </Fragment>
                                ))
                            }
                        </ul>
                    </div>
                    { user.id ?
                    <NavLogin />
                    :
                    <NavLogout />
                    }
                    <CartWidget />
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mobile">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Logo height={ 40 } />
                    { user.id ?
                    <NavLogin name={user.username} img={user.img}/>
                    :
                    <NavLogout />
                    }
                    <CartWidget />
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
                        <ul className="navbar-nav">
                            { config.routes.map((item, index) => (
                                <Fragment key={index}>
                                    {item.childs 
                                    ? <NavbarMultiItem label={item.label} childs={item.childs} index={"m"+index} />
                                    : <NavbarItem label={item.label} to={item.to} index={"m"+index}/>}
                                </Fragment>
                            ))}
                            { !user.id &&
                                <Fragment>
                                    <li className="nav-item me-5">
                                        <NavLink className="nav-link" aria-current="page" to="login">Login</NavLink>
                                    </li>
                                    <li className="nav-item me-5">
                                        <NavLink className="nav-link" aria-current="page" to="register">Sign-up</NavLink>
                                    </li>
                                </Fragment>   
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}

export default Navbar