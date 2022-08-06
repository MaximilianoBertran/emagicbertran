import React from 'react'
import logo from '../../img/logo.png';
import NavLogout from './NavLogout';
import NavbarItem from './NavbarItem';
import NavbarMultiItem from './NavbarMultiItem';
import NavLogin from './NavLogin';

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

    const user = {name: "Maxi", apellido: "Bertran", img: "https://www.nacionflix.com/__export/1645312494958/sites/debate/img/2022/02/19/serie-halo-misterioso-rostro-master-chief.jpg_1339198940.jpg"}

    function renderNavElement(item, index){
        if(item.childs){
            return <NavbarMultiItem name={item.name} childs={item.childs} index={index} />
        } else {
            return <NavbarItem name={item.name} href={item.href} index={index}/>
        }   
    }

    function renderLoginElement(user){
        if(user){
            return <NavLogin user={user} cart={0}/>
        } else {
            return <NavLogout />
        }   
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand ms-3" href="/">
                    <img src={logo} alt="" height="40" className="me-2"/>
                    e-Magic
                </a>
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
            </div>
        </nav>
    )
}

export default Navbar