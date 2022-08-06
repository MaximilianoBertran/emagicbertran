import React from 'react'
import './css/navbar.css'
import NavLogout from './complements/NavLogout';
import NavbarItem from './complements/NavbarItem';
import NavbarMultiItem from './complements/NavbarMultiItem';
import NavLogin from './complements/NavLogin';

import CartWidget from './complements/CartWidget';
import Logo from './complements/Logo';


const Navbar = () => {

    const navBarItems = [
        { name: "Home", href: "/", childs: false },
        { name: "About Us", href: "/", childs: false },
        { name: "Categories", href: "/", childs: [
            { name: "Spells", href: "/", childs: false },
            { name: "Books", href: "/", childs: false },
            { name: "Runes", href: "/", childs: false },
            { name: "Weapons", href: "/", childs: false }
        ] }
    ];

    const user = {name: "Maximiliano", apellido: "Bertran", img: "https://www.nacionflix.com/__export/1645312494958/sites/debate/img/2022/02/19/serie-halo-misterioso-rostro-master-chief.jpg_1339198940.jpg"}
    const cart = 0
    const appName = "e-Magic"

    function renderNavElement(item, index){
        if(item.childs){
            return <NavbarMultiItem name={item.name} childs={item.childs} index={index} />
        } else {
            return <NavbarItem name={item.name} href={item.href} index={index}/>
        }   
    }

    function renderLoginElement(user){
        if(user){
            return <NavLogin name={user.name} img={user.img}/>
        } else {
            return <NavLogout />
        }   
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark desktop">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Logo name={ appName } height={ 40 } />
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
                        <ul className="navbar-nav">
                            { navBarItems.map((item, index) =>
                            (
                                renderNavElement(item, index)
                            )
                            )}
                        </ul>
                    </div>
                    { renderLoginElement(user) }
                    <CartWidget cart={cart} />
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mobile">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Logo name={ appName } height={ 40 } />
                    { renderLoginElement(user) }
                    <CartWidget cart={cart} />
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarNav">
                        <ul className="navbar-nav">
                            { navBarItems.map((item, index) =>
                            (
                                renderNavElement(item, index)
                            )
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}

export default Navbar